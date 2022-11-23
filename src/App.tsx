import { API } from "./lib/axios"
import { useEffect, useState } from 'react'
import { ListAutomoveis } from "./components/ListAutomoveis";


interface AlocacaoProps{
  id: number;
  area: number;
  quantidade: number;
  automovel: {
    id: number;
    modelo: string;
    preco: string;

  },
  concessionaria:{
    id: number;
    concessionaria: string;
  }
}
function App() {

  const [alocacao, setAlocacao] = useState<AlocacaoProps[ ]>([ ])
  const [clickCardArea, setClickCardArea] = useState(false)

  const [number, setNumber] = useState(Object);

  async function getAlocacao (){
    const response = await API.get(`/alocacao/${number}`);
    setAlocacao(response.data);
  }

  useEffect(() => {
    getAlocacao()
    
  }, [number])
  
  console.log(alocacao);
  
  return (
    <div>{/*  main */}

    <div>
     <button
      onClick={() =>  setNumber(1)}
     >1</button>
     <ListAutomoveis
      area={alocacao}
     />
    </div>

    <div>
     <button
      onClick={() => setNumber(2)}
     >2</button>
    </div>

    <div>
     <button
      onClick={() =>setNumber(3)}
     >3</button>
    </div>

    <div>
     <button
      onClick={() =>setNumber(4)}
     >4</button>
    </div>

    <div>
     <button
      onClick={() => setNumber(5)}
     >5</button>
    </div>

    <div>
     <button
      onClick={() =>setNumber(6)}
     >6</button>
    </div>

   
    </div>
  )
}

export default App
