import './styles.css';
import Card from '../../Components/Card';

function Funcionarios(props) {
    return (
      <div className="funcionariosContainer">
        {props.json.map((object) => (
          <Card
            imgUrl={object.foto}
            name={object.nome}
            propriedade1={object.subobjeto.propriedade1}
            propriedade2={object.subobjeto.propriedade2}
            email={object.email}
            key={object.id} // Adicione uma chave única para cada elemento renderizado
          />
        ))}
      </div>
    );
  }


export default Funcionarios;
