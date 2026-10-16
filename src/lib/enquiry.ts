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

const emailPattern = /^[^\s@.]+[^\s@]*@[^\s@]+\.[a-z]{2,}$/i;

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
  else if (email.length > 200 || email.includes("..") || !emailPattern.test(email)) {
    errors.email = "Enter a valid work email.";
  }

  if (message.length > 4000) errors.message = "Shorten the description and send the detail by email if needed.";

  if (company.length > 160) errors.company = "Use a shorter company name.";
  if (budget.length > 200) errors.budget = "Shorten the budget note.";

  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = "Enter a phone number.";
  else if (digits.length < 7 || digits.length > 15) errors.phone = "Enter a valid phone number.";

  return errors;
}

export function mailtoUrl(to: string, fields: EnquiryFields): string {
  const head = [
    `Name: ${fields.name.trim()}`,
    `Work email: ${fields.email.trim()}`,
  ];
  if (fields.company.trim()) head.push(`Company: ${fields.company.trim()}`);
  head.push(`Phone: ${fields.phone.trim()}`);
  if (fields.topic.trim()) head.push(`Help with: ${fields.topicLabel.trim()}`);
  if (fields.budget.trim()) head.push(`Budget: ${fields.budget.trim()}`);

  const note = fields.message.trim();
  const body = note ? `${head.join("\n")}\n\n${note}` : head.join("\n");
  const subject = fields.topic.trim()
    ? `Project enquiry: ${fields.topicLabel.trim()}`
    : "Project enquiry from www.biradarakshay.com";
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
