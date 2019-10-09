export default (() => {
  const create = () => {
    const footerNode = document.createElement('div');
    footerNode.classList.add('content-footer');
    footerNode.innerHTML = '<span> ® Pizza Restaurant All Rights Reserved</span>';
    return footerNode;
  }
  return { create };
})();