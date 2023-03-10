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
  .modal {
    &-wrapper {
      position: fixed;
      display: flex;
      z-index: 1000;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    &-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: var(--top);
      width: 440px;
      height: 100%;
      background-color: #fff;
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 100vw;
      }
    }
    &-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 80px;
      color: #657098;
    }
    &-slot {
      flex: 1;
      padding-top: 10px;
      background-color: #f2f2f2;
      border-radius: 20px 20px 0 0;

      @media (max-width: 767px) {
        padding: 0px 40px;
      }
      @media (max-width: 567px) {
        padding: 0;
      }
    }

    &-title {
      font-size: 24px;
      font-family: 'Nanum Myeongjo', serif;
      font-weight: bold;
      border-bottom: 2px dotted #657098;

      &-close {
        position: absolute;
        right: 5%;
        &:after {
          display: inline-block;
          content: '\00d7';
          font-size: 24px;
        }
      }
    }
  }
</style>

<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { portal } from 'svelte-portal'

  export let isShow: boolean = true
  export let title = ''

  let startY = 0
  let dY = 0
  let isMouseDown = false
  $: top = `${dY}px`

  const onTouchStart = (e: TouchEvent) => {
    startY = e.touches[0].screenY
    isMouseDown = true
  }

  const onTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    if (!isMouseDown) return

    let moveY = e.touches[0].screenY - startY
    if (moveY < 0) return
    dY = moveY
  }

  const onTouchEnd = async (e: TouchEvent) => {
    if (!isMouseDown) return
    if (dY > 180) {
      startY = 0
      isMouseDown = false
      isShow = false
      dY = 0
    } else {
      dY = 0
      startY = 0
    }
    isMouseDown = false
  }
</script>

{#if isShow}
  <div
    class="modal-wrapper"
    use:portal={'#portal'}
    transition:fly={{ y: 300 }}
    style="--top:{top};"
  >
    <div class="modal-container">
      <div
        class="modal-header"
        on:touchstart={onTouchStart}
        on:touchmove={onTouchMove}
        on:touchend={onTouchEnd}
      >
        <div class="modal-title ">{title}</div>
        <button
          class="modal-title-close"
          on:click={() => {
            isShow = false
          }}
        />
      </div>
      <div class="modal-slot">
        <slot />
      </div>
    </div>
  </div>
{/if}
