import React from 'react';
import classnames from 'classnames';

import './UserPicture.scss';

type UserPictureProps = {
  className?: string;
  src: string;
  alt: string;
  height: number;
};

const UserPicture: React.FC<UserPictureProps> = ({ className, src, alt, height }) => {
  return (
    <div className={classnames('UserPicture', className)}>
      <img className="user-img" src={src} alt={alt} height={height} />
    </div>
  );
};

export default UserPicture;
