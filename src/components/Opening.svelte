<style lang="scss">
  $svgMask: '/assets/heart.svg';
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
  .opening {
    &-container {
      position: fixed;
      z-index: 999999;
      width: 425px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
      background: #ffe6f2;

      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 100vw;
      }
    }
    &-letter {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Nanum Myeongjo', serif;

      padding-right: 4px;
      border-right: 2px solid #333;
      animation: blink-caret 0.6s step-end infinite;
    }

    &-heart {
      background-color: #eba0f8;
      width: 50px;
      aspect-ratio: 1;
      -webkit-mask: url($svgMask);
      mask: url($svgMask);
      /* transform: rotate(-45deg); */
      animation-name: beat;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      /* &:after {
        background-color: #eba0f8;
        content: '';
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0px;
        left: 25px;
      }
      &:before {
        background-color: #eba0f8;
        content: '';
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        left: 0px;
      } */
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: #333;
      }
    }

    @keyframes beat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.6);
      }
    }
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  export let show = false
  export let text = '결혼식에 초대합니다.'
  export let close = () => {}

  let typedChar = '' // SECTION displaying typed text
  let index = 0

  // If Input is empty, clear out SECTION displaying typed text
  $: if (!text) {
    typedChar = ''
    index = typedChar.length
  }

  let typewriter: any // for setInterval/clearInterval
  // Disable START button; prevent clicking twice
  let isTyping = false

  const typeChar = () => {
    if (index < text.length) {
      isTyping = true
      typedChar += text[index]
      index += 1
    }
  }
  $: if (text.length > 0) {
    typing()
  }
  $: if (text.length > 0 && index === text.length) {
    clearInterval(typewriter)
    isTyping = false
    setTimeout(() => close(), 1000)
  }

  const typing = () => (typewriter = setInterval(typeChar, 200))
</script>

{#if show}
  <div class="opening-container" out:fade>
    <div class="opening-heart" />
    <section>
      <p class="opening-letter">{typedChar}</p>
    </section>
  </div>
{/if}
