import React, { useState } from 'react';
import Emitter from './EventEmitter';

function Main() {
  const [state, setState] = useState({ inputValue: '' });
 

  const handleOnClick = e => {
    Emitter.emit('INPUT_FROM_MAIN', state.inputValue);
  };



  return (
    <div>
      <h3>Main Content</h3>
      <input
        type="text"
        value={state.inputValue}
        onChange={e => setState({ inputValue: e.target.value })}
      />
      <input
        type="button"
        value="Send to other components"
        onClick={handleOnClick}
      />

    </div>
  );
}

export default Main;
