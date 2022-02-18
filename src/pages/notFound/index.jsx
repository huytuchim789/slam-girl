import { useEffect } from 'react';
import { browserHistory } from '../../utils/history';

function NotFound({}) {
  useEffect(() => {
    browserHistory.push('/');
    return () => {};
  }, []);

  return null;
}

export default NotFound;
