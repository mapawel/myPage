import React, { useState } from 'react';

const OpenBoxProvider = ({ render }) => {
  const [isToolVisible, setToolVisible] = useState(false);
  return (
    <>
      {render(isToolVisible, setToolVisible)}
    </>
  );
};

// OpenBoxProvider.propTypes = {

// };

export default OpenBoxProvider;
