import {Student} from './EstudanteStyled'

function Estudante(props) {
  return (
    <div>
      <Student>
        <li>nome: {props.nome}</li>
        <li>idade: {props.idade}</li>
        <li>corDaRoupa:{props.corDaRoupa}</li>
        <li>criadoPor:{props.criadoPor}</li>
      </Student>
    </div>
  );
}

export default Estudante;
