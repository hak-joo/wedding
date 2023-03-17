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
  }
  .form {
    &-container {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 80%;
      height: 70%;
      background-color: #fef6f5;
      padding: 10px 8px;
      box-shadow: 1px 2px 3px 0 #ccc;
      border-radius: 5px;
      transition: width, height 0.5s ease;
      &.sended {
        width: 70%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &-header {
      display: flex;
      color: #666;
      padding: 40px 0 40px;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-close-button {
      position: absolute;
      right: 15px;
      &:after {
        display: inline-block;
        content: '\00d7';
        font-size: 24px;
      }
    }
    &-sender {
      display: flex;
      position: relative;
      width: 100%;
      margin-bottom: 60px;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-message {
      display: flex;
      position: relative;
      width: 100%;
      margin-bottom: 60px;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-content {
      display: flex;
      flex-direction: column;
      padding: 10px;
      flex: 1;
    }
    &-footer {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      button {
        width: 100px;
        height: 40px;
        color: #fff;
        background-color: #666;
        border-radius: 5px;
        transition: all 0.5s;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        &:hover {
          color: #fff;
          font-weight: bold;
          background-color: #bf8dcf;
        }
      }
    }
  }
  .noti {
    &-sender {
      font-size: 20px;
      color: #bf8dcf;
      margin-right: 10px;
    }
    &-message {
      font-size: 14px;
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'

  import { portal } from 'svelte-portal'
  import './style.scss'
  import dayjs from 'dayjs'
  import { sendComments } from '../api'

  export let startY = 0
  export let isShow: boolean = true
  export let title = ''

  let sended = false

  let textAreaRef: HTMLElement
  let sender = ''
  let comment = ''
  let password = ''
  let senderVal = true
  let commentVal = true
  let passwordVal = true
  const validateSender = () => {
    senderVal = sender !== ''
  }
  const validateComment = () => {
    commentVal = comment !== ''
  }
  const validatePassword = () => {
    passwordVal = password !== ''
  }
  const makePostIt = (node: Element, { delay = 0, duration = 400 }) => {
    sender = ''
    comment = ''
    password = ''
    senderVal = true
    commentVal = true
    passwordVal = true
    if (sended) {
      sended = false
      return {
        delay,
        duration,
        css: (t: number) => `
          max-width: 300Px;
          width: ${t * 80}%;
          max-height: 200px;
          height: ${t * 50}%;
          `
      }
    }
    return {
      delay,
      duration,
      css: (t: number) => `
          min-width: 165px;
          max-width: 80%;
          width: ${t * 80}%;
          min-height: 230px;
          height: ${t * 50}%;
          `
    }
  }

  const sleep = (time: number) => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }

  const sendMessage = async () => {
    if (!senderVal || !passwordVal || !commentVal) return
    if (sender === '') {
      senderVal = false
      return
    }
    if (comment === '') {
      commentVal = false
      return
    }
    if (password === '') {
      passwordVal = false
      return
    }
    sended = true
    await sendComments({
      sender,
      comment,
      createdDate: dayjs().toISOString()
    })
    await sleep(1000)
    isShow = false
  }
  const onResizeTextArea = (e: KeyboardEvent) => {
    if (textAreaRef.scrollHeight > 100) return
    textAreaRef.style.height = 'auto'
    textAreaRef.style.height = `${textAreaRef.scrollHeight}px`
  }
</script>

{#if isShow}
  <div class="modal-wrapper" transition:fade use:portal={'#portal'}>
    <div class="modal-container">
      <div
        class="form-container"
        class:sended
        in:makePostIt={{ duration: 500 }}
        out:makePostIt={{ duration: 500 }}
      >
        {#if !sended}
          <p class="form-header">축하 글을 남겨주세요!</p>

          <div class="form-noti" />
          <button
            class="form-close-button"
            on:click={() => {
              isShow = false
            }}
          />
          <div class="form-content">
            <div class="form-sender">
              <input
                class="sender-input"
                class:error={!senderVal}
                type="text"
                required
                maxlength={5}
                bind:value={sender}
                on:blur={validateSender}
                on:input={validateSender}
              />
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="sender-label" class:error={!senderVal}>작성자</label>
              <span class="bottom-deco" class:error={!senderVal} />
            </div>
            <div class="form-message">
              <textarea
                class="message-input"
                class:error={!commentVal}
                required
                rows={1}
                bind:value={comment}
                bind:this={textAreaRef}
                on:blur={validateComment}
                on:input={validateComment}
                on:keyup={e => onResizeTextArea(e)}
                on:keydown={e => onResizeTextArea(e)}
              />
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="message-label" class:error={!commentVal}>내용</label>
              <span class="bottom-deco" class:error={!commentVal} />
            </div>
            <div class="form-sender">
              <input
                bind:value={password}
                class="sender-input"
                class:error={!passwordVal}
                type="password"
                on:blur={validatePassword}
                on:input={validatePassword}
                required
              />
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="sender-label" class:error={!passwordVal}>비밀번호</label>
              <span class="bottom-deco" class:error={!passwordVal} />
            </div>
          </div>
          <div class="form-footer">
            <button on:click={sendMessage}>전송</button>
          </div>
        {:else}
          <div class="noti" transition:fade={{ duration: 500 }}>
            <span class="noti-sender">{sender}</span>
            <span class="noti-message">님, 감사합니다.</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
