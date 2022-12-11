import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header>
        <Title />
      </header>
      <div className='form-container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
