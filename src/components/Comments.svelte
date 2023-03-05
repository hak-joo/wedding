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
  .comment {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 30px 10px;

    background-color: white;

    border-radius: 5px;

    line-height: 15px;

    &-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      height: 40px;
      border-bottom: 1px solid #a3acce;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    &-from {
      margin-right: 5px;
      font-size: 18px;
      font-family: 'Nanum Myeongjo', serif;
      color: #7667ae;
    }
    &-list {
      width: 100%;
    }
    &-content {
      line-height: 20px;
    }
    &-date {
      color: #999;
      font-size: 13px;
    }
  }
</style>

<script lang="ts">
  import { Comment } from '../views/Invitation/type'
  import dayjs from 'dayjs'
  import AOS from 'aos'
  import 'aos/dist/aos.css' // You can also use <link> for styles
  import { getTimeDiff } from '../lib/timeDiff'
  export let comments: Comment[] = []
  AOS.init()
</script>

<div class="comment-list">
  {#each comments.reverse() as comment, idx}
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
          <span class="comment-from">FROM </span>
          {comment.sender}
        </div>
        <div class="comment-date">
          {getTimeDiff(dayjs(comment.createdDate))}
        </div>
      </div>
      <div class="comment-content">
        {comment.comment}
      </div>
    </div>
  {/each}
</div>
