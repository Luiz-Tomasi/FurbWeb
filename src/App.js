import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Funcionarios from './Content/Funcionarios';
import Home from './Content/Home';
import Cadastro2 from './Content/Cadastro';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const jsonHardCoded = [
    {
      "id": 1,
      "nome": "Alonzo Birden",
      "foto": "https://robohash.org/praesentiumomnisdolore.png?size=50x50&set=set1",
      "email": "abirden0@mac.com",
      "subobjeto": {
        "propriedade1": "Valor 1",
        "propriedade2": "Valor 2"
      }
    },
    {
      "id": 2,
      "nome": "Celle McKissack",
      "foto": "https://robohash.org/explicaboenimquo.png?size=50x50&set=set1",
      "email": "cmckissack1@zdnet.com",
      "subobjeto": {
        "propriedade1": "Valor 3",
        "propriedade2": "Valor 4"
      }
    },
    {
      "id": 3,
      "nome": "Clarisse Beveridge",
      "foto": "https://robohash.org/officiisconsequaturvoluptas.png?size=50x50&set=set1",
      "email": "cbeveridge2@statcounter.com",
      "subobjeto": {
        "propriedade1": "Valor 5",
        "propriedade2": "Valor 6"
      }
    },
    {
      "id": 4,
      "nome": "Donelle Mallen",
      "foto": "https://robohash.org/mollitiasedsunt.png?size=50x50&set=set1",
      "email": "dmallen3@go.com",
      "subobjeto": {
        "propriedade1": "Valor 7",
        "propriedade2": "Valor 8"
      }
    },
    {
      "id": 5,
      "nome": "Rufe Gunner",
      "foto": "https://robohash.org/possimusnihilnihil.png?size=50x50&set=set1",
      "email": "rgunner4@dyndns.org",
      "subobjeto": {
        "propriedade1": "Valor 9",
        "propriedade2": "Valor 10"
      }
    },
    {
      "id": 6,
      "nome": "Dulci Sueter",
      "foto": "https://robohash.org/quiscommodiullam.png?size=50x50&set=set1",
      "email": "dsueter5@slashdot.org",
      "subobjeto": {
        "propriedade1": "Valor 11",
        "propriedade2": "Valor 12"
      }
    },
    {
      "id": 7,
      "nome": "Ali Kingsbury",
      "foto": "https://robohash.org/optioestexercitationem.png?size=50x50&set=set1",
      "email": "akingsbury6@flavors.me",
      "subobjeto": {
        "propriedade1": "Valor 13",
        "propriedade2": "Valor 14"
      }
    },
    {
      "id": 8,
      "nome": "Loretta Mathevet",
      "foto": "https://robohash.org/dolorfacilisquia.png?size=50x50&set=set1",
      "email": "lmathevet7@imgur.com",
      "subobjeto": {
        "propriedade1": "Valor 15",
        "propriedade2": "Valor 16"
      }
    },
    {
      "id": 9,
      "nome": "Jacquenetta Abthorpe",
      "foto": "https://robohash.org/voluptatemtemporaveniam.png?size=50x50&set=set1",
      "email": "jabthorpe8@fema.gov",
      "subobjeto": {
        "propriedade1": "Valor 17",
        "propriedade2": "Valor 18"
      }
    },
    {
      "id": 10,
      "nome": "Bronnie Denis",
      "foto": "https://robohash.org/esteaquedolores.png?size=50x50&set=set1",
      "email": "bdenis9@dailymotion.com",
      "subobjeto": {
        "propriedade1": "Valor 19",
        "propriedade2": "Valor 20"
      }
    }]

  return (
    <div className="App">
      <Header></Header>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/funcionarios" element={<Funcionarios json={jsonHardCoded} />}/>
          <Route exact path="/cadastro2" element={<Cadastro2/>}/>
        </Routes>
        <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
