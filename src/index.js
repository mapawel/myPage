import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ overflow: 'hidden' }}>
      <Root />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
