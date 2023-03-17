export const longpress = (node: Node) => {
  const TIME_MS = 500
  let timeoutPtr: number
  function handleMouseDown(e: Event) {
    window.addEventListener('mousemove', handleMoveBeforeLong)
    timeoutPtr = window.setTimeout(() => {
      window.removeEventListener('mousemove', handleMoveBeforeLong)
      node.dispatchEvent(new CustomEvent('long'))
      // TODO - ideally make this not trigger long press again
      window.setTimeout(() => node.dispatchEvent(e), 0)
    }, TIME_MS)
  }
  function handleMoveBeforeLong(e: Event) {
    window.clearTimeout(timeoutPtr)
    window.removeEventListener('mousemove', handleMoveBeforeLong)
  }
  function handleMouseUp(e: Event) {
    window.clearTimeout(timeoutPtr)
    window.removeEventListener('mousemove', handleMoveBeforeLong)
  }
  node.addEventListener('mousedown', handleMouseDown)
  node.addEventListener('mouseup', handleMouseUp)
  return {
    destroy: () => {
      node.removeEventListener('mousedown', handleMouseDown)
      node.removeEventListener('mouseup', handleMouseUp)
    }
  }
}
