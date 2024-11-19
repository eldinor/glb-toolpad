import React, { useState, useEffect } from 'react';
import Emitter from './EventEmitter';

function Sidebar() {
  const [state, setState] = useState({
    sidebar: 'Default sidebar'
  });

  useEffect(() => {
    Emitter.on('INPUT_FROM_MAIN', newValue => setState({ sidebar: newValue }));
    return () => {
      Emitter.off('INPUT_FROM_MAIN', undefined);
    };
  }, [state.sidebar]);

  return (
    <div>
      <h3>{state.sidebar}</h3>
      <p>
        SideBar listens on new input all the time. Don't foget clean up when
        destroy component.
      </p>
    </div>
  );
}
export default Sidebar;
