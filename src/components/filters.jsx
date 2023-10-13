import React, {useState} from "react";
import { Ganre } from "./filterByGanre";
import { ByArtist } from "./filterByArtist";
import { ByOfYearOfRelease } from "./ByYearOfRelease";
import * as S from './filterStyle';



function Filters(){
    const [filter, setVisible] = useState(null);
    const toggleVisibility = (name) => setVisible(name);

return(
  <S.CenterblockFilter className="centerblock__filter filter">
  <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>

  <ByArtist
    toggleVisibility={toggleVisibility}
    filter={filter}
  />
  <ByOfYearOfRelease
    toggleVisibility={toggleVisibility}
    filter={filter}
  />
  <Ganre
    toggleVisibility={toggleVisibility}
    filter={filter}
  />
</S.CenterblockFilter>
);

}
export {Filters};