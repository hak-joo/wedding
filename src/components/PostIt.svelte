<style lang="scss">
  .postit {
    &-wrapper {
      width: 165px;
      height: 240px;
      padding: 10px 8px;
      margin: 10px 10px;
      box-shadow: 1px 2px 3px 0 #ccc;
      border-radius: 5px;
      background-color: #fef6f5;
    }
    &-container {
      display: flex;
      height: 100%;
      flex-direction: column;
    }
    &-header {
      height: 30px;
    }
    &-content {
      flex: 1;
      overflow: hidden;

      font-size: 16px;
      text-align: center;
    }
    &-footer {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 50px;
      text-align: center;
    }
  }
</style>

<script lang="ts">
  import { guestBooks } from './guestBookDatas'
</script>

{#each guestBooks as guest, idx}
  <div class="carousel-content">
    <div class="postit-wrapper">
      <div class="postit-container">
        <div class="postit-header" />
        <div class="postit-content">
          {guest.comment}
        </div>
        <div class="postit-footer">
          <p>- {guest.sender} -</p>
          <p>{guest.createdDate}</p>
        </div>
      </div>
    </div>
  </div>
{/each}
