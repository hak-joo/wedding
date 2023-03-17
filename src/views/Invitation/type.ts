export interface Comment {
  key?: string
  sender: string
  comment: string
  createdDate: string
  password: string
}
export interface PersonInfo {
  name: string
  relation?: string
  phone: string
  account: {
    bank: string
    number: string
  }
  pay: string
}
export interface Info {
  header: {
    img: string
    imgPath: string
  }

  footer: {
    img: string
    imgPath: string
    text: string
  }

  openingMsg: string

  weddingDay: string
  weddingTime: string
  weddingHole: {
    name: string
    address: string
    subway: string[]
    bus: string[]
    car: string[]
  }
  inviteMent: string
  noti: {
    title: string
    contents: string[]
  }
  groom: PersonInfo
  groomFather: PersonInfo
  groomMother: PersonInfo

  bride: PersonInfo
  brideFather: PersonInfo
  brideMother: PersonInfo
}
export interface GalleryItem {
  name: string
  path: string
  fullPath: string
  thumbnail: string
  thumbnailPath: string
}
