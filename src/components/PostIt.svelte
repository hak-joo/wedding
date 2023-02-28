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

  .postit {
    &-wrapper {
      width: 165px;
      aspect-ratio: 1 / 1.5;
      padding: 10px 8px;
      margin: 10px 10px;
      box-shadow: 3px 1px 7px 0px rgba(183, 183, 183, 0.87);
      border-radius: 7px;
      background-color: #fef6f5;
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        width: 30vw;
      }
    }
    &-container {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
    &-header {
      display: flex;
      width: 30px;
      justify-content: center;
      flex: 0.7;
      img {
        width: 30px;
        height: 30px;
        aspect-ratio: 1;
      }
    }
    &-content {
      flex: 1;
      overflow: hidden;

      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      font-size: 16px;
      text-align: center;
      @include mobile {
        /*브라우저 사이즈767px이하일때*/
        font-size: 12px;
      }
    }
    &-footer {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 50px;
      text-align: center;
      p {
        font-size: 12px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        @include mobile {
          /*브라우저 사이즈767px이하일때*/
          font-size: 10px;
        }
      }
    }
  }
</style>

<script lang="ts">
  import { Comment } from './../views/Invitation/type'

  import { guestBooks } from './guestBookDatas'
  import PinIcon from '../assets/styles/ic-pin.png'
  import dayjs from 'dayjs'

  export let comments: Comment[] = []

  const dateFormat = (date: any) => {
    const ddate = new Date(date)
    let month = ddate.getMonth() + 1
    let day = ddate.getDate()
    let hour = ddate.getHours()
    let minute = ddate.getMinutes()
    let second = ddate.getSeconds()

    month = month >= 10 ? month : '0' + month
    day = day >= 10 ? day : '0' + day
    hour = hour >= 10 ? hour : '0' + hour
    minute = minute >= 10 ? minute : '0' + minute
    second = second >= 10 ? second : '0' + second

    return month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  }
</script>

{#each comments as guest, idx}
  <div class="carousel-content">
    <div class="postit-wrapper">
      <div class="postit-container">
        <div class="postit-header">
          <img src={PinIcon} alt="pin" />
        </div>

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
