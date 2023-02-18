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
  const dateFormat = (date: any) => {
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    month = month >= 10 ? month : '0' + month
    day = day >= 10 ? day : '0' + day
    hour = hour >= 10 ? hour : '0' + hour
    minute = minute >= 10 ? minute : '0' + minute
    second = second >= 10 ? second : '0' + second

    return month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  }
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
          <p>{dateFormat(guest.createdDate)}</p>
        </div>
      </div>
    </div>
  </div>
{/each}
