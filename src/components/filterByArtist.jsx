import React from "react";
import { tracks } from '../data';

function ByArtist({ toggleVisibility, filter }) {
  return (
    <>
      <div
        className={
          'filter__button button-author _btn-text' +
          `${filter === 'author' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (filter === 'author') {
            toggleVisibility('');
          } else {
            toggleVisibility('author');
          }
        }}
      >
        исполнителю
      </div>
      {filter === 'author' && (
        <div className="filter__menu filter__menu_left">
          {tracks.map((track) => (
            <div key={track.id} className="filter__menu_item">
              {track.author}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export {ByArtist};