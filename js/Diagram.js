class Diagram {
  loadAllElements(tables) {
    Object.values(document.getElementsByClassName('diagram')).forEach((element) =>
      this.loadElement(element, tables)
    );
  }

  loadElement(element, tables) {
    Object.values(tables).forEach((table) => {
      console.log(table);
      element.appendChild(table.createElement());
    });
  }
}
