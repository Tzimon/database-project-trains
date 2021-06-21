const fetchTables = async () => {
  const data = await fetch('http://api.arcyle.de/trains/tables');
  return await data.json();
};

const loadTableOverviews = async () => {
  const tableOverviews = getAllOverviews();

  try {
    const jsonData = await fetchTables();

    for (const tableOverview of tableOverviews) {
      tableOverview.loadElement(jsonData.tables);
    }
  } catch {
    for (const tableOverview of tableOverviews) {
      tableOverview.loadError();
    }
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
