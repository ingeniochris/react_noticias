import React, {Fragment, useState, useEffect} from 'react';

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {
  const [categori, setCategori]=useState('');
  const [noticias, setNoticias] = useState([]);

   useEffect(() => {
    const consultApi= async ()=>{
        const api = process.env.REACT_APP_APIKEY;
        const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categori}&apiKey=${api}`;

        const res = await(await fetch(url)).json();
        setNoticias(res.articles);
        
    };
    consultApi();
}, [categori]); 

  return (
    <Fragment>
      <Header title="Noticias React"></Header>
      <div className="container white">
        <Formulario
          setCategori={setCategori}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment> 
    
  );
}

export default App;
