export type EnquiryFields = {
  name: string;
  email: string;
  company: string;
  topic: string;
  topicLabel: string;
  message: string;
  phone: string;
  budget: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(fields: EnquiryFields): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const company = fields.company.trim();
  const message = fields.message.trim();
  const phone = fields.phone.trim();
  const budget = fields.budget.trim();

  if (!name) errors.name = "Enter your name.";
  else if (name.length > 120) errors.name = "Use a shorter name.";

  if (!email) errors.email = "Enter your work email.";
  else if (email.length > 200 || !emailPattern.test(email)) {
    errors.email = "Enter a valid work email.";
  }

  if (!fields.topic.trim()) errors.topic = "Choose what you need help with.";

  if (!message) errors.message = "Describe the problem in a few sentences.";
  else if (message.length > 4000) errors.message = "Shorten the description and send the detail by email if needed.";

  if (company.length > 160) errors.company = "Use a shorter company or product name.";
  if (budget.length > 200) errors.budget = "Shorten the budget or timeline note.";

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      errors.phone = "Enter a phone number, or leave this blank.";
    }
  }

  return errors;
}

export function mailtoUrl(to: string, fields: EnquiryFields): string {
  const head = [
    `Name: ${fields.name.trim()}`,
    `Work email: ${fields.email.trim()}`,
  ];
  if (fields.company.trim()) head.push(`Company or product: ${fields.company.trim()}`);
  head.push(`Help with: ${fields.topicLabel.trim()}`);
  if (fields.phone.trim()) head.push(`Phone: ${fields.phone.trim()}`);
  if (fields.budget.trim()) head.push(`Budget or timeline: ${fields.budget.trim()}`);

  const body = `${head.join("\n")}\n\n${fields.message.trim()}`;
  const subject = `Project enquiry: ${fields.topicLabel.trim()}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
