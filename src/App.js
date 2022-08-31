import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';


function App() {
  return (
    <div className="App">
    <Pessoa nome= "Isaque" idade= "24" profissão= "MEI" estudando="Análise de Sistemas"/>
    </div>
  );
}

export default App;
