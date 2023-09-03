import React from 'react';
import './App.css'
// ルーティングのためのインポート
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimationComponent from './components/AnimationComponent';
import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';

function App() {
  return (
    <Router>
       <ErrorBoundary>
          <Routes>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={AnimationComponent} />
          </Routes>
        </ErrorBoundary> 
    </Router>
  );
}

export default App;

