import React from 'react';
import * as S from './SideBarStyle';
//import { useUserContext } from '../../context/user';
import { NavLink } from 'react-router-dom';

function User() {

  const logOut = () => {
    localStorage.clear();
  };
  return (
    <S.SidebarPersonal className="sidebar__personal">
      <S.SidebarPersonalName className="sidebar__personal-name">
        
      </S.SidebarPersonalName>
      <NavLink to="/login">
        <S.SidebarAvatar
          className="sidebar__avatar"
          onClick={logOut}
        ></S.SidebarAvatar>
      </NavLink>
    </S.SidebarPersonal>
  );
}

export { User };