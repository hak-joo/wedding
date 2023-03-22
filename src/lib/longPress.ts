export const longpress = (node: Node) => {
  const TIME_MS = 500
  let timeoutPtr: number
  function handleMouseDown(e: Event) {
    window.addEventListener('mousemove', handleMoveBeforeLong)
    window.addEventListener('touchmove', handleMoveBeforeLong, { passive: true })
    timeoutPtr = window.setTimeout(() => {
      window.removeEventListener('mousemove', handleMoveBeforeLong)
      window.removeEventListener('touchmove', handleMoveBeforeLong)
      node.dispatchEvent(new CustomEvent('long'))
      // TODO - ideally make this not trigger long press again
      window.setTimeout(() => node.dispatchEvent(e), 0)
    }, TIME_MS)
  }
  function handleMoveBeforeLong(e: Event) {
    window.clearTimeout(timeoutPtr)
    window.removeEventListener('mousemove', handleMoveBeforeLong)
    window.removeEventListener('touchmove', handleMoveBeforeLong)
  }
  function handleMouseUp(e: Event) {
    window.clearTimeout(timeoutPtr)
    window.removeEventListener('mousemove', handleMoveBeforeLong)
    window.removeEventListener('touchmove', handleMoveBeforeLong)
  }
  node.addEventListener('mousedown', handleMouseDown)
  node.addEventListener('touchstart', handleMouseDown, { passive: true })
  node.addEventListener('mouseup', handleMouseUp)
  node.addEventListener('touchend', handleMouseUp, { passive: true })
  return {
    destroy: () => {
      node.removeEventListener('mousedown', handleMouseDown)
      node.removeEventListener('touchstart', handleMouseDown)
      node.removeEventListener('mouseup', handleMouseUp)
      node.removeEventListener('touchend', handleMouseUp)
    }
  }
}
