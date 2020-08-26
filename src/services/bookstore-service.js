export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Flower',
        price: '5$',
        cover: 'https://www.oreilly.com/library/view/production-ready-microservices/9781491965962/assets/cover.png'
      },
      {
        id: 2,
        title: 'Release IT',
        author: 'Michael T. Nygard',
        price: '5$',
        cover: 'https://d17lvj5xn8sco6.cloudfront.net/E8/C4/DB/4B/4A/AA/7C/BA/49/53/11/45/61/B6/0D/ED/0001B28D/cover2000.jpg'
      }
    ];
  }
}