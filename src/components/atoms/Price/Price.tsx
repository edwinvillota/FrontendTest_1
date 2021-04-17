import React from 'react';
import classnames from 'classnames';

import './Price.scss';

type PriceProps = {
  className?: string;
  price: string;
  units?: string | number;
};

const Price: React.FC<PriceProps> = ({ className, units, price }) => {
  return (
    <div className={classnames('Price', className)}>
      <span className="symbol">$</span>
      <span className="value">{parseFloat(price).toLocaleString('es-ES')}</span>
      {units && <span className="units">{`x ${units} unids`}</span>}
    </div>
  );
};

export default Price;
