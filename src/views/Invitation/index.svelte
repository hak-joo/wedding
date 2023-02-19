<style lang="scss">
  $svgMask: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/44303/heart-mask-square.svg';
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

  /* your styles go here */
  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 425px;
    align-items: center;

    @include mobile {
      /*브라우저 사이즈767px이하일때*/
      width: 100vw;
    }
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
        font-size: 12px;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
        color: #441800;
      }
      &-middle {
        font-size: 48px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
      }
      &-bottom {
        font-size: 16px;
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
      padding: 20px 0;
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
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
    }
    &-location {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
      span {
        font-size: 12px;
      }
    }
    &-person {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-relation {
      font-size: 14px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #666;
      margin: 0 14px 0 5px;
    }
  }
  .ment {
    &-container {
      width: 100%;
      padding: 10px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-title {
      font-size: 24px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
      color: #657098;
    }
    &-text {
      font-size: 14px;
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
    &-thumbnail {
      &-container {
        padding: 40px 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px 14px;
      }
      &-item {
        position: relative;
        width: 72px;
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
      font-size: 24px;
      font-family: 'Nanum Myeongjo', serif;
      color: #657098;
      text-align: center;
    }
    &-container {
      padding: 20px 0;
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
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
  .map {
    &-container {
      width: 100%;
      padding: 20px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-title {
      font-size: 24px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0 10px;
      color: #657098;
    }
    &-location {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      span {
        font-size: 12px;
      }
    }
    &-address {
      font-size: 12px;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-navi {
      &-container {
        width: 70%;
        padding: 20px 0 0px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      &-title {
        font-size: 16px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
        color: #657098;
      }
      &-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        &-item {
          font-size: 12px;
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
      border-radius: 15px;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 10px 0 20px;
      color: #657098;
    }
    &-content {
      font-size: 12px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
  .footer {
    &-img {
      &-container {
        margin: 30px 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          opacity: 0.8;
        }
      }
      &-inner-text {
        position: absolute;
        color: #333;
        bottom: 80px;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
    }
    &-container {
      width: 100%;
      padding: 0px 0 20px;
    }
    &-btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      &-icon {
        width: 15px;
        aspect-ratio: 1;
      }
    }
    &-text {
      font-size: 12px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #657098;
    }
  }
  .contact-us {
    &-container {
      width: 100%;
      padding: 20px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-title {
      font-size: 24px;
      padding: 0px 0 10px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #657098;
    }
    &-sub {
      &-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      &-title {
        font-size: 16px;
        padding: 0px 0 10px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
    }
    &-row {
      &-container {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
      }
    }
    &-groom {
      &-title {
        font-size: 16px;
        padding: 0px 0 10px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
      &-sub-title {
        font-size: 12px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
    }
    &-bride {
      &-title {
        font-size: 16px;
        padding: 0px 0 10px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
      &-sub-title {
        font-size: 12px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
      }
    }
    &-btn {
      &-icon {
        width: 24px;
        cursor: pointer;
      }
      &-pay-icon {
        cursor: pointer;
        width: 56px;
      }
      &-text {
        cursor: pointer;
        background-color: #333;
        color: #fff;
        border-radius: 30px;
        font-size: 10px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 23px;
      }
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

  import Modal from '../../components/Modal.svelte'

  import HeaderImg from '/images/header.jpg'
  import FooterImg from '/images/footer.jpg'
  import PayImg from '/images/pay.png'

  let isShowOpening = true

  let galleryDatas: { path: string; thumbnail: string }[] = []

  let dday = 66

  const toggleShowOpening = () => (isShowOpening = !isShowOpening)

  let modalShow = false

  const sendKakao = () => {
    // 메시지 공유 함수
    Kakao.Link.sendScrap({
      requestUrl: 'https://wedding-invitation-prohong.vercel.app', // 페이지 url
      templateId: 90201 // 메시지템플릿 번호
    })
  }

  onMount(async () => {
    if (!Kakao.isInitialized()) {
      Kakao.init('037b39715d4b19da434d1ba24c04fbd2')
    }
    galleryDatas = [
      {
        path: '/images/gallery-01.jpg',
        thumbnail: '/images/thumbnail-01.jpg'
      },
      {
        path: '/images/gallery-02.jpg',
        thumbnail: '/images/thumbnail-02.jpg'
      },
      {
        path: '/images/gallery-03.jpg',
        thumbnail: '/images/thumbnail-03.jpg'
      },
      {
        path: '/images/gallery-04.jpg',
        thumbnail: '/images/thumbnail-04.jpg'
      },
      {
        path: '/images/gallery-05.jpg',
        thumbnail: '/images/thumbnail-05.jpg'
      },
      {
        path: '/images/gallery-06.jpg',
        thumbnail: '/images/thumbnail-06.jpg'
      },
      {
        path: '/images/gallery-07.jpg',
        thumbnail: '/images/thumbnail-07.jpg'
      },
      {
        path: '/images/gallery-08.jpg',
        thumbnail: '/images/thumbnail-08.jpg'
      },
      {
        path: '/images/gallery-09.jpg',
        thumbnail: '/images/thumbnail-09.jpg'
      },
      {
        path: '/images/gallery-10.jpg',
        thumbnail: '/images/thumbnail-10.jpg'
      },
      {
        path: '/images/gallery-11.jpg',
        thumbnail: '/images/thumbnail-11.jpg'
      },
      {
        path: '/images/gallery-12.jpg',
        thumbnail: '/images/thumbnail-12.jpg'
      },
      {
        path: '/images/gallery-13.jpg',
        thumbnail: '/images/thumbnail-13.jpg'
      },
      {
        path: '/images/gallery-14.jpg',
        thumbnail: '/images/thumbnail-14.jpg'
      },
      {
        path: '/images/gallery-15.jpg',
        thumbnail: '/images/thumbnail-15.jpg'
      },
      {
        path: '/images/gallery-16.jpg',
        thumbnail: '/images/thumbnail-16.jpg'
      },
      {
        path: '/images/gallery-17.jpg',
        thumbnail: '/images/thumbnail-17.jpg'
      },
      {
        path: '/images/gallery-18.jpg',
        thumbnail: '/images/thumbnail-18.jpg'
      },
      {
        path: '/images/gallery-19.jpg',
        thumbnail: '/images/thumbnail-19.jpg'
      },
      {
        path: '/images/gallery-20.jpg',
        thumbnail: '/images/thumbnail-20.jpg'
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
    <img class="header-img" src={HeaderImg} alt="HeaderImg" />
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
    <div class="noti-title">주차 안내</div>
    <div class="noti-content">정문(스타벅스쪽) 우측 주차장 이용</div>
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

  <div class="contact-us-container">
    <div class="contact-us-title">마음 전하실곳</div>
    <div class="contact-us-row-container">
      <div class="contact-us-sub-container">
        <div class="contact-us-sub-title">신랑에게 연락하기</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon">
            <img alt="pay" src={PayImg} />
          </div>
        </div>
      </div>
      <div class="contact-us-sub-container">
        <div class="contact-us-sub-title">신부에게 연락하기</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon"><img alt="pay" src={PayImg} /></div>
        </div>
      </div>
    </div>
    <div class="contact-us-row-container">
      <div class="contact-us-sub-container">
        <div class="contact-us-groom-title">신랑측 혼주</div>
        <div class="contact-us-groom-sub-title">아버지 홍찬표</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon"><img alt="pay" src={PayImg} /></div>
        </div>
        <div class="contact-us-groom-sub-title">어머니 박미선</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon"><img alt="pay" src={PayImg} /></div>
        </div>
      </div>
      <div class="contact-us-sub-container">
        <div class="contact-us-bride-title">신부측 혼주</div>
        <div class="contact-us-bride-sub-title">아버지 이재상</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon"><img alt="pay" src={PayImg} /></div>
        </div>
        <div class="contact-us-bride-sub-title">어머니 김선희</div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-icon">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </div>
          <div class="contact-us-btn-icon">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </div>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <div class="contact-us-btn-pay-icon"><img alt="pay" src={PayImg} /></div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-img-container">
    <img src={FooterImg} alt={FooterImg} class="footer-img" />
    <!-- <div class="footer-img-inner-text">행복하겠습니다.</div> -->
  </div>
  <div class="footer-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="footer-btn" on:click={sendKakao}>
      <div class="footer-btn-icon">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </div>
      <div class="footer-text">카카오톡으로 공유하기</div>
    </div>
  </div>
</div>
