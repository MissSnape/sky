import React from 'react';
import AppRoutes from './routes';
import { UserContext } from './context/usercontext';
import  { useState } from 'react';


const App = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      <AppRoutes />
    </UserContext.Provider>
  );
};

export default App;