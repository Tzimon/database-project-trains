const tableOverviews = new TableOverviews();

const fetchData = async () => {
  return (await fetch('http://localhost:3000/trains/tables')).json();
};

const loadTablesOverview = async () => {
  const jsonData = await fetchData();
  tableOverviews.loadAllElements(jsonData.tables);
};
