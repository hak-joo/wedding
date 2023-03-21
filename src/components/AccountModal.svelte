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

    &-header {
      display: flex;
      justify-content: end;
    }
    &-btn {
      &-close {
        display: inline-block;
        cursor: pointer;
        &:after {
          display: inline-block;
          content: '\00d7';
          font-size: 24px;
        }
      }
    }
  }
  .account {
    &-container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 80%;
      height: fit-content;
      background-color: #fef6f5;
      padding: 5px 10px 30px 10px;
      box-shadow: 1px 2px 3px 0 #ccc;
      border-radius: 5px;
      transition: width, height 0.5s ease;
      gap: 5px;
    }
    &-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
    }
    &-text {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-btn {
      &-copy {
        background-color: #3f3740;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border-radius: 12px;
        font-weight: 400;
        font-family: 'Nanum Gothic', serif;
        width: 57.14px;
        height: 24px;
      }
      &-pay {
        &-icon {
          height: 24px;
        }
        cursor: pointer;
      }
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'

  import { portal } from 'svelte-portal'
  import './style.scss'
  import { toast } from '@zerodevx/svelte-toast'
  import Toast from './Toast.svelte'
  import { copyContent } from '../lib/copy'

  export let startY = 0
  export let payIcon = ''
  export let isShow: boolean = true
  export let accountInfo = {
    name: '',
    account: {
      bank: '',
      number: ''
    },
    pay: ''
  }

  const copyAccount = () => {
    copyContent(accountInfo.account.bank)

    toast.push('복사되었습니다.', {
      theme: {
        '--toastBackground': '#32AA62',
        '--toastColor': '#fff'
      },
      duration: 1000
    })
  }
</script>

{#if isShow}
  <Toast />
  <div class="modal-wrapper" transition:fade use:portal={'#portal'}>
    <div class="modal-container">
      <div class="account-container">
        <div class="modal-header">
          <button
            class="modal-btn-close"
            on:click={() => {
              isShow = false
            }}
          />
        </div>
        <div class="account-row">
          <div class="account-text">
            {accountInfo.account.bank} |
            {accountInfo.account.number}
          </div>
          <button class="account-btn-copy" on:click={copyAccount}> 복사 </button>
        </div>
        <div class="account-row">
          <div class="account-text">{accountInfo.name}</div>
          {#if accountInfo.pay}
            <a class="account-btn-pay" href={accountInfo.pay}>
              <img class="account-btn-pay-icon" alt="pay" src={payIcon} />
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
