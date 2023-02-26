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

  .heart {
    &-container {
      width: 100%;

      padding: 0px 10px;
      &:nth-of-type(2n) {
        .heart-thumbnail-container {
          justify-content: left;
        }
      }
      &:nth-of-type(2n + 1) {
        .heart-thumbnail-container {
          justify-content: right;
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
        margin-top: -25px;
        margin-bottom: -25px;
        width: 270px;
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
    width: 200px;
    height: 100px;
    left: 12.5%;
    top: 25%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    position: absolute;
    font-family: 'Nanum Myeongjo', serif;
  }
  .sender {
    width: 150px;
    height: 30px;

    position: absolute;
    left: 22.5%;
    bottom: 25%;
    display: flex;
    justify-content: center;
  }
</style>

<script lang="ts">
  import { fly } from 'svelte/transition'
  import { guestBooks } from './guestBookDatas'
  import { inview } from 'svelte-inview'
  import dayjs from 'dayjs'
  import { randomInt } from 'crypto'

  let viewIndex = -1
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

{#each guestBooks as comment, idx}
  <div
    use:inview={{ unobserveOnEnter: true }}
    on:change={({ detail }) => {
      if (detail.inView && viewIndex <= idx) {
        viewIndex = idx
      }
      console.log(viewIndex)
    }}
    class="heart-container"
  >
    {#if viewIndex >= idx}
      <div
        class="heart-thumbnail-container"
        transition:fly={{ y: 100 * idx, duration: 500, delay: 100 }}
      >
        <div class="heart-thumbnail-item">
          <div class="item">
            <div class="content">{comment.comment}</div>
            <div class="sender">- {comment.sender} -</div>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/each}
