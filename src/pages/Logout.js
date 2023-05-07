import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    // Clear user data and redirect to home page
    // e.g., localStorage.removeItem('userData');
    history.push('/');
  }, [history]);

  return null;
}

export default Logout;