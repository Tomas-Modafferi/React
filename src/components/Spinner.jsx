import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Circles
        height={80}
        width={80}
        radius={9}
        color="black"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spinner;
