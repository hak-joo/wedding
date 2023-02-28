<style lang="scss">
  $svgMask: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/44303/heart-mask-square.svg';
  .comment {
    display: flex;
    flex-direction: column;

    padding: 15px;
    margin: 20px 0;

    background-color: white;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 0 #999;
    line-height: 15px;

    &-container {
      width: 100%;
      padding: 10px 10px;
      margin-bottom: 50px;
    }

    &-header {
      display: flex;

      align-items: flex-end;
      justify-content: space-between;

      height: 30px;
      border-bottom: 1px solid #a3acce;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    &-from {
      font-size: 1.3vw;
      font-family: 'Nanum Myeongjo', serif;
      color: #7667ae;
    }
    &-created {
      font-size: 1vw;
      color: #999;
    }
    &-content {
      color: #666;
      line-height: 20px;
    }
  }

  /* .heart {
    &-container {
      width: 100%;

      padding: 0px 10px;
      &:nth-of-type(3n) {
        .heart-thumbnail-container {
          justify-content: left;
        }
      }
      &:nth-of-type(3n + 1) {
        .heart-thumbnail-container {
          justify-content: right;
        }
      }
      &:nth-of-type(3n + 2) {
        .heart-thumbnail-container {
          justify-content: center;
        }
      }
    }
    &-thumbnail {
      &-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
      }
      &-item {
        position: relative;
        width: 170px;
        aspect-ratio: 1;
        overflow: hidden;
        -webkit-mask: url($svgMask);
        mask: url($svgMask);

        .item {
          z-index: 100;
          width: 100%;
          aspect-ratio: 1;
          pointer-events: none;
          background-color: #fccac3;
          height: 100%;
          box-shadow: 1px 2px 3px 0 #ccc;
        }
      }
    }
  }
  .content {
    display: flex;
    border: 1px solid red;
    width: 120px;
    height: 60px;
    left: 14%;
    top: 20%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    position: absolute;
    font-size: 10px;
    font-family: 'Nanum Myeongjo', serif;
  }
  .sender {
    width: 70px;
    height: 30px;

    position: absolute;
    left: 28%;
    bottom: 25%;
    display: flex;
    justify-content: center;
    font-size: 12px;
  } */

  .comment-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .heart {
    &-container {
      display: flex;
      height: 220px;
      flex-direction: row;
      justify-content: left;
      &:nth-of-type(2n) {
        margin-bottom: -25px;
      }
      &:nth-of-type(2n + 1) {
        margin-top: -50px;
      }
      &:nth-of-type(3n) {
        width: 100%;
        justify-content: center;
      }
    }
    &-thumbnail {
      &-container {
        display: flex;
        align-items: center;
      }
      &-item {
        position: relative;
        width: 170px;
        aspect-ratio: 1;
        overflow: hidden;
        -webkit-mask: url($svgMask);
        mask: url($svgMask);

        .item {
          z-index: 100;
          width: 100%;
          aspect-ratio: 1;
          pointer-events: none;
          background-color: #fccac3;
          height: 100%;
          box-shadow: 1px 2px 3px 0 #ccc;
        }
      }
    }
  }
  .content {
    display: flex;

    width: 120px;
    height: 60px;
    left: 14%;
    top: 20%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    position: absolute;
    font-size: 14px;
    font-family: 'Nanum Myeongjo', serif;
  }
  .sender {
    width: 70px;
    height: 30px;

    position: absolute;
    left: 30%;
    bottom: 15%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: 'Nanum Myeongjo', serif;
  }
</style>

<script lang="ts">
  import { guestBooks } from './guestBookDatas'
  import dayjs from 'dayjs'
  import { randomInt } from 'crypto'
</script>

<div class="comment-container" />
<!-- {#each guestBooks as comment, idx}
    <div
      use:inview={{ unobserveOnEnter: true }}
      on:change={({ detail }) => {
        console.log(detail.inView)
        if (detail.inView && viewIndex <= idx) {
          viewIndex = idx
        }
      }}
    >
      <div class="comment" transition:fly={{ y: 100 * idx, duration: 500, delay: 300 }}>
        {#if viewIndex >= idx}
          <div class="comment-header">
            <div>
              <span class="comment-from">FROM</span>
              {comment.sender}
            </div>
            <div class="comment-created">
              {dayjs(comment.createdDate).format('YYYY-MM-DD hh-mm')}
            </div>
          </div>
          <div class="comment-content">
            {comment.comment}
          </div>
        {/if}
      </div>
    </div>
  {/each} -->

<div class="comment-list">
  {#each guestBooks as comment, idx}
    <div class="heart-container">
      <div class="heart-thumbnail-container">
        <div class="heart-thumbnail-item">
          <div class="item">
            <div class="content">{comment.comment}</div>
            <div class="sender">- {comment.sender} -</div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
