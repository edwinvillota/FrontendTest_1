import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { UserPicture, Button } from 'components/atoms';

import './UserProfile.scss';

type UserProfileProps = {
  name: string;
  picture: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ name, picture }) => {
  return (
    <div className="UserProfile">
      <div className="user-info-wrapper">
        <span className="user-info-name">{name}</span>
        <Button
          className="profile-button"
          label="Mi perfil"
          icon={<FaChevronDown className="profile-button-icon" />}
          sizeVariant="Small"
          rounded
        />
      </div>
      <div className="user-picture-wrapper">
        <UserPicture className="user-profile-picture" src={picture} alt={`${name} picture`} height={45} />
      </div>
    </div>
  );
};

export default UserProfile;
