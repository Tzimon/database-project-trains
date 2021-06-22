const fetchTables = async () => {
  const data = await fetch('http://api.arcyle.de/trains/tables');
  return await data.json();
};

const loadTableOverviews = async () => {
  const tableOverviews = getAllOverviews();
  let data;

  try {
    data = await fetchTables();
    localStorage.setItem('tables', JSON.stringify(data));
  } catch (error) {
    data = JSON.parse(localStorage.getItem('tables'));
  }

  for (const tableOverview of tableOverviews) {
    tableOverview.loadElement(data == null ? null : data.tables);
  }
};

const getAllOverviews = () => {
  const tableOverviews = [];

  for (const element of document.getElementsByClassName('table-overview')) {
    tableOverviews.push(new TableOverview(element));
  }

  return tableOverviews;
};

loadTableOverviews();
