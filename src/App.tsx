import { Button } from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello NLW#4</h1>
       <Button color="red"/>
       <Button color="blue"/>
       <Button color="gree">Botão children</Button>
      </header>
    </div>
  );
}

export default App;
