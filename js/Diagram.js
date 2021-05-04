class Diagram {
  constructor() {
    this.color = 0;
  }

  loadAllElements(tables) {
    Object.values(document.getElementsByClassName('diagram')).forEach((element) => {
      element.innerHTML = '';

      this.loadTables(element, tables);
      this.loadCanvas(element, tables);
    });
  }

  loadTables(element, tables) {
    const tablesElement = document.createElement('div');

    Object.keys(tables).forEach((tableName) => {
      tablesElement.appendChild(this.createTableElement(tableName, tables));
    });

    tablesElement.classList.add('diagram-tables');
    element.appendChild(tablesElement);
  }

  nextColor(tableCount) {
    return (this.color++ * 360) / tableCount;
  }

  createTableElement(tableName, tables) {
    const table = tables[tableName];

    const element = document.createElement('div');
    element.style.backgroundColor = `hsl(${this.nextColor(Object.keys(tables).length)}, 35%, 90%)`;
    element.classList.add('diagram-table');

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = tableName;
    element.appendChild(titleElement);

    const listElement = document.createElement('ul');
    element.appendChild(listElement);

    Object.keys(table.columns).forEach((columnName) => {
      const listItemElement = document.createElement('li');
      listItemElement.appendChild(this.createColumnElement(columnName, table.columns[columnName]));
      listElement.appendChild(listItemElement);
    });

    return element;
  }

  createColumnElement(columnName, column) {
    const element = document.createElement('p');
    element.innerHTML = `${columnName} (${column})`;
    return element;
  }

  loadCanvas(element, tables) {
    const canvasElement = document.createElement('canvas');

    canvasElement.width = '1920';
    canvasElement.height = '1080';

    const context = canvasElement.getContext('2d');

    element.appendChild(canvasElement);
  }
}
