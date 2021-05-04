const diagram = new Diagram();

const requestDiagramData = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', '/data/diagram_data.json', true);

    request.onload = () => {
      if (request.status == 200) resolve(request.response);
      else reject(request.status, request.statusText);
    };

    request.send();
  });
};

window.onload = async () => {
  const response = await requestDiagramData();
  const jsonData = JSON.parse(response);

  diagram.loadAllElements(jsonData.tables);
};
