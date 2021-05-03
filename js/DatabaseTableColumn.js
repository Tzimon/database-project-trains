class DatabaseTableColumn {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  createElement() {
    const element = document.createElement('p');

    element.innerHTML = `${this.name} (${this.type})`;

    return element;
  }
}
