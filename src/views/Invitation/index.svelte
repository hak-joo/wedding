<style lang="scss">
  $svgMask: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/44303/heart-mask-square.svg';
  /* your styles go here */
  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .header {
    &-container {
      width: 100%;
      padding: 20px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-text {
      &-top {
        font-size: 0.7vw;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
        color: #441800;
      }
      &-middle {
        font-size: 3vw;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
      }
      &-bottom {
        font-size: 1.2vw;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 20px 0;
      }
    }
    &-img {
      width: 100%;
    }
  }
  .info {
    &-container {
      width: 100%;
      padding: 20px 0 40px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-line {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
    }
    &-date {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
    }
    &-location {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
    }
    &-person {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-relation {
      font-size: 1vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #666;
      margin: 0 1vw 0 0.3vw;
    }
  }
  .ment {
    &-container {
      width: 100%;
      padding: 40px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-title {
      font-size: 1.6vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 40px 0;
    }
    &-text {
      font-size: 1vw;
      letter-spacing: normal;
      line-height: 3.2vh;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
    }
  }
  .divider {
    width: 3vw;
    border-top: 0.1vh solid #999;
    padding: 20px 0;
  }
  .separator {
    width: 0.2vw;
    height: 0.2vw;
    background-color: #333;
    border-radius: 100%;
    margin: 0 0.5vw;
  }
  .gallery {
    &-container {
      width: 100%;
      padding: 40px 20px;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5vw 1vw;
    }
    &-item {
      float: left;
      position: relative;
      width: 5vw;
      aspect-ratio: 1;
      overflow: hidden;
      -webkit-mask: url($svgMask);
      mask: url($svgMask);

      img {
        z-index: 100;
        width: 100%;
        aspect-ratio: 1;
      }
    }
  }
  .guest-book {
    &-title {
      padding: 20px 0;
      font-size: 1.5vw;
      font-family: 'Nanum Myeongjo', serif;
      color: #f79e9e;
      text-align: center;
    }
    &-container {
      width: 100%;
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Carousel from '../../components/Carousel.svelte'
  import PostIt from '../../components/PostIt.svelte'
  import Opening from '../../components/Opening.svelte'

  import image1 from '../../assets/images/photo.jpeg'
  import image2 from '../../assets/images/photo2.jpeg'
  import image3 from '../../assets/images/photo3.jpeg'

  const images = [image1, image2, image3]
  // import HeaderImg from '../../assets/img/연0180-1.jpg'

  let isShowOpening = true

  let galleryDatas: { path: string }[] = []

  const toggleShowOpening = () => (isShowOpening = !isShowOpening)

  onMount(async () => {
    galleryDatas = [
      // { path: '/src/assets/img/gallery/보정요청-01.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-02.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-03.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-04.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-05.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-06.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-07.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-08.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-09.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-10.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-11.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-12.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-13.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-14.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-15.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-16.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-17.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-18.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-19.jpg' },
      // { path: '/src/assets/img/gallery/보정요청-20.jpg' }
    ]
  })
</script>

<!-- markup (zero or more items) goes here -->

<!-- <Opening show={isShowOpening} toggle={toggleShowOpening} /> -->
<div class="main-wrapper" transition:fade>
  <div class="header-container">
    <div class="header-text-top">THE MARRIGE</div>
    <div class="header-text-middle">04.22</div>
    <div class="header-text-bottom">홍성현 이성연 결혼합니다.</div>
    <!-- <img class="header-img" src={HeaderImg} alt="HeaderImg" /> -->
  </div>
  <div class="info-container">
    <div class="info-date">2023.04.22. 토요일 4:00 PM</div>
    <div class="info-location">케이터틀 2층, 컨벤션홀</div>
  </div>
  <div class="ment-container">
    <div class="ment-title">초대합니다.</div>
    <div class="ment-text">
      저희 두 사람의 작은 만남이
      <br />
      사랑의 결실을 이루어
      <br />
      <span style="background-color:#f79e9e;color:#ffffff;"
        ><strong>소중한 결혼식</strong></span
      >
      을 올리게 되었습니다.
      <br />
      <br />
      <br />
      첫 마음 그대로 존중하고 배려하며 살겠습니다.
      <br />
      <br />
      오로지 믿음과 사랑을 약속하는 날
      <br />
      오셔서 축복해 주시면 더없는 기쁨으로
      <br />
      간직하겠습니다.
    </div>
  </div>
  <div class="divider" />
  <div class="info-container">
    <div class="info-line">
      <div class="info-person">홍찬표</div>
      <div class="separator" />
      <div class="info-person">박미선</div>
      <div class="info-relation">의 장남</div>
      <div class="info-person">홍성현</div>
    </div>
    <div class="info-line">
      <div class="info-person">이재상</div>
      <div class="separator" />
      <div class="info-person">김선희</div>
      <div class="info-relation">의 장녀</div>
      <div class="info-person">이성연</div>
    </div>
  </div>
  <div class="gallery-container">
    {#each galleryDatas as item}
      <div class="gallery-item">
        <img src={item.path} alt={item.path} />
      </div>
    {/each}
    <!-- <Carousel>
      {#each galleryDatas as item}
        <div>
          <img src={item.path} alt={item.path} sizes="10" />
        </div>
      {/each}
    </Carousel> -->
  </div>

  <div class="calender-container" />
  <div class="map-container" />
  <div class="noti-container" />
  <div class="guest-book-container">
    <div class="guest-book-title">축하 글을 남겨주세요!</div>
    <Carousel interval={300} length={5}>
      <PostIt />
    </Carousel>
  </div>

  <div class="contant-us-container" />
  <div class="footer-img-container" />
  <div class="footer-container" />
</div>
