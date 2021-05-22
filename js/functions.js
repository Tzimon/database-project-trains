const createElement = (type, attributes) => {
  const element = document.createElement(type);

  for (const attribute in attributes) {
    const value = attributes[attribute];

    if (attribute === 'innerText') element.innerText = value;
    else element.setAttribute(attribute, value);
  }

  return element;
}