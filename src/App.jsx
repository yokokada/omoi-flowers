import React from 'react';
import './App.css'
import AnimationComponent from './components/AnimationComponent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AnimationComponent />
    </ErrorBoundary>
  );
}

export default App;

