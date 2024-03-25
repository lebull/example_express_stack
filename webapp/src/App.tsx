import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [ message, setMessage ] = useState<string>();
  const [ loading, setLoading ] = useState<boolean>();
  // const [ error, setError ] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const headers = { headers: { "Authorization": "123"} };
        const result = await fetch("http://localhost:4000/", headers);
        const resultMessage = (await result.json()).message;
        setMessage(resultMessage);
      } catch {
        setMessage("Error");
      } finally {
        setLoading(false);
      }

    })()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { loading ? "Loading..." : message }
        </p>
      </header>
    </div>
  );
}

export default App;
