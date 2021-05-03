const diagram = new Diagram();

window.onload = () => {
  diagram.loadAllElements([
    new DatabaseTable('fahrt', [
      new DatabaseTableColumn('id', 'VARCHAR'),
      new DatabaseTableColumn('id', 'INT'),
    ]),
    new DatabaseTable('zugtyp', [
      new DatabaseTableColumn('id', 'VARCHAR'),
      new DatabaseTableColumn('hersteller', 'AWDASDAWDASDAwd'),
    ]),
    new DatabaseTable('test', []),
    new DatabaseTable('fahrt', [
      new DatabaseTableColumn('id', 'VARCHAR'),
      new DatabaseTableColumn('id', 'INT'),
    ]),
    new DatabaseTable('fahrt', [
      new DatabaseTableColumn('id', 'VARCHAR'),
      new DatabaseTableColumn('id', 'INT'),
      new DatabaseTableColumn('id', 'INT'),
    ]),
    new DatabaseTable('fahrt', [
      new DatabaseTableColumn('id', 'VARCHAR'),
      new DatabaseTableColumn('id', 'INT'),
    ]),
  ]);
};
