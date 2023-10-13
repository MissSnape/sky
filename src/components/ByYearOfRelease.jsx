import React from "react";
import * as S from './filterStyle';
function ByOfYearOfRelease({ toggleVisibility, filter }) {
    return (
      <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${filter === 'year' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (filter === 'year') {
            toggleVisibility('');
          } else {
            toggleVisibility('year');
          }
        }}
      >
        году выпуска
      </S.FilterButton>
      {filter === 'year' && (
        <S.FilterMenuCenter className="filter__menu filter__menu_center">
          <S.FilterMenuItem className="filter__menu_item">2023</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">2022</S.FilterMenuItem>
          <S.FilterMenuItem className="filter__menu_item">2021</S.FilterMenuItem>
        </S.FilterMenuCenter>
      )}
    </>
    );
  }

export {ByOfYearOfRelease};