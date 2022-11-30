import React from 'react'
import './App.css'
import Hello from './components/hello'



class App extends React.Component<{}, any> {
  public render() {
    return(
      <div>
        <Hello defaultName='World!' begin={1} />
      </div>
    )
  }
}

export default App
