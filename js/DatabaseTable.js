class DatabaseTable {
  constructor(name, columns) {
    this.name = name;
    this.columns = columns;
  }

  createElement() {
    const element = document.createElement('div');
    element.classList.add('diagram-table');

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = this.name;
    element.appendChild(titleElement);

    const listElement = document.createElement('ul');
    element.appendChild(listElement);

    Object.values(this.columns).forEach((column) => {
      const listItemElement = document.createElement('li');
      listItemElement.appendChild(column.createElement());

      listElement.appendChild(listItemElement);
    });

    return element;
  }
}
