import React, {useState, useEffect} from 'react';

import { TracsPlayer } from '../../components/TracsPlayer';
import { SideBar } from '../../components/SideBar';
import { Filters } from '../../components/filters';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { User } from '../../components/users';
import { NavBurger } from '../../components/NavBurger';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
import { SideBarPlug } from '../../components/SideBarPlug';
import * as S from './appStyles';
import getTrackList from '../../api';
function Home() { 
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setLoadingStatus] = useState(true);
  const [tracks, setTrackList] = useState([]);
  const [activTrack, setActivTrack] = useState(null);
  const [newApiError, setNewApiError] = useState(null);
  useEffect(() => {
    getTrackList()
      .then((tracks) => {
        setTrackList(tracks);
        setLoadingStatus(false);
      })
      .catch((error) => {
        setNewApiError(error.message) 
      });
  }, []);
    return (
      <S.Wrapper className="wrapper">
        <S.Container className="container">
          <S.Main className="main">
            <NavBurger />
            <S.MainCenterblock className="main__centerblock centerblock">
              <Search />
              <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
              <Filters />
              <S.CenterblockContent className="centerblock__content">
                <TrackListHeader />
                {newApiError ? <p>Не удалось загрузить данные</p> : null }
              {isLoading ? (
                <TrackListPlug />
              ) : (
                <TracsList tracks={tracks} setActivTrack={setActivTrack} setIsPlaying={setIsPlaying} />
              )}
              </S.CenterblockContent>
            </S.MainCenterblock>
            <S.MainSidebar className="main__sidebar sidebar">
              <User />
              {isLoading ? <SideBarPlug /> : <SideBar />}
            </S.MainSidebar>
          </S.Main>
          <S.Bar className="bar">
          {activTrack ? <TracsPlayer activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> : null}</S.Bar>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    );
  }
  export default Home;