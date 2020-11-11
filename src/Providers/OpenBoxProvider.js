import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OpenBoxProvider = ({ render }) => {
  const [isToolVisible, setToolVisible] = useState(false);
  return (
    <>
      {render(isToolVisible, setToolVisible)}
    </>
  );
};

OpenBoxProvider.propTypes = {
  render: PropTypes.func.isRequired,
};

export default OpenBoxProvider;
