<style lang="scss">
  $svgMask: '/assets/heart.svg';
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
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      padding-top: 37px;
    }
    &-text {
      &-top {
        font-size: 12px;
        font-family: 'Nanum Myeongjo', serif;
        padding-bottom: 13px;
        color: #441800;
      }
      &-middle {
        font-size: 48px;
        font-weight: 400;
        font-family: 'Nanum Myeongjo', serif;
        padding: 13px 0;
        line-height: 45px;
        div {
          margin: 5px auto 8px;
          background-color: #999;
          height: 1px;
          width: 42px;
        }
      }
      &-bottom {
        padding-top: 10px;
        padding-bottom: 2px;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Nanum Myeongjo', serif;
      }
    }
    &-img {
      width: 100%;
    }
  }
  .info {
    &-container {
      width: 100%;
      padding: 27px 0 19px;
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
      padding: 3px 0;
    }
    &-date {
      font-size: 16px;
      font-weight: 600;
      font-family: 'Nanum Myeongjo', serif;
      padding: 11px 0 4px;
    }
    &-location {
      font-size: 16px;
      font-weight: 600;
      font-family: 'Nanum Myeongjo', serif;
      padding: 4px 0 10px;
    }
    &-person {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-relation {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Nanum Myeongjo', serif;
      color: #666;
      margin: 0 10px 0 5px;
    }
  }
  .ment {
    &-container {
      width: 100%;
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
      color: #bf8dcf;
      padding: 2px 0;
    }
    &-text {
      font-size: 14px;
      letter-spacing: normal;
      line-height: 28px;
      font-weight: 400;
      font-family: 'Nanum Myeongjo', serif;
      padding: 24px 0 34px;
    }
  }
  .divider {
    width: 12px;
    border-top: 2px solid #999;
    margin-bottom: 4px;
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
      padding: 20px 10px 0;
    }
    &-thumbnail {
      &-container {
        padding: 25px 10px;
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
      color: #bf8dcf;
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
      border-radius: 5px;
      background-color: #bf8dcfb7;
      color: #fff;
      padding: 5px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      &-icon {
        width: 12px;
        aspect-ratio: 1;
        min-width: none;
      }

      &-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
      }
    }
  }
  .d-day {
    &-container {
      width: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 25px 0 0;
    }
    &-text {
      font-size: 16px;
      font-weight: bold;
      color: #999;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
  .map {
    &-container {
      width: 100%;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 0 0;
    }
    &-title {
      font-size: 24px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 5px 0 15px;
      color: #bf8dcf;
    }
    &-location {
      font-size: 16px;
      font-weight: bold;
      padding: 10px 0;
      font-family: 'Nanum Myeongjo', serif;
    }
    &-address {
      font-size: 12px;
      font-family: 'Nanum Myeongjo', serif;
      button {
        margin-left: 8px;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 0 5px;
      }
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
        font-size: 18px;
        font-weight: bold;
        font-family: 'Nanum Myeongjo', serif;
        padding: 10px 0;
        color: #bf8dcf;
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
          padding: 5px 0;
        }
      }
    }
  }
  .noti {
    &-container {
      width: 78%;
      margin-top: 15px;
      padding: 10px 18px 20px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      border: 1px double #bf8dcf;
      border-radius: 15px;
    }
    &-title {
      font-size: 16px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      padding: 10px 0 20px;
      color: #bf8dcf;
    }
    &-content {
      font-size: 12px;
      line-height: 24px;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
    }
  }
  .footer {
    &-img {
      &-container {
        margin: 0px 0 20px;
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
      color: #888;
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
      color: #bf8dcf;
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
      padding: 20px 10px 0;
      font-weight: bold;
      font-family: 'Nanum Myeongjo', serif;
      color: #bf8dcf;
    }

    &-container {
      width: 35%;
      background-color: #fadfff;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
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
      padding: 0px 15px 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      &:nth-last-child(1) {
        border-bottom: none;
      }
    }
    &-to {
      padding: 10px 0;
      color: #3f3740;
      font-size: 16px;
      font-weight: 600;
      font-family: 'Nanum Myeongjo', serif;

      span {
        color: #666;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;

      left: 15px;
      bottom: 20px;
      z-index: 100;
      background-color: #ffffb08e;
      border-radius: 15px;
      padding: 6px 0 3px;
    }
    &-button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      font-size: 0.5px;
      padding: 7px 10px;
      cursor: pointer;
      img {
        width: 20px;
      }
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
  import { getDatabase, onValue, ref as databaseRef } from 'firebase/database'
  import {
    getStorage,
    listAll,
    getDownloadURL,
    ref as storageRef
  } from 'firebase/storage'

  import { ActivateSnow } from './../../lib/snow'
  import { firebaseApp } from '../../lib/firebase'
  import { copyContent } from '../../lib/copy'
  import Toast from '../../components/Toast.svelte'
  import { toast } from '@zerodevx/svelte-toast'
  import Wave from '../../assets/images/wave.svelte'

  AOS.init()
  let wrapperRef: HTMLElement

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

  let mapActive = false

  let isShowOpening = true
  $: isShowOpening, scrollToElement('header')
  let isShowCommentsModal = false
  let isShowImageModal = false
  let isShowWriteModal = false
  let writeModalStartY = 0

  let isShowAccountModal = false
  let accountInfo: PersonInfo
  const toggleAccountModal = (info: PersonInfo) => {
    accountInfo = info
    isShowAccountModal = true
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
  const copyAddres = (address: string) => {
    copyContent(address)
    toast.push('주소가 복사되었습니다.', {
      theme: {
        '--toastBackground': '#32AA62',
        '--toastColor': '#fff'
      },
      duration: 1000
    })
  }
  $: isShowImageModal, galleryScrollController()
  const galleryScrollController = () => {
    if (!isShowImageModal) {
      scrollToElement('gallery')
    }
  }
  $: isShowAccountModal, accountScrollController()
  const accountScrollController = () => {
    if (!isShowAccountModal) {
      scrollToElement('contact-us')
    }
  }
  $: isShowCommentsModal, isShowWriteModal, guestBookScrollController()
  const guestBookScrollController = () => {
    if (!isShowCommentsModal && !isShowWriteModal) {
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
      dday = weddingDay.diff(dayjs(), 'day') + 1
    })
    const commentRef = databaseRef(database, '/comments')
    onValue(commentRef, snapshot => {
      let data: Comment[] = []
      if (snapshot.val()) {
        Object.keys(snapshot.val()).forEach(key => {
          data.push({ key, ...snapshot.val()[key] })
        })
        listComment = data
          .sort((a, b) => {
            return dayjs(a.createdDate).diff(dayjs(b.createdDate))
          })
          .reverse()
      } else {
        listComment = []
      }
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
    ActivateSnow()
  })
</script>

<!-- markup (zero or more items) goes here -->

<Opening
  bind:show={isShowOpening}
  close={() => (isShowOpening = false)}
  text={info.openingMsg}
/>
<div class="navigation-container">
  <Toast />

  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('gallery', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    <img src="/assets/photo.svg" alt="G" />
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('map', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    <img src="/assets/map.svg" alt="M" />
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('contact-us', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    <img src="/assets/contact.svg" alt="C" />
  </button>
  <button
    class="navigation-button"
    on:click={() => {
      scrollToElement('guest-book', 'smooth')
    }}
    transition:fly={{ x: -50, duration: 300 }}
  >
    <img src="/assets/letter.svg" alt="L" />
  </button>
</div>

<div bind:this={wrapperRef} class="main-wrapper" transition:fade>
  <div class="header-container">
    <div class="header-text-top">THE MARRIAGE</div>
    <div class="header-text-middle">
      {weddingDay.format('MM')}
      <div />
      {weddingDay.format('DD')}
    </div>
    <div class="header-text-bottom">
      {info.groom.name}
      {info.bride.name} 결혼합니다 !
    </div>
    <div class="wave-top">
      <Wave />
    </div>
    {#if info.header.imgPath}
      <img class="header-img" src={info.header.imgPath} alt="" />
    {/if}
    <div class="wave-bottom">
      <Wave />
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
      {weddingDay.format('YYYY년 M월 DD일 ddd요일')}
      {info.weddingTime}
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
      <div class="info-person" style="font-size: 18px">{info.groom.name.slice(1)}</div>
    </div>
    <div class="info-line">
      <div class="info-person">{info.brideFather.name}</div>
      <div class="separator" />
      <div class="info-person">{info.brideMother.name}</div>
      <div class="info-relation">의 {info.bride.relation}</div>
      <div class="info-person" style="font-size: 18px">{info.bride.name.slice(1)}</div>
    </div>
  </div>

  <ImageModal
    isShow={isShowImageModal}
    title=""
    toggoleModal={() => {
      isShowImageModal = !isShowImageModal
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
          isShowImageModal = !isShowImageModal
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
            scrollToElement('gallery', 'smooth')
          }}
        >
          <img src={item.thumbnail} alt={item.thumbnail} />
        </div>
      {/each}
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
    <div class="map-address">
      {@html info.weddingHole.address}
      <button on:click={() => copyAddres(info.weddingHole.address)}>복사</button>
    </div>
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
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groom.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groom)}
            >
              <img alt="won" src="/assets/won.svg" />
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>아버님</span> {info.groomFather.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.groomFather.phone}">
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groomFather.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groomFather)}
            >
              <img alt="won" src="/assets/won.svg" />
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>어머님</span> {info.groomMother.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.groomMother.phone}">
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.groomMother.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.groomMother)}
            >
              <img alt="won" src="/assets/won.svg" />
            </button>
          </div>
        </div>
      </div>

      <div class="contacting-container">
        <div class="contacting-to"><span>신부</span> {info.bride.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.bride.phone}">
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.bride.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.bride)}
            >
              <img alt="won" src="/assets/won.svg" />
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>아버님</span> {info.brideFather.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.brideFather.phone}">
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.brideFather.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.brideFather)}
            >
              <img alt="won" src="/assets/won.svg" />
            </button>
          </div>
        </div>
        <div class="contacting-to"><span>어머님</span> {info.brideMother.name}</div>
        <div class="contacting-sub-container">
          <div class="contacting-icons">
            <a class="contacting-btn-icon" href="tel:{info.brideMother.phone}">
              <img alt="phone" src="/assets/phone.svg" />
            </a>
            <a class="contacting-btn-icon" href="sms:{info.brideMother.phone}">
              <img alt="message" src="/assets/message.svg" />
            </a>
            <button
              class="contacting-btn-pay-icon"
              on:click={() => toggleAccountModal(info.brideMother)}
            >
              <img alt="won" src="/assets/won.svg" />
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groom.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.bride.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groomFather.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.groomMother.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.brideFather.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
              src="/assets/phone.svg"
            />
          </a>
          <a class="contact-us-btn-icon" href="sms:{info.brideMother.phone}">
            <img
              alt="message"
              src="/assets/message.svg"
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
    <div class="guest-book-title">축하 글을 남겨주세요 !</div>
    <Carousel interval={185} length={listComment.length}>
      <PostIt comments={listComment} />
    </Carousel>
    <div class="guest-book-btn-container">
      <button
        class="guest-book-btn"
        on:click={() => {
          isShowCommentsModal = true
        }}
      >
        <img class="guest-book-btn-icon" src="/assets/menu.svg" alt="전체보기" />
        <p>전체 보기</p>
      </button>
      <button
        class="guest-book-btn"
        on:click={e => {
          writeModalStartY = e.clientY
          isShowWriteModal = true
        }}
      >
        <img class="guest-book-btn-icon" src="/assets/pen.svg" alt="글쓰기" />
        <p>작성 하기</p>
      </button>
    </div>
  </div>
  <Modal bind:isShow={isShowCommentsModal} title="방명록">
    <Comments comments={listComment} />
  </Modal>

  <WriteModal bind:isShow={isShowWriteModal} startY={writeModalStartY} title="방명록" />
  <AccountModal
    bind:isShow={isShowAccountModal}
    bind:accountInfo
    startY={writeModalStartY}
    payIcon={assets.pay}
  />

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
  <div class="footer-img-container">
    <div class="wave-top">
      <Wave />
    </div>
    <img src={info.footer.imgPath} alt={'FooterImg'} class="footer-img" />
    <div class="wave-bottom">
      <Wave />
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
