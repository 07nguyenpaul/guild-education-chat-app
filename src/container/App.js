import React from 'react';

import ApplicationGrid from './ApplicationGrid.js';

import '../styles/_mixins/_carbon.scss';

function App() {
  return (
    <div className="App">
      <ApplicationGrid>
        <div>Let's chat</div>
      </ApplicationGrid>
    </div>
  );
}

export default App;
