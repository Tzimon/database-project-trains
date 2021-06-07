class TableOverview {
  static color = 0;

  constructor(element) {
    this.element = element;
  }

  static getAllOverviews() {
    const tableOverviews = [];

    for (const element of document.getElementsByClassName('table-overview')) {
      tableOverviews.push(new TableOverview(element));
    }

    return tableOverviews;
  }

  static nextColor(tableCount) {
    return (this.color++ * 360) / tableCount;
  }

  static createTableElement(tableName, tables) {
    const table = tables[tableName];

    const element = createElement('div', { class: 'table' });
    element.style.backgroundColor = `hsl(${this.nextColor(
      Object.keys(tables).length
    )}, 35%, 90%)`;

    const titleElement = createElement('h3', { innerText: tableName });
    element.appendChild(titleElement);

    const listElement = createElement('ul');
    element.appendChild(listElement);

    Object.keys(table.columns).forEach((columnName) => {
      const listItemElement = createElement('li');
      listItemElement.appendChild(
        createElement('p', {
          innerText: `${columnName} (${table.columns[columnName]})`,
        })
      );
      listElement.appendChild(listItemElement);
    });

    return element;
  }

  static createColumnElement(columnName, column) {
    return createElement('p', { innerText: `${columnName} (${column})` });
  }

  loadElement(tables) {
    this.element.innerHTML = '';

    for (const tableName in tables) {
      this.element.appendChild(
        TableOverview.createTableElement(tableName, tables)
      );
    }
  }

  loadError() {
    this.element.innerHTML = '';

    this.element.appendChild(
      createElement('p', {
        class: 'error',
        innerText: 'Verbindungsfehler',
      })
    );
  }
}
