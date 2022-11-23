import Helloworld from './helloWorld';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const nomes = [
      'João',
      'Maria',
      'José',
      'Antônio',
      'Mariana',
      'Carla',
      'Juliana',
      'Paulo',
      'Anderson',
      'Aline',
    ];

    return (
      <div className='App'>
        <section className='hello-world-container'>
          <Helloworld />
          {nomes.map((nome) => (
            <p>Hello, {nome}</p>
          ))}
        </section>
      </div>
    );
  }
}

// function App() {
//   const nomes = ['João', 'Maria', 'José', 'Antônio', 'Mariana', 'Carla', 'Juliana', 'Paulo', 'Anderson', 'Aline']

//   return (
//     <div className="App">
//       <section className='hello-world-container'>
//         <h1>Hello, world!!!</h1>
//         {nomes.map((nome)=> <p>Hello, {nome}</p>)}
//       </section>
//     </div>
//   )
// }

export default App;
