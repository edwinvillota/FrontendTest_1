import React from 'react';
import { Stamp as StampModel } from 'ts/models';

import './Stamp.scss';

type StampProps = {
  stamp: StampModel;
};

const Stamp: React.FC<StampProps> = ({ stamp }) => {
  return (
    <div className="Stamp">
      <img src={stamp.image} alt={`${stamp.name} image`} />
      <div className="tooltip">
        <span className="tooltip-title">Producto</span>
        <span className="tooltip-text">{stamp.name}</span>
      </div>
    </div>
  );
};

export default Stamp;
