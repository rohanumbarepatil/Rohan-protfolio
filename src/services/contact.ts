export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export function createMailtoLink(values: ContactFormValues, recipient: string) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
  )

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}
