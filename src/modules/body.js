const body = (() => {

  let create = () => {
    let bodyNode = document.createElement('div');
    bodyNode.classList.add('content-body');
    bodyNode.setAttribute('id', 'content-body')
    return bodyNode;
  };

  return { create }
})();

export { body }