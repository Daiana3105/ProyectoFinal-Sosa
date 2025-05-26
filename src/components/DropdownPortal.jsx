import { createPortal } from 'react-dom';

const DropdownPortal = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  return portalRoot ? createPortal(children, portalRoot) : null;
};

export default DropdownPortal;
