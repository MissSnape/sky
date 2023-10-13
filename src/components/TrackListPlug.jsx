import React from 'react';
import { tracks } from '../data';
import * as S from './tracsStyle';
function TrackListPlug() {
  return (
    <S.ContentPlaylist className="content__playlist playlist">
      {tracks.map((track) => (
        <S.PlaylistItem key={track.id} className="playlist__item">
          <S.PlaylistTrack className="playlist__track track">
          <img
                src="img/plug/trackListPlug.svg"
                alt="plug"
              ></img>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  );
}


export { TrackListPlug };
