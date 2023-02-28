<style lang="scss">
  .carousel {
    &-wrapper {
      width: 100%;
      position: relative;
      overflow: hidden;
    }
    &-container {
      width: var(--width);
      display: flex;
      overflow: hidden;
      transition: transform 0.5s ease-out;
      transform: var(--tranx);
    }
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.9);
      img {
        width: 420px;
        pointer-events: none;
      }
    }
    &-btn {
      z-index: 1;
      position: absolute;
      top: 50%;
      &.prev {
        left: 2%;
      }
      &.next {
        right: 2%;
      }
    }
  }
</style>

<script lang="ts">
  import { fly } from 'svelte/transition'
  // props
  export let interval = 200
  export let length = 5

  let currentIdx = 0
  let startX = 0
  let dX = 0

  $: imageWidth = `${length * interval}%`
  $: transformX = !isMouseDown
    ? `translateX(-${currentIdx * interval}px)`
    : `translateX(-${currentIdx * interval + dX}px)`

  let isMouseDown = false

  const onMouseDown = (e: MouseEvent) => {
    startX = e.screenX
    isMouseDown = true
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isMouseDown) return
    let moveX = startX - e.screenX
    if (moveX + (currentIdx + 1) * interval > length * interval) {
      moveX = 0
    }
    dX = moveX
  }
  const onMouseUp = (e: MouseEvent) => {
    if (dX > interval && currentIdx + 1 < length) {
      currentIdx++
    } else if (dX < -1 * interval && currentIdx + 1 <= length) {
      currentIdx--
    }
    dX = 0
    startX = 0
    isMouseDown = false
  }

  const onTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].screenX
    isMouseDown = true
  }

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    if (!isMouseDown) return
    let moveX = startX - e.touches[0].screenX
    if (moveX + (currentIdx + 1) * interval > length * interval) {
      moveX = 0
    }
    dX = moveX
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (dX > interval && currentIdx + 1 < length) {
      currentIdx++
    } else if (dX < -1 * interval && currentIdx + 1 <= length) {
      currentIdx--
    }
    dX = 0
    startX = 0
    isMouseDown = false
  }

  window.addEventListener('mouseup', onMouseUp)
</script>

<div class="carousel-wrapper" transition:fly={{ y: 100, duration: 500 }}>
  <!-- <button class="carousel-btn prev" on:click={() => currentIdx--}> prev </button>
  <button class="carousel-btn next" on:click={() => currentIdx++}> next </button> -->
  <div
    class="carousel-container"
    style="--width:{imageWidth}; --tranx:{transformX}"
    on:mousedown={onMouseDown}
    on:mousemove={onMouseMove}
    on:mouseup={onMouseUp}
    on:touchstart={onTouchStart}
    on:touchmove={onTouchMove}
    on:touchend={onTouchEnd}
  >
    <slot />
  </div>
</div>
