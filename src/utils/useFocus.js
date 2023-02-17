import { useRef, useEffect } from 'react';

function useFocus() {
  const innerRef = useRef(null);

  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.focus();
    }
  }, []); 

  return innerRef;
}

export default useFocus;
