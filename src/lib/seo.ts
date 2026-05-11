export function updateSeo({
  title,
  description,
}: {
  title: string
  description: string
}) {
  document.title = title

  const setMeta = (selector: string, value: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector)
    if (element) {
      element.content = value
    }
  }

  setMeta('meta[name="description"]', description)
  setMeta('meta[property="og:title"]', title)
  setMeta('meta[property="og:description"]', description)
}
