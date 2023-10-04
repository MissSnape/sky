import React, {useState} from "react";
import { Ganre } from "./filterByGanre";
import { ByArtist } from "./filterByArtist";
import { ByOfYearOfRelease } from "./ByYearOfRelease";



function Filters(){
    const [filter, setVisible] = useState(null);
    const toggleVisibility = (name) => setVisible(name);

return(
    <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>

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
  </div>
)
}
export {Filters};