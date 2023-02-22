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
      background-color: #cccccccc;
    }
    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 440px;
      height: 100%;
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
      height: 60px;
      background-color: #e2e2e200;
    }
    &-slot {
      max-height: 100%;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    &-title {
      font-size: 24px;
      font-family: 'Nanum Myeongjo', serif;
      &-close {
        position: absolute;
        right: 5%;
      }
    }
  }
</style>

<script lang="ts">
  import { fly, fade } from 'svelte/transition'
  import { portal } from 'svelte-portal'

  export let isShow: boolean = true
  export let title = ''
  export let toggoleModal: () => void = () => {}
</script>

{#if isShow}
  <div class="modal-wrapper" use:portal={'#image'} transition:fade hidden>
    <div class="modal-container" transition:fly={{ y: 3000 }}>
      <div class="modal-header">
        <span class="modal-title">{title}</span>
        <button class="modal-title-close" on:click={() => toggoleModal()}>X</button>
      </div>
      <div class="modal-slot">
        <slot />
      </div>
    </div>
  </div>
{/if}
