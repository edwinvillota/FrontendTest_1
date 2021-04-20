import React, { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.scss';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className, ...props }) => {
  return (
    <div className={classnames('SearchBar', className)}>
      <input className="searchbar-input" type="search" {...props} />
      <FaSearch className="searchbar-icon" />
    </div>
  );
};

export default SearchBar;
