export interface Comment {
  sender: string
  comment: string
  createdDate: string
}

export interface Info {
  header: {
    img: string
  },

  footer: {
    img: string,
    text: string
  },

  weddingDay: string,
  weddingTime: string,
  weddingHole: {
    name: string,
    address: string,
    subway: string[],
    bus: string[],
    car: string[]
  },
  inviteMent: string,
  noti: {
    title: string,
    contents: string[]
  },
  groom: {
    name: string,
    relation: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  },
  groomFather: {
    name: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  },
  groomMother: {
    name: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  },
  bride: {
    name: string,
    relation: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  },
  brideFather: {
    name: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  },
  brideMother: {
    name: string,
    phone: string,
    account: {
      bank: string,
      number: string
    },
    pay: string
  }
}
export interface GalleryItem {
  path: string
  thumbnail: string
}