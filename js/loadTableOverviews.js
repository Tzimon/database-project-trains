const tableOverviews = new TableOverviews();

const fetchData = async () => {
  return (await fetch('http://api.arcyle.de/trains/tables')).json();
};

const loadTablesOverview = async () => {
  const jsonData = await fetchData();
  tableOverviews.loadAllElements(jsonData.tables);
};
