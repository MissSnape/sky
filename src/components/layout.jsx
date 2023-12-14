import { useSelector } from 'react-redux';
//import { crateTrackList } from '../store/actions/creators/skymusic';
import { Outlet } from 'react-router-dom';
import * as S from './layotStyle'
import React from 'react';
import { NavBurger } from './NavBurger';
import { Player } from './TracsPlayer';
function Layout() {
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  return (
    <S.Wrapper className="wrapper">
      <S.Container className="container">
        <S.Main className="main">
          <NavBurger />
          <Outlet />
        </S.Main>
        <S.Bar className="bar">{currentTrack.id ? <Player /> : null}</S.Bar>
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default Layout;