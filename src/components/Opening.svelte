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
      gap: 20px;
      background: #ffe6f2;

      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 100vw;
      }
    }
    &-letter {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }

    &-heart {
      background-color: pink;
      height: 50px;
      width: 50px;
      transform: rotate(-45deg);
      animation-name: beat;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      &:after {
        background-color: pink;
        content: '';
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 0px;
        left: 25px;
      }
      &:before {
        background-color: pink;
        content: '';
        border-radius: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        top: -25px;
        left: 0px;
      }
    }

    @keyframes beat {
      0% {
        transform: scale(1) rotate(-45deg);
      }
      50% {
        transform: scale(0.6) rotate(-45deg);
      }
    }
  }
</style>

<script>
  import { fade } from 'svelte/transition'
  import Typewriter from 'svelte-typewriter'

  export let show = true
  export let toggle = () => {}

  export let text = '결혼식에 초대합니다.'
</script>

{#if show}
  <div class="opening-container" transition:fade>
    <div class="opening-heart" />
    <Typewriter mode="concurrent" on:done={() => setTimeout(() => toggle(), 1000)}>
      <p class="opening-letter">{text}</p>
    </Typewriter>
  </div>
{/if}
