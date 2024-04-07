import { useContext, useEffect } from 'react';
import './App.scss';
import { Router } from './Routers/routers';
import { UserContext } from './context/Providercontext';
function App() {
  const { loginContext } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('resdata')) {
      loginContext(localStorage.getItem('email'), localStorage.getItem('resdata'));
    };
  }, [])
  return (
    <Router />
  );
}

export default App;
