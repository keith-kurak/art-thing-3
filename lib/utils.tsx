export function stripTags(htmlish: string) {
  return htmlish.replace(/<[^>]*>?/gm, '')
}