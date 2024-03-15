import { useContext, useEffect } from 'react';
import './App.scss';
import { Router } from './Routers/routers';
import { UserContext } from './context/Providercontext';
function App() {
  const { user, loginContext } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem('resdata')) {
      loginContext(localStorage.getItem('name'), localStorage.getItem('resdata'));
    }
  }, [])
  return (
    <Router />
  );
}

export default App;
