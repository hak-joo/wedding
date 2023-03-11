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
      min-height: 100vh;
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
      line-height: 32px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
    }
  }
  .divider {
    width: 12px;
    border-top: 2px solid #999;
    padding: 20px 0;
  }
  .separator {
    width: 2px;
    height: 2px;
    background-color: #333;
    border-radius: 100%;
    margin: 0 4px;
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
      font-size: 24px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 20px 0;
      color: #657098;
    }
    &-container {
      width: 100%;
      padding: 10px 0;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-btn {
      font-size: 12px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      border-radius: 15px;
      background-color: #657098;
      color: #fff;
      padding: 5px 15px;

      &-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 15px;
      }
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
  // 구버전
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

  //수정 적용
  .contacting {
    &-title {
      font-size: 24px;
      padding: 0px 10px;
      padding-top: 30px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #657098;
    }

    &-container {
      width: 45%;
      border: 1px solid #657098;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-main {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin: 30px 0;
      }
    }
    &-sub-container {
      width: 100%;
      padding: 0px 30px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border-bottom: 1px solid #657098;
      &:nth-last-child(1) {
        border-bottom: none;
      }
    }
    &-to {
      padding: 10px 0;
      color: #657098;
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;

      span {
        color: #999;
        font-size: 12px;
      }
    }
    &-icons {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &-btn {
      &-icon {
        width: 20px;
        cursor: pointer;
      }
      &-pay-icon {
        width: 20px;
        font-size: 12px;
        white-space: nowrap;
      }
    }
  }
  .navigation {
    &-container {
      position: fixed;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      left: 15px;
      bottom: 20px;
      z-index: 100;
      background-color: #edededdd;
      border-radius: 15px;

      gap: 5px;
    }
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 30px;
      border: 1px solid #999;
      border-radius: 30px;
      font-size: 0.5px;
      padding: 0px 10px;
      cursor: pointer;
    }
  }
</style>

<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import Carousel from '../../components/Carousel.svelte'
  import Gallery from '../../components/Gallery.svelte'
  import PostIt from '../../components/PostIt.svelte'
  import Comments from '../../components/Comments.svelte'
  import Map from '../../components/Map.svelte'

  import Opening from '../../components/Opening.svelte'

  import '../../assets/styles/wave.scss'

  import Modal from '../../components/Modal.svelte'
  import ImageModal from '../../components/ImageModal.svelte'

  import type { Comment, GalleryItem, Info, PersonInfo } from './type'

  import WriteModal from '../../components/WriteModal.svelte'
  import AccountModal from '../../components/AccountModal.svelte'
  import dayjs from 'dayjs'
  import 'dayjs/locale/ko'
  dayjs.locale('ko')

  import AOS from 'aos'
  import 'aos/dist/aos.css' // You can also use <link> for styles
  import {
    getDatabase,
    onValue,
    orderByChild,
    query,
    ref as databaseRef
  } from 'firebase/database'
  import {
    getStorage,
    listAll,
    getDownloadURL,
    ref as storageRef
  } from 'firebase/storage'

  import { ActivateSnow } from './../../lib/snow'
  import { firebaseApp } from '../../lib/firebase'

  AOS.init()
  let isShowOpening = true

  let galleryDatas: GalleryItem[] = []
  let currentIdx = 0

  let assets: any = {}
  let info: Info = {
    header: {
      img: '',
      imgPath: ''
    },

    footer: {
      img: '',
      imgPath: '',
      text: ''
    },
    openingMsg: '',
    weddingDay: '',
    weddingTime: '',
    weddingHole: {
      name: '',
      address: '',
      subway: [],
      bus: [],
      car: []
    },
    inviteMent: '',
    noti: {
      title: '',
      contents: []
    },
    groom: {
      name: '',
      relation: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    },
    groomFather: {
      name: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    },
    groomMother: {
      name: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    },
    bride: {
      name: '',
      relation: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    },
    brideFather: {
      name: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    },
    brideMother: {
      name: '',
      phone: '',
      account: {
        bank: '',
        number: ''
      },
      pay: ''
    }
  }

  let weddingDay = dayjs()
  let dday = 0

  let modalShow = false
  let isOpenImageModal = false
  let writeModalShow = false
  let writeModalStartY = 0

  let isAccountModalShow = false
  let accountInfo: PersonInfo
  const toggleAccountModal = (info: PersonInfo) => {
    accountInfo = info
    isAccountModalShow = true
  }

  let listComment: Comment[] = []

  const sendKakao = () => {
    // 메시지 공유 함수
    Kakao.Link.sendScrap({
      requestUrl: 'https://transcendent-clafoutis-f42ed4.netlify.app', // 페이지 url
      templateId: 90201 // 메시지템플릿 번호
    })
  }

  const scrollToElement = (menu: string, behavior?: ScrollBehavior) => {
    const el = document.getElementsByClassName(`${menu}-container`)
    if (!el) return
    if (!el[0]) return
    el[0].scrollIntoView({
      behavior,
      inline: 'nearest'
    })
  }
  $: modalShow, writeModalShow, scrollController()
  const scrollController = () => {
    if (!modalShow && !writeModalShow) {
      scrollToElement('guest-book')
    }
  }
  onMount(async () => {
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init('037b39715d4b19da434d1ba24c04fbd2')
    }
    const database = getDatabase(firebaseApp, import.meta.env.VITE_FIREBASE_RDB_URL)
    const infoRef = databaseRef(database, '/info')
    onValue(infoRef, snapshot => {
      info = snapshot.val()
      weddingDay = dayjs(info.weddingDay)
      dday = weddingDay.diff(dayjs(), 'day')
    })
    const commentRef = query(
      databaseRef(database, '/comments'),
      orderByChild('createdDate')
    )
    onValue(commentRef, snapshot => {
      let data: Comment[] = []
      Object.keys(snapshot.val()).forEach(key => {
        data.push(snapshot.val()[key])
      })
      listComment = data
    })

    const storage = await getStorage(
      firebaseApp,
      import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
    )
    const galleryList = await listAll(storageRef(storage, '/gallery'))
    galleryDatas = await Promise.all(
      galleryList.items.map(async item => {
        const { name, fullPath } = item
        const path = await getDownloadURL(storageRef(storage, fullPath))
        const itemIdx = name.split('-')[1].split('.')[0]
        const thumbnailPath = `thumbnail/thumbnail-${itemIdx}.jpg`
        const thumbnail = await getDownloadURL(storageRef(storage, thumbnailPath))
        if (info.header.img === name) {
          info.header.imgPath = path
        }
        if (info.footer.img === name) {
          info.footer.imgPath = path
        }
        return {
          name,
          path,
          fullPath,
          thumbnail,
          thumbnailPath
        }
      })
    )
    const assetList = await listAll(storageRef(storage, '/assets'))
    for (let asset of assetList.items) {
      const { name, fullPath } = asset
      const path = await getDownloadURL(storageRef(storage, fullPath))
      assets[name.split('.')[0].split('_')[0]] = path
    }
    console.log(assets)
    ActivateSnow()
  })
</script>

<!-- markup (zero or more items) goes here -->

<Opening
  show={isShowOpening}
  close={() => (isShowOpening = false)}
  text={info.openingMsg}
/>
<div class="navigation-container">
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('gallery', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    G
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('map', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    M
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('contact-us', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    C
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('guest-book', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    B
  </button>
</div>

<div class="main-wrapper" transition:fade>
  <div class="header-container">
    <div class="header-text-top">THE MARRIAGE</div>
    <div class="header-text-middle">{weddingDay.format('MM.DD')}</div>
    <div class="header-text-bottom">{info.groom.name} {info.bride.name} 결혼합니다.</div>
    <div class="wave-top">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs
          ><path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          /></defs
        >
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250, 250, 250,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250, 250, 250,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(250, 250, 250,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(250, 250, 250,0.2)" />
        </g>
      </svg>
    </div>
    <img class="header-img" src={info.header.imgPath} alt="HeaderImg" />
    <div class="wave-bottom">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs
          ><path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          /></defs
        >
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250, 250, 250,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250, 250, 250,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(250, 250, 250,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(250, 250, 250,0.2)" />
        </g>
      </svg>
    </div>
  </div>
  <div
    class="info-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="info-date">
      {weddingDay.format('YYYY.MM.DD. ddd')}요일 {info.weddingTime}
    </div>
    <div class="info-location">
      {@html info.weddingHole.name}
    </div>
  </div>
  <div
    class="ment-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="ment-title">초대합니다.</div>
    <div class="ment-text">
      {@html info.inviteMent}
    </div>
  </div>
  <div class="divider" />
  <div
    class="info-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="info-line">
      <div class="info-person">{info.groomFather.name}</div>
      <div class="separator" />
      <div class="info-person">{info.groomMother.name}</div>
      <div class="info-relation">의 {info.groom.relation}</div>
      <div class="info-person">{info.groom.name}</div>
    </div>
    <div class="info-line">
      <div class="info-person">{info.brideFather.name}</div>
      <div class="separator" />
      <div class="info-person">{info.brideMother.name}</div>
      <div class="info-relation">의 {info.bride.relation}</div>
      <div class="info-person">{info.bride.name}</div>
    </div>
  </div>

  <ImageModal
    isShow={isOpenImageModal}
    title=""
    toggoleModal={() => {
      isOpenImageModal = !isOpenImageModal
    }}
  >
    {#if galleryDatas.length > 0}
      <Gallery
        itemList={galleryDatas}
        {currentIdx}
        setCurrentIdx={idx => {
          currentIdx = idx
        }}
      />
    {/if}
  </ImageModal>
  <div
    class="gallery-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    {#if galleryDatas.length > 0}
      <Gallery
        itemList={galleryDatas}
        {currentIdx}
        setCurrentIdx={idx => {
          currentIdx = idx
        }}
        toggoleModal={() => {
          isOpenImageModal = !isOpenImageModal
        }}
      />
    {/if}
    <div class="gallery-thumbnail-container">
      {#each galleryDatas as item, idx}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="gallery-thumbnail-item"
          on:click={() => {
            currentIdx = idx
          }}
        >
          <img src={item.thumbnail} alt={item.thumbnail} />
        </div>
      {/each}
    </div>
  </div>

  <div
    class="d-day-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="d-day-text">
      {info.groom.name.slice(1)} ♥ {info.bride.name.slice(1)} 결혼식이 {dday}일 {dday > 0
        ? '남았습니다.'
        : dday === 0
        ? '날입니다.'
        : '지났습니다.'}
    </div>
  </div>
  <div
    class="map-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="map-title">오시는 길</div>
    <div class="map-location">
      {@html info.weddingHole.name}
    </div>
    <div class="map-address">{@html info.weddingHole.address}</div>
    <Map />
    <div class="map-navi-container">
      <div class="map-navi-title">지하철</div>
      <div class="map-navi-content">
        {#each info.weddingHole.subway as subway}
          <div class="map-navi-content-item">{@html subway}</div>
        {/each}
      </div>
    </div>
    <div class="map-navi-container">
      <div class="map-navi-title">버스</div>
      <div class="map-navi-content">
        {#each info.weddingHole.bus as bus}
          <div class="map-navi-content-item">{@html bus}</div>
        {/each}
      </div>
    </div>
    <div class="map-navi-container">
      <div class="map-navi-title">자가용</div>
      {#each info.weddingHole.car as car}
        <div class="map-navi-content-item">{@html car}</div>
      {/each}
    </div>
  </div>
  <div
    class="noti-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="noti-title">{@html info.noti.title}</div>
    {#each info.noti.contents as content}
      <div class="noti-content">{@html content}</div>
    {/each}
  </div>
  <div
    class="contact-us-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="contacting-title">축하 연락처</div>
    <div class="contacting-container-main">
      <div class="contacting-container">
        <div class="contacting-to"><span>신랑</span> {info.groom.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.groom.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groom.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groom)}
            >
              계좌
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>아버님</span> {info.groomFather.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.groomFather.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groomFather.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groomFather)}
            >
              계좌
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>어머님</span> {info.groomMother.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.groomMother.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groomMother.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groomMother)}
            >
              계좌
            </button>
          </div>
        </div>
      </div>

      <div class="contacting-container">
        <div class="contacting-to"><span>신부</span> {info.bride.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.bride.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.bride.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.bride)}
            >
              계좌
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>아버님</span> {info.brideFather.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.brideFather.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.brideFather.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.brideFather)}
            >
              계좌
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>어머님</span> {info.brideMother.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.brideMother.phone}">
              <img
                alt="phone"
                src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
              />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.brideMother.phone}">
              <img
                alt="message"
                src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
              />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.brideMother)}
            >
              계좌
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="contact-us-title">마음 전하실곳</div> -->
    <!-- <div class="contact-us-row-container">
      <div class="contact-us-sub-container">
        <div class="contact-us-sub-title">신랑에게 연락하기</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.groom.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groom.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.groom.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
      </div>
      <div class="contact-us-sub-container">
        <div class="contact-us-sub-title">신부에게 연락하기</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.bride.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.bride.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.bride.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
      </div>
    </div>
    <div class="contact-us-row-container">
      <div class="contact-us-sub-container">
        <div class="contact-us-groom-title">신랑측 혼주</div>
        <div class="contact-us-groom-sub-title">아버지 {info.groomFather.name}</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.groomFather.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groomFather.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.groomFather.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
        <div class="contact-us-groom-sub-title">어머니 {info.groomMother.name}</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.groomMother.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groomMother.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.groomMother.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
      </div>
      <div class="contact-us-sub-container">
        <div class="contact-us-bride-title">신부측 혼주</div>
        <div class="contact-us-bride-sub-title">아버지 {info.brideFather.name}</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.brideFather.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.brideFather.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.brideFather.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
        <div class="contact-us-bride-sub-title">어머니 {info.brideMother.name}</div>
        <div class="contact-us-row-container">
          <a class="contact-us-btn-icon" href="tel:{info.brideMother.phone}">
            <img
              alt="phone"
              src="https://img.icons8.com/material-rounded/96/null/ringer-volume.png"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.brideMother.phone}">
            <img
              alt="message"
              src="https://img.icons8.com/material-rounded/96/null/edit-message.png"
            />
          </a>
        </div>
        <div class="contact-us-row-container">
          <div class="contact-us-btn-text">계좌번호</div>
          <a class="contact-us-btn-pay-icon" href={info.brideMother.pay}>
            <img alt="pay" src={assets.pay} />
          </a>
        </div>
      </div> 
    </div>-->
  </div>
  <div
    class="guest-book-container"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="true"
  >
    <div class="guest-book-title">축하 글을 남겨주세요!</div>
    <Carousel interval={185} length={listComment.length}>
      <PostIt comments={listComment} />
    </Carousel>
    <div class="guest-book-btn-container">
      <button
        class="guest-book-btn"
        on:click={() => {
          modalShow = true
        }}>전체 보기</button
      >
      <button
        class="guest-book-btn"
        on:click={e => {
          writeModalStartY = e.clientY
          writeModalShow = true
        }}>작성 하기</button
      >
    </div>
  </div>
  <Modal bind:isShow={modalShow} title="방명록">
    <Comments comments={listComment} />
  </Modal>

  <WriteModal bind:isShow={writeModalShow} startY={writeModalStartY} title="방명록" />
  <AccountModal
    bind:isShow={isAccountModalShow}
    bind:accountInfo
    startY={writeModalStartY}
    payIcon={assets.pay}
  />

  <div class="footer-img-container">
    <div class="wave-top">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs
          ><path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          /></defs
        >
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250, 250, 250,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250, 250, 250,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(250, 250, 250,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(250, 250, 250,0.2)" />
        </g>
      </svg>
    </div>
    <img src={info.footer.imgPath} alt={'FooterImg'} class="footer-img" />
    <div class="wave-bottom">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs
          ><path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          /></defs
        >
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(250, 250, 250,0.7)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(250, 250, 250,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(250, 250, 250,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(250, 250, 250,0.2)" />
        </g>
      </svg>
    </div>
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
      <div class="footer-text">카카오톡으로 초대장 전달하기</div>
    </div>
  </div>
</div>
