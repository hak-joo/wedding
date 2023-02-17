<style lang="scss">
  .carousel {
    &-wrapper {
      width: 100%;
      height: var(--height);
      position: relative;
      overflow: hidden;
      transition: height 0.5s ease-out;
    }
    &-container {
      width: 100%;
      display: flex;
      transition: transform 0.5s ease-out;
      transform: var(--tranx);
    }
    &-item {
      pointer-events: none;
      border-radius: 30px;
      width: 405px;
      height: 100%;
    }
    &-btn {
      z-index: 1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #ffffff22;
      padding: 1vw;
      &.prev {
        left: 0%;
      }
      &.next {
        right: 0%;
      }
    }
  }
</style>

<script lang="ts">
  // props
  export let itemList: any[] = []

  let itemTags: any[] = itemList.map(() => {})

  let currentIdx = 0
  let startX = 0
  let dX = 0

  $: imageHeight =
    currentIdx === 0 ? 'auto' : `${(itemTags[currentIdx] as HTMLElement).offsetHeight}px`
  $: transformX = !isMouseDown
    ? `translateX(-${currentIdx * 405}px)`
    : `translateX(-${currentIdx * 405 + dX}px)`

  $: if (currentIdx) {
    console.log(currentIdx)
    console.log(startX)
    console.log(dX)
  }

  let isMouseDown = false

  const onMouseDown = (e: MouseEvent) => {
    startX = e.screenX
    isMouseDown = true
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isMouseDown) return
    let moveX = startX - e.screenX
    dX = moveX
  }
  const onMouseUp = (e: MouseEvent) => {
    if (dX > 0) {
      currentIdx = currentIdx + 1 >= itemList.length ? 0 : currentIdx + 1
    } else if (dX < 0) {
      currentIdx = currentIdx - 1 < 0 ? itemList.length - 1 : currentIdx - 1
    }

    dX = 0
    startX = 0
    isMouseDown = false
  }

  window.addEventListener('mouseup', onMouseUp)
</script>

<div
  class="carousel-wrapper"
  style="--height:{imageHeight}; "
  on:mousedown={onMouseDown}
  on:mousemove={onMouseMove}
  on:mouseup={onMouseUp}
>
  <button
    class="carousel-btn prev"
    on:click={() =>
      (currentIdx = currentIdx - 1 < 0 ? itemList.length - 1 : currentIdx - 1)}
  >
    {'<'}
  </button>
  <button
    class="carousel-btn next"
    on:click={() => (currentIdx = currentIdx + 1 >= itemList.length ? 0 : currentIdx + 1)}
  >
    {'>'}
  </button>
  <div class="carousel-container" style="--tranx:{transformX}">
    {#each itemList as item, idx}
      <img
        bind:this={itemTags[idx]}
        class="carousel-item"
        src={item.path}
        alt={item.path}
      />
    {/each}
  </div>
</div>
