import './App.css';
import HelloWord from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {

  const nome = "Java Senior"

  return (
    <div className="App">
      <HelloWord />
      <SayMyName nome="DevOps Junior" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Web Developer" 
        idade="25" 
        profissao="Desempregado" 
        foto="https://via.placeholder.com/150"  
      />
    </div>
  );
}

export default App;
