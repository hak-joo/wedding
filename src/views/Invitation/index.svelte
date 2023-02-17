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
      span {
        font-size: 0.8vw;
      }
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
      color: #657098;
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
      background-color: #fff;
      padding: 20px 10px;
    }
    &-item {
      pointer-events: none;
      border-radius: 30px;
      width: 405px;
      height: 100%;
    }
    &-thumbnail {
      &-container {
        padding: 40px 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5vw 1vw;
      }
      &-item {
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
          pointer-events: none;
        }
        &:nth-of-type(2n) {
          margin-top: 3vh;
        }
        &:nth-of-type(2n + 1) {
          margin-bottom: 3vh;
        }
      }
    }
  }
  .guest-book {
    &-title {
      padding: 20px 0;
      font-size: 1.5vw;
      font-family: 'Nanum Myeongjo', serif;
      color: #657098;
      text-align: center;
    }
    &-container {
      width: 100%;
    }
  }
  .d-day {
    &-container {
      width: 100%;
      padding: 20px 0;
      background-color: #fff;
      color: #999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-text {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
  .map {
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
      font-size: 1.4vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0 10px;
      color: #657098;
    }
    &-location {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      span {
        font-size: 0.8vw;
      }
    }
    &-address {
      font-size: 0.8vw;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-navi {
      &-container {
        width: 100%;
        padding: 40px 0 20px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &-title {
        font-size: 1.2vw;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
        color: #657098;
      }
      &-content {
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        &-item {
          font-size: 0.8vw;
          font-family: 'Nanum Myeongjo', serif;
        }
      }
    }
  }
  .noti {
    &-container {
      width: 80%;
      padding: 10px 20px 20px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      border: 1px double #657098;
    }
    &-title {
      font-size: 1.2vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 10px 0 20px;
      color: #657098;
    }
    &-content {
      font-size: 0.8vw;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
</style>

<script lang="ts">
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Carousel from '../../components/Carousel.svelte'
  import Gallery from '../../components/Gallery.svelte'
  import PostIt from '../../components/PostIt.svelte'
  import Comments from '../../components/Comments.svelte'
  import Map from '../../components/Map.svelte'
  import Opening from '../../components/Opening.svelte'

  import image1 from '../../assets/images/photo.jpeg'
  import image2 from '../../assets/images/photo2.jpeg'
  import image3 from '../../assets/images/photo3.jpeg'
  import Modal from '../../components/Modal.svelte'

  const images = [image1, image2, image3]
  // import HeaderImg from '../../assets/img/연0180-1.jpg'

  let isShowOpening = true

  let galleryDatas: { path: string; thumbnail: string }[] = []

  let dday = 66

  const toggleShowOpening = () => (isShowOpening = !isShowOpening)

  let modalShow = false

  onMount(async () => {
    galleryDatas = [
      {
        path: '/src/assets/img/gallery/보정요청-01.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-01.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-02.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-02.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-03.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-03.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-04.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-04.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-05.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-05.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-06.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-06.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-07.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-07.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-08.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-08.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-09.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-09.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-10.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-10.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-11.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-11.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-12.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-12.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-13.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-13.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-14.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-14.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-15.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-15.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-16.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-16.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-17.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-17.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-18.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-18.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-19.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-19.jpg'
      },
      {
        path: '/src/assets/img/gallery/보정요청-20.jpg',
        thumbnail: '/src/assets/img/thumbnail/보정요청-20.jpg'
      }
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
    <div class="info-location">케이터틀<span>(구. 거구장)</span> , 2층 컨벤션홀</div>
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
    <Gallery itemList={galleryDatas} />
    <div class="gallery-thumbnail-container">
      {#each galleryDatas as item}
        <div class="gallery-thumbnail-item">
          <img src={item.thumbnail} alt={item.thumbnail} />
        </div>
      {/each}
    </div>
  </div>

  <div class="d-day-container">
    <div class="d-day-text">
      성현 ♥ 성연 결혼식이 {dday}일 {dday > 0
        ? '남았습니다.'
        : dday === 0
        ? '날입니다.'
        : '지났습니다.'}
    </div>
  </div>
  <div class="map-container">
    <div class="map-title">오시는 길</div>
    <div class="map-location">신촌 케이터틀 <span>(구. 거구장)</span>,2층 컨벤션홀</div>
    <div class="map-address">서울특별시 마포구 백범로 23(신수동 63-14)</div>
    <!-- <Map /> -->
    <div class="map-navi-container">
      <div class="map-navi-title">지하철</div>
      <div class="map-navi-content">
        <div class="map-navi-content-item">[2호선 신촌역] 6번 출구 - 서강대방면 150m</div>
        <div class="map-navi-content-item">[6호선 대흥역] 1번 출구 - 서강대방면 600m</div>
        <div class="map-navi-content-item">
          [경의중앙선 서강대역] 1번 출구 - 서강대방면 200m
        </div>
      </div>
    </div>
    <div class="map-navi-container">
      <div class="map-navi-title">버스</div>
      <div class="map-navi-content">
        <div class="map-navi-content-item">
          [마을버스] 마포 07, 마포 10, 마포 11, 마포 12
        </div>
        <div class="map-navi-content-item">[좌석버스] 921</div>
        <div class="map-navi-content-item">[직행버스] G6000</div>
        <div class="map-navi-content-item">
          [지선] 5713, 5714, 6712, 6713, 6716, 7016, 7613
        </div>
        <div class="map-navi-content-item">
          [간선] 110A고려대, 110B국민대, 163, 604, 740, 753
        </div>
      </div>
    </div>
    <div class="map-navi-container">
      <div class="map-navi-title">자가용</div>
      <div class="map-navi-content-item">서울시 마포구 백범로 23 케이터틀 컨벤션홀</div>
    </div>
  </div>
  <div class="noti-container">
    <div class="noti-title">주차 안내드립니다.</div>
    <div class="noti-content">* 정문(스타벅스쪽) 우측 주차장 이용</div>
    <div class="noti-content">* 무료주차 1시간 40분(10분 추가 500원)</div>
    <div class="noti-content">
      * 주차권을 반드시 챙겨주시고 연회장 입구에서 주차도장을 받아주시기 바랍니다.
    </div>
  </div>
  <div class="guest-book-container">
    <div class="guest-book-title">축하 글을 남겨주세요!</div>
    <Carousel interval={300} length={5}>
      <PostIt />
    </Carousel>
  </div>
  <Modal bind:isShow={modalShow} title="방명록">
    <Comments />
  </Modal>

  <button
    on:click={() => {
      modalShow = true
    }}>전체 보기</button
  >

  <div class="contant-us-container" />
  <div class="footer-img-container" />
  <div class="footer-container" />
</div>
