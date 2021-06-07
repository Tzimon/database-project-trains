const fetchData = async () => {
  const data = await fetch('http://api.arcyle.de/trains/tables');
  return await data.json();
};

const loadTableOverviews = async () => {
  const tableOverviews = TableOverview.getAllOverviews();

  try {
    const jsonData = await fetchData();

    for (const tableOverview of tableOverviews) {
      tableOverview.loadElement(jsonData.tables);
    }
  } catch {
    for (const tableOverview of tableOverviews) {
      tableOverview.loadError();
    }
  }
};

loadTableOverviews();
