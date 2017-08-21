export class App {

  constructor(container, sampleData) {

    this.container = container;
    this.sampleData = sampleData;

    // Audit Value
    this.value = {};

    // Setup allow routes
    page('/', this.setup.bind(this));
    page('*', this.setup.bind(this));
    page({
      hashbang: true
    });

  }

  setup() {
    console.log('hey lets do something!')
  }

}
