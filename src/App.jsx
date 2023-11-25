import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import TicTacToe from './TicTacToe';
import Api from './Api';
import './css/App.css';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/CS2250-HW6/");
  }, [navigate]);

  return (
    <Router>
      <div>
        <nav>
          <div className="name">Ethan Jacinto</div>
          <Link to="/CS2250-HW6/">Home Page</Link>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
          <Link to="/api-consumption">API Consumption</Link>
        </nav>
        <article className="component-container">
          <Routes>
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/api-consumption" element={<Api />} />
            <Route path="/CS2250-HW6/" element={<HomePage />} />
          </Routes>
        </article>
      </div>
    </Router>
  )
}

export default App;