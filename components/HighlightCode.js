

import highlight from 'highlight.js';
import { createRef, useEffect } from 'react';

const HighlightCode = ({children, language}) => {
  const code = createRef();

  useEffect(() => {
    highlight.highlightElement(code.current);
  }, [])

  return (
    <pre>
      <code
        ref={code}
        className={language}>
        {children}
      </code>
    </pre>
  )
}


export default HighlightCode;