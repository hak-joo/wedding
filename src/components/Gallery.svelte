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
      border-radius: 30px;
      width: 405px;
      height: 100%;
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 100vw;
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
      padding: 3px;
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

  let itemTags: any[] = itemList.map(() => {})
  let carouselTag: any

  let containerWidth = 405
  let currentIdx = 0
  let startX = 0
  let dX = 0

  $: imageHeight =
    currentIdx === 0 ? 'auto' : `${(itemTags[currentIdx] as HTMLElement).offsetHeight}px`
  $: transformX = !isMouseDown
    ? `translateX(-${currentIdx * containerWidth}px)`
    : `translateX(-${currentIdx * containerWidth + dX}px)`

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
