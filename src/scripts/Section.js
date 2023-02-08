export default class Section {
  constructor({ items,  renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(item) {
    this._container.append(item);
  }
  
  addItem(item) {
    this._container.prepend(item);
  }
}