import { mailtoUrl, validateEnquiry, type EnquiryFields } from "../lib/enquiry";

type FormStatus = "pending" | "success" | "error";

export function bindEnquiryForm(accessKey: string): void {
  const form = document.querySelector<HTMLFormElement>("[data-enquiry]");
  if (!form || form.dataset.bound === "true") return;
  form.dataset.bound = "true";
  form.noValidate = true;

  const topicInput = form.querySelector<HTMLSelectElement>("#topic");
  const requested = new URLSearchParams(window.location.search).get("topic");
  if (topicInput && requested) {
    const known = [...topicInput.options].some((option) => option.value === requested);
    if (known) topicInput.value = requested;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void sendEnquiry(form, accessKey.trim());
  });
}

function readFields(form: HTMLFormElement): EnquiryFields {
  const value = (id: string) =>
    (form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`#${id}`)?.value ??
      "");
  const topic = form.querySelector<HTMLSelectElement>("#topic");
  const topicLabel = topic?.selectedOptions[0]?.textContent?.trim() ?? "";
  return {
    name: value("name"),
    email: value("email"),
    company: value("company"),
    topic: value("topic"),
    topicLabel,
    message: value("message"),
    phone: value("phone"),
    budget: value("budget"),
  };
}

async function sendEnquiry(form: HTMLFormElement, accessKey: string): Promise<void> {
  const status = form.querySelector<HTMLElement>("[data-status]");
  const submit = form.querySelector<HTMLButtonElement>("[data-submit]");
  if (!status || !submit) return;

  clearErrors(form);
  const honeypot = form.querySelector<HTMLInputElement>("[data-honeypot]");
  const botcheck = form.querySelector<HTMLInputElement>("[name=botcheck]");
  const to = form.dataset.email ?? "";

  if ((honeypot && honeypot.value.trim()) || botcheck?.checked) {
    showStatus(
      status,
      `The enquiry was not sent. Email ${to} directly if this was a real request.`,
      "error",
    );
    return;
  }

  const fields = readFields(form);
  const errors = validateEnquiry(fields);
  const errorKeys = Object.keys(errors);
  if (errorKeys.length > 0) {
    showFieldErrors(form, errors);
    showStatus(status, "Check the highlighted fields and try again.", "error");
    document.getElementById(errorKeys[0])?.focus();
    return;
  }

  if (!accessKey) {
    showStatus(
      status,
      `Your email app should open with this enquiry addressed to ${to}. Nothing has been sent until you send that message. If no app opens, use the email link on this page.`,
      "pending",
    );
    window.location.href = mailtoUrl(to, fields);
    return;
  }

  const originalLabel = submit.textContent ?? "Send enquiry";
  submit.disabled = true;
  form.setAttribute("aria-busy", "true");
  submit.textContent = "Sending…";
  showStatus(status, "Sending your enquiry…", "pending");

  try {
    const payload: Record<string, string> = {
      access_key: accessKey,
      subject: `Project enquiry: ${fields.topicLabel}`,
      from_name: form.dataset.fromName ?? "Akshay Biradar website",
      name: fields.name.trim(),
      email: fields.email.trim(),
      replyto: fields.email.trim(),
      topic: fields.topicLabel,
      message: fields.message.trim(),
      botcheck: "",
    };
    if (fields.company.trim()) payload.company = fields.company.trim();
    if (fields.phone.trim()) payload.phone = fields.phone.trim();
    if (fields.budget.trim()) payload.budget = fields.budget.trim();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data: { success?: boolean; message?: string } = {};
    try {
      data = (await response.json()) as { success?: boolean; message?: string };
    } catch {
      data = {};
    }

    if (!response.ok || data.success !== true) {
      throw new Error(safeProviderMessage(data.message, accessKey));
    }

    form.reset();
    showStatus(
      status,
      "Web3Forms accepted the enquiry. I will reply by email. This does not reserve a start date.",
      "success",
    );
  } catch (error) {
    const detail = error instanceof Error ? error.message : "The form service did not accept it.";
    showStatus(
      status,
      `The enquiry was not sent. ${detail} You can try again, or email ${to} directly.`,
      "error",
    );
  } finally {
    submit.disabled = false;
    submit.textContent = originalLabel;
    form.removeAttribute("aria-busy");
  }
}

function safeProviderMessage(message: string | undefined, accessKey: string): string {
  if (!message) return "The form service did not accept the enquiry.";
  if (accessKey && message.includes(accessKey)) return "The form service rejected the enquiry.";
  return message.slice(0, 240);
}

function clearErrors(form: HTMLFormElement): void {
  form.querySelectorAll<HTMLElement>("[data-error]").forEach((node) => {
    node.textContent = "";
    node.hidden = true;
  });
  form.querySelectorAll<HTMLElement>("[aria-invalid]").forEach((field) => {
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
  });
}

function showFieldErrors(form: HTMLFormElement, errors: Record<string, string>): void {
  for (const [id, message] of Object.entries(errors)) {
    const field = document.getElementById(id);
    const error = form.querySelector<HTMLElement>(`[data-error-for="${id}"]`);
    if (!field || !error) continue;
    error.textContent = message;
    error.hidden = false;
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", error.id);
  }
}

function showStatus(status: HTMLElement, message: string, kind: FormStatus): void {
  status.hidden = false;
  status.textContent = message;
  status.dataset.kind = kind;
  if (kind === "error") status.setAttribute("role", "alert");
  else status.setAttribute("role", "status");
  status.focus();
}
