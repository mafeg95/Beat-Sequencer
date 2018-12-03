export const makeElement = (type, props, text) => {
  const el = document.createElement(type);
  Object.keys(props).forEach(prop => {
    el[prop] = props[prop];
  });
  if (text){
   const textNode = document.createTextNode(text);
   el.appendChild(textNode);
  }
  return el;
};
