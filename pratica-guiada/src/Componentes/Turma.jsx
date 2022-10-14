import Estudante from "./Estudante";
import {Button, Main} from './TurmaStyled';

function Turma(props) {
  return (
    <Main>
      <h1>Turma {props.turma}</h1>
      <h4>Responsável:{props.responsavel}</h4>
      <Button onClick={props.apresentar}>Apresentar</Button>

      <Estudante
        nome={"Clarinha"}
        idade={40}
        corDaRoupa={"preta"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Marcelo"}
        idade={25}
        corDaRoupa={"azul"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Luiz"}
        idade={18}
        corDaRoupa={"verde"}
        criadoPor={props.responsavel}
      />
      <Estudante
        nome={"Muri"}
        idade={39}
        corDaRoupa={"amarelo"}
        criadoPor={props.responsavel}
      />
    </Main>
  );
}

export default Turma;
