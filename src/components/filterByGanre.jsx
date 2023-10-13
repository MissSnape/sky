import React from "react";
import * as S from './filterStyle';
function Ganre({
    toggleVisibility, filter
  }) {
    return (
      <>
      <S.FilterButton
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
      </S.FilterButton>
      {filter === 'genre' && (
        <S.FilterMenuRight  className="filter__menu filter__menu_right">
          <S.FilterMenuItem className="filter__menu_item">Рок</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Хип-Хоп</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Поп-музыка</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Техно</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">Инди</S.FilterMenuItem>
        </S.FilterMenuRight>
      )}
    </>
    );
  }

  
export {Ganre};