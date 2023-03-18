export const copyContent = (content: string) => {
  const textarea = document.createElement('textarea')
  document.body.appendChild(textarea)
  textarea.value = content
  textarea.select()
  textarea.setSelectionRange(0, 99999)
  document.execCommand('copy')
  textarea.setSelectionRange(0, 0)
  document.body.appendChild(textarea)
  document.body.removeChild(textarea)
}
