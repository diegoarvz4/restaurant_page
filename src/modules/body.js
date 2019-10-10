export default (() => {
  const create = () => {
    const bodyNode = document.createElement('div');
    bodyNode.classList.add('content-body');
    bodyNode.setAttribute('id', 'content-body');
    return bodyNode;
  };
  return { create };
})();