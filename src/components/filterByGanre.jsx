import React from "react";

function Ganre({
    toggleVisibility, filter
  }) {
    return (
      <>
        <div
          className={"filter__button button-year _btn-text" +`${filter === 'genre' && (' filter__button_clicked')}`}
          onClick={() => {
            if (filter === 'genre') {
              toggleVisibility('')
            } else {
              toggleVisibility('genre')
            }
          }}
        >
          жанру
        </div>
        {filter === 'genre' && (
          <div className="filter__menu filter__menu_right">
            <div className="filter__menu_item">Рок</div>
            <div className="filter__menu_item">Хип-Хоп</div>
            <div className="filter__menu_item">Поп-музыка</div>
            <div className="filter__menu_item">Техно</div>
            <div className="filter__menu_item">Инди</div>
          </div>
        )}
      </>
    );
  }

  
export {Ganre};