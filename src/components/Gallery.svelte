<style lang="scss">
  /*반응형 화면 크기*/
  $mobile: 767px;
  $tablet: 1023px;
  $desktop: 1024px;

  /*반응형, 브라우저 크기가 767px 이하일때*/
  @mixin mobile {
    @media (max-width: $mobile) {
      @content;
    }
  }

  /*반응형, 브라우저 크기가 768이상, 1023px 이하일때*/
  @mixin tablet {
    @media (min-width: ($mobile + 1)) and (max-width: $tablet) {
      @content;
    }
  }

  /*반응형, 브라우저 크기가 1024px 이상일때*/
  @mixin desktop {
    @media (min-width: $desktop) {
      @content;
    }
  }

  /*넓이, 높이 자동 계산함수*/
  @mixin square($size) {
    $calculated: 32px * $size;
    width: $calculated;
    height: $calculated;
  }

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
      width: 405px;
      min-width: 100%;
      height: 100%;
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 90vw;
      }
    }
    &-btn {
      z-index: 1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: #ffffff22;
      padding: 10px;
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
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'

  // props
  export let itemList: any[] = []
  export let currentIdx = 0
  export let setCurrentIdx: (idx: number) => void = () => {}

  export let toggoleModal: () => void = () => {}

  let itemTags: any[] = itemList.map(() => {})
  let carouselTag: any

  let containerWidth = 405
  let startX = 0
  let dX = 0
  let startY = 0
  let dY = 0

  $: imageHeight =
    currentIdx !== 0 && itemTags[currentIdx]
      ? `${(itemTags[currentIdx] as HTMLElement).offsetHeight ?? 0}px`
      : 'auto'
  $: transformX = !isMouseDown
    ? `translateX(-${currentIdx * containerWidth}px)`
    : `translateX(-${currentIdx * containerWidth + dX}px)`

  let isMouseDown = false

  const onMouseDown = (e: MouseEvent) => {
    startX = e.screenX
    startY = e.screenY
    isMouseDown = true

    window.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!isMouseDown) return
    let moveX = startX - e.screenX
    let moveY = startY - e.screenY
    dX = moveX
    dY = moveY
  }
  const onMouseUp = (e: MouseEvent) => {
    if (Array.from((e.target as HTMLElement).classList).includes('carousel-btn')) {
      dX = 0
      startX = 0
      dY = 0
      startY = 0
      isMouseDown = false
      window.removeEventListener('mouseup', onMouseUp)
      return
    }
    if (dX > 50) {
      setCurrentIdx(currentIdx + 1 >= itemList.length ? 0 : currentIdx + 1)
    } else if (dX < -50) {
      setCurrentIdx(currentIdx - 1 < 0 ? itemList.length - 1 : currentIdx - 1)
    } else if (dY === 0) {
      toggoleModal()
    }
    dX = 0
    startX = 0
    dY = 0
    startY = 0
    isMouseDown = false

    window.removeEventListener('mouseup', onMouseUp)
  }

  const onTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].screenX
    startY = e.touches[0].screenY
    isMouseDown = true
  }

  const onTouchMove = (e: TouchEvent) => {
    // e.preventDefault()
    if (!isMouseDown) return
    let moveX = startX - e.touches[0].screenX
    let moveY = startY - e.touches[0].screenY
    dX = moveX
    dY = moveY
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (Array.from((e.target as HTMLElement).classList).includes('carousel-btn')) {
      dX = 0
      startX = 0
      dY = 0
      startY = 0
      isMouseDown = false
      return
    }

    if (dX > 50) {
      setCurrentIdx(currentIdx + 1 >= itemList.length ? 0 : currentIdx + 1)
    } else if (dX < -50) {
      setCurrentIdx(currentIdx - 1 < 0 ? itemList.length - 1 : currentIdx - 1)
    } else if (dY === 0) {
      toggoleModal()
    }

    dX = 0
    startX = 0
    dY = 0
    startY = 0
    isMouseDown = false
  }

  onMount(() => {
    containerWidth = (carouselTag as HTMLElement).offsetWidth
  })
</script>

<div
  class="carousel-wrapper"
  style="--height:{imageHeight}; "
  transition:fly={{ y: 100, duration: 1000 }}
  on:mousedown={onMouseDown}
  on:mousemove={onMouseMove}
  on:mouseup={onMouseUp}
  on:touchstart={onTouchStart}
  on:touchmove={onTouchMove}
  on:touchend={onTouchEnd}
>
  <button
    class="carousel-btn prev"
    on:click={() => {
      currentIdx = currentIdx - 1 < 0 ? itemList.length - 1 : currentIdx - 1
    }}
  >
    {'<'}
  </button>
  <button
    class="carousel-btn next"
    on:click={() => {
      currentIdx = currentIdx + 1 >= itemList.length ? 0 : currentIdx + 1
    }}
  >
    {'>'}
  </button>
  <div bind:this={carouselTag} class="carousel-container" style="--tranx:{transformX}">
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
