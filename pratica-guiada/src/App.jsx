import Turma from "./Componentes/Turma";
import styled from "styled-components";
import { GlobalStyled } from "./GlobalStyled";

const TextoVermelho = styled.p`
  color: red;
`

function App() {
  const responsavel = "João";
  const nomeDaTurma = "Ammal";

  function apresentarTurma() {
    alert(`Bom dia turma! ${nomeDaTurma}`);
  }

  return (
    <div className="App">
      <GlobalStyled />
      
      <Turma
        turma={nomeDaTurma}
        responsavel={responsavel}
        apresentar={apresentarTurma}
      />
    </div>
  );
}

export default App;
