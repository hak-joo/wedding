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
        align-items: flex-end;
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
    }
    &-date {
      color: #999;
      font-size: 12px;
      line-height: 24px;
    }
    &-delete {
      width: 22px;
    }
  }
</style>

<script lang="ts">
  import { Comment } from '../views/Invitation/type'
  import dayjs from 'dayjs'
  import AOS from 'aos'
  import 'aos/dist/aos.css' // You can also use <link> for styles
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
  import { getTimeDiff } from '../lib/timeDiff'
  import { removeComment } from '../api'
  export let comments: Comment[] = []
  AOS.init()

  const deleteComment = async (comment: Comment) => {
    if (comment.key) {
      const result = await removeComment(comment.key)

      if (result) {
        toast.push('삭제되었습니다.', {
          theme: {
            '--toastBackground': '#32AA62',
            '--toastColor': '#fff'
          }
        })
      } else {
        toast.push('실패하였습니다.', {
          theme: {
            '--toastBackground': '#AA3232',
            '--toastColor': '#fff'
          }
        })
      }
    } else {
      toast.push('실패하였습니다.', {
        theme: {
          '--toastBackground': '#AA3232',
          '--toastColor': '#fff'
        }
      })
    }
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
    >
      <div class="comment-header">
        <div>
          <span class="comment-sender">{comment.sender}</span>
        </div>
        <div class="comment-header-right">
          <div class="comment-date">
            {getTimeDiff(dayjs(comment.createdDate))}
          </div>
          <button class="comment-delete" on:click={() => deleteComment(comment)}>
            <img src="delete.svg" alt="delete" />
          </button>
        </div>
      </div>
      <div class="comment-content">
        {comment.comment}
      </div>
    </div>
  {/each}
</div>
