<style lang="scss">
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
  .toast-wrapper {
    --toastContainerTop: auto;
    --toastContainerRight: 0.5rem;
    --toastContainerBottom: 0.5rem;
    --toastContainerLeft: 0.5rem;
    --toastWidth: 100%;
    --toastMinHeight: 2rem;
    --toastPadding: 0 0.5rem;
    --toastBarHeight: 0;
    font-size: 0.875rem;
    font-weight: 600;

    --toastBorderRadius: 2rem;
  }
  .comment {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    margin: 20px 10px;

    background-color: white;

    border-radius: 15px;

    line-height: 15px;
    box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
    font-family: 'Nanum Myeongjo', serif;

    &:nth-of-type(1) {
      margin-top: 0;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 30px;
    }

    &-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 40px;
      border-bottom: 1px solid #a3acce;
      padding-bottom: 10px;
      margin-bottom: 10px;

      &-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    &-sender {
      margin-right: 5px;
      font-family: 'Nanum Myeongjo', serif;
      color: #7667ae;
      font-size: 14px;
    }
    &-list {
      margin-top: 20px;
      width: 100%;
      max-height: calc(100vh - 80px);
      overflow-y: scroll;
    }
    &-content {
      line-height: 20px;
      font-size: 13px;
      transition: all 0.5s ease-in-out;
    }
    &-date {
      color: #999;
      font-size: 12px;
      line-height: 24px;
    }
    &-delete {
      width: 14px;
      margin-bottom: 4px;
    }
  }
  .form-delete {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    input {
      width: 0;
      border: none;
      border-bottom: 1px solid #bf8dcf;
      font-size: 10px;
      transition: width 1s;
      &:focus {
        outline: none;
      }
    }
    .active {
      width: 120px;
      padding: 0 4px;
      margin-right: 10px;
    }
    &-buttons {
      display: flex;
      justify-content: center;
      &-delete {
        width: 14px;
        transition: all 1s;
      }
      &-close {
        transition: all 1s;
        width: 0px;
        &:after {
          display: inline-block;
          content: '\00d7';
          font-size: 0px;
        }
      }
      .btn-active {
        width: 20px;
        margin-left: 5px;
        &:after {
          font-size: 18px;
        }
      }
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import { Comment } from '../views/Invitation/type'
  import dayjs, { duration } from 'dayjs'
  import AOS from 'aos'
  import { longpress } from './../lib/longPress'

  import 'aos/dist/aos.css' // You can also use <link> for styles
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
  import { getTimeDiff } from '../lib/timeDiff'
  import { removeComment } from '../api'

  export let comments: Comment[] = []
  AOS.init()

  let selectedIdx: number = -1
  const resetPassword = () => {
    deletePassword = ''
  }
  $: selectedIdx >= 0 && resetPassword()

  let deletePassword: string = ''
  const deleteComment = async (comment: Comment) => {
    if (comment.key && comment.password === deletePassword) {
      const result = await removeComment(comment.key)
      if (result) {
        toast.push('삭제되었습니다.', {
          theme: {
            '--toastBackground': '#32AA62',
            '--toastColor': '#fff'
          }
        })
        resetPassword()
        selectedIdx = -1
      } else {
        toast.push('실패하였습니다.', {
          theme: {
            '--toastBackground': '#AA3232',
            '--toastColor': '#fff'
          }
        })
      }
    } else {
      deletePassword = ''
      toast.push('패스워드가 일치하지 않습니다.', {
        theme: {
          '--toastBackground': '#AA3232',
          '--toastColor': '#fff'
        }
      })
    }
  }

  const copyComment = (comment: string) => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = comment
    textarea.select()
    document.execCommand('copy')
    document.body.appendChild(textarea)
    document.body.removeChild(textarea)

    toast.push('복사되었습니다.', {
      theme: {
        '--toastBackground': '#32AA62',
        '--toastColor': '#fff'
      },
      duration: 1000
    })
  }
</script>

<div class="comment-list">
  <div class="toast-wrapper">
    <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
  </div>
  {#each comments as comment, idx}
    <div
      class="comment"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration={800 + 100 * (idx + 1)}
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="true"
      use:longpress
      on:long={copyComment(comment.comment)}
    >
      <div class="comment-header">
        <div>
          <span class="comment-sender">{comment.sender}</span>
        </div>
        <div class="comment-header-right">
          <div class="comment-date">
            {getTimeDiff(dayjs(comment.createdDate))}
          </div>
          <div class="form-delete">
            <input
              class:active={idx === selectedIdx}
              bind:value={deletePassword}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            <div class="form-delete-buttons">
              <button
                class="form-delete-buttons-delete"
                on:click={() =>
                  idx === selectedIdx ? deleteComment(comment) : (selectedIdx = idx)}
              >
                <img src="/assets/delete.svg" alt="delete" />
              </button>
              <button
                class:btn-active={idx === selectedIdx}
                class="form-delete-buttons-close"
                on:click={() => (selectedIdx = -1)}
              />
            </div>
          </div>
          <!-- <button
              class="comment-delete"
              on:click={() => {
                selectedIdx = idx
              }}
            >
              <img src="/assets/delete.svg" alt="delete" />
            </button> -->
        </div>
      </div>

      <div class="comment-content" transition:fade>
        <!-- {#if idx === selectedIdx}
          <div class="form-delete">
            <input
              bind:value={deletePassword}
              type="password"
              placeholder="삭제 비밀번호를 입력하세요"
            />
            <div class="form-delete-buttons">
              <button on:click={() => deleteComment(comment)}>확인</button>
              <button on:click={() => (selectedIdx = -1)}>취소</button>
            </div>
          </div>
        {:else} -->
        {comment.comment}
        <!-- {/if} -->
      </div>
    </div>
  {/each}
</div>
