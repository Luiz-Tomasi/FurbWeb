import './styles.css';
import React, { useState } from 'react';
import Card from '../../Components/Card';
import AxiosFurb from '../../../src/Service/axiosFurb'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cadastro2(props) {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  });

  const [data, setData] = useState(null);
  function getById(id) {
    AxiosFurb.getById(id).then((response) => {
      setData(response.data);
    })
      .catch((error) => {
        toast.error('Ocorreu um erro ao fazer a consulta.');
      })
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function deleteButton() {
    const id = data.id;

    AxiosFurb.deleteById(id)
      .then(response => {
        const { status, mensagem } = response.data;

        if (status === 'Ok') {
          toast.success(mensagem, { className: 'toast-success' });
        } else if (status === 'Erro') {
          toast.error(mensagem, { className: 'toast-error' });
        }
      })
      .catch(error => {
        console.error(error);
        toast.error('Ocorreu um erro ao fazer a exclusão.');
      });
  }

  function updateButton() {
    AxiosFurb.putById(formData)
      .then(response => {
        const { status, mensagem } = response.data;

        if (status === 'Ok') {
          toast.success(mensagem, { className: 'toast-success' });
        } else if (status === 'Erro') {
          toast.error(mensagem, { className: 'toast-error' });
        }
      })
      .catch(error => {
        console.error(error);
        toast.error('Ocorreu um erro ao fazer a inserção.');
      });
  }


  return (
    <div className="cadastroContainer">
      <label className='white'>User id: </label>
      <input type="text" onChange={(event) => getById(event.target.value)} />

      {data && (
        <div className='userData'>
          <p>ID: {data.id}</p>
          <p>Nome: {data.nome}</p>
          <p>Departamento: {data.departamento}</p>
          <p>Endereço: {data.endereco}</p>
          <p>Email: {data.email}</p>
          <button onClick={deleteButton}>Exclusão</button>
        </div>
      )}

      <form className='form'>
        <label>
          ID: 
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <label>
          Nome: 
          <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
        </label>
        <label>
          Departamento: 
          <input type="text" name="departamento" value={formData.departamento} onChange={handleInputChange} />
        </label>
        <label>
          Endereço: 
          <input type="text" name="endereco" value={formData.endereco} onChange={handleInputChange} />
        </label>
        <label>
          Email: 
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={updateButton}>Inserir</button>
      </form>
    </div>
  );
}


export default Cadastro2;
