import React, { useState, useRef, useEffect } from 'react';
export const App: React.FC = () => {
  const [key, setKey] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    setKey(event.key);
  };

  return (
    <div className="App" ref={divRef} onKeyDown={handleKeyDown} tabIndex={0}>
      {' '}
      {!key && <p className="App__message">Nothing was pressed yet</p>}
      {key && <p className="App__message">The last pressed key is [{key}]</p>}
    </div>
  );
};
