<style lang="scss">
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
</style>

<script lang="ts">
  import { guestBooks } from './guestBookDatas'
  import dayjs from 'dayjs'
</script>

<div class="comment-container">
  {#each guestBooks as comment}
    <div class="comment">
      <div class="comment-header">
        <div>
          <span class="comment-from">FROM </span>
          {comment.sender}
        </div>
        <div class="comment-created">
          {dayjs(comment.createdDate).format('YYYY-MM-DD hh-mm')}
        </div>
      </div>
      <div class="comment-content">
        {comment.comment}
      </div>
    </div>
  {/each}
</div>
