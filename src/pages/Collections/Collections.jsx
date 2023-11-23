import { Player } from '../../components/TracsPlayer';
//import { SideBar } from '../../components/SideBar';
//import { Filters } from '../../components/filters';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { PersonalUser } from '../../components/users';
import { NavBurger } from '../../components/NavBurger';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
//import { SideBarPlug } from '../../components/SideBarPlug';
import * as S from './CollectionsStyles';
//import { useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import getTrackList from '../../api';
function Collections() {
 
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
    <>
       <S.Wrapper className="wrapper">
        <S.Container className="container">
          <S.Main className="main">
            <NavBurger />
            <S.MainCenterblock className="main__centerblock centerblock">
              <Search />
              <S.CenterblockH2 className="centerblock__h2">Плейлист дня</S.CenterblockH2>
              
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
              <PersonalUser />
             
            </S.MainSidebar>
          </S.Main>
          <S.Bar className="bar">
          {activTrack ? <Player activTrack={activTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> : null}</S.Bar>
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Collections;