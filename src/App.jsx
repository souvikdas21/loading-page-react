import React, { useState, useEffect } from 'react'
import Loading1 from './components/Loading1';
import Loading2 from './components/Loading2';
import Loading3 from './components/Loading3';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData('Data fetched from an API');
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="app">
      {loading ? <Loading1 /> : <h1>{data}</h1>}
    </div>
  );
};

export default App;
