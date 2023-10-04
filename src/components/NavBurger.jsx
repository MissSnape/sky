import React, {useState} from 'react';
import { NavMenu } from './NavMenu';

function NavBurger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <div className="nav__burger burger" onClick={toggleVisibility} >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && <NavMenu />}
    </>
  )
}

export {NavBurger};