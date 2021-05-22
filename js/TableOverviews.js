class TableOverviews {
  constructor() {
    this.color = 0;
  }

  loadAllElements(tables) {
    Object.values(document.getElementsByClassName('table-overview')).forEach((element) => {
      element.innerHTML = '';

      this.loadTables(element, tables);
    });
  }

  loadTables(element, tables) {
    Object.keys(tables).forEach((tableName) => {
      element.appendChild(this.createTableElement(tableName, tables));
    });
  }

  nextColor(tableCount) {
    return (this.color++ * 360) / tableCount;
  }

  createTableElement(tableName, tables) {
    const table = tables[tableName];

    const element = createElement('div', { class: 'table' });
    element.style.backgroundColor = `hsl(${this.nextColor(Object.keys(tables).length)}, 35%, 90%)`;

    const titleElement = createElement('h3', { innerText: tableName });
    element.appendChild(titleElement);

    const listElement = createElement('ul');
    element.appendChild(listElement);

    Object.keys(table.columns).forEach((columnName) => {
      const listItemElement = createElement('li');
      listItemElement.appendChild(
        createElement('p', { innerText: `${columnName} (${table.columns[columnName]})` })
      );
      listElement.appendChild(listItemElement);
    });

    return element;
  }

  createColumnElement(columnName, column) {
    const element = document.createElement('p');
    element.innerHTML = `${columnName} (${column})`;
    return element;
  }
}
