export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Flower',
      },
      {
        id: 2,
        title: 'Release IT',
        author: 'Michael T. Nygard',
      }
    ];
  }
}