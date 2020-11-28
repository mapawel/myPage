import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SwitchProvider = ({ render }) => {
  const [grainVisible, setGrainVisible] = useState(false);

  return (
    <>
      {render(grainVisible, setGrainVisible)}
    </>
  );
};

SwitchProvider.propTypes = {
  render: PropTypes.func.isRequired,
};

export default SwitchProvider;
