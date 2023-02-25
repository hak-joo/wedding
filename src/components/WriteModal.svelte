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
  * {
    font-family: 'Nanum Myeongjo', serif;
  }
  .modal {
    &-wrapper {
      position: fixed;
      display: flex;
      z-index: 1000;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(101, 112, 152, 0.8);
    }
    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 440px;
      height: 100%;
      /* background-color: #ced2df; */
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 100vw;
      }
    }

    &-slot {
      max-height: 100%;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
  }
  .form {
    &-container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 80%;
      height: 75%;
      background-color: #fef6f5;
      padding: 10px 8px;
      box-shadow: 1px 2px 3px 0 #ccc;
      border-radius: 5px;
    }
    &-header {
      display: flex;
      padding: 40px 0;
      justify-content: center;
    }
    &-close-button {
      position: absolute;
      right: 15px;
    }
    &-sender {
      display: flex;
      position: relative;
      p {
        padding: 10px;
      }
      width: 100%;
    }
    &-content {
      display: flex;
      flex-direction: column;
      padding: 10px;
      flex: 1;
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'

  import { portal } from 'svelte-portal'
  import './style.scss'

  export let startY = 0
  export let isShow: boolean = true
  export let title = ''

  const makePostIt = (node: Element, { delay = 0, duration = 400 }) => {
    return {
      delay,
      duration,
      css: (t: number) => `
          min-width: 165px;
          max-width: 80%;
          width: ${t * 80}%;
          min-height: 230px;
          height: ${t * 75}%;
          `
    }
  }
</script>

{#if isShow}
  <div class="modal-wrapper" transition:fade use:portal={'#portal'}>
    <div class="modal-container">
      <div
        class="form-container"
        in:makePostIt={{ duration: 500 }}
        out:makePostIt={{ duration: 500 }}
      >
        <p class="form-header" transition:fade={{ duration: 500 }}>
          축하 글을 남겨주세요!
        </p>

        <div class="form-noti" />
        <button
          class="form-close-button"
          on:click={() => {
            isShow = false
          }}>X</button
        >
        <div class="form-content">
          <div class="form-sender">
            <input type="text" required />
            <label>작성자</label>
            <span />
          </div>

          <p>내용</p>
          <textarea />
        </div>
      </div>
    </div>
  </div>
{/if}
