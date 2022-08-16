class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  renderItems(initialArray, userId) {
    initialArray.forEach(item => this._renderer(item, userId));
  }
}

export {Section};
