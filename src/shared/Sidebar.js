import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Profile">
        Profile
      </a>

      <a className="menu-item" href="/Skills">
        Skills
      </a>

      <a className="menu-item" href="/Achievements">
        Achievements
      </a>
    </Menu>
  );
};