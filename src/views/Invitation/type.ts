export interface Comment {
  sender: string
  comment: string
  createdDate: string
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
  }

  footer: {
    img: string
    text: string
  }

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
  path: string
  thumbnail: string
}
