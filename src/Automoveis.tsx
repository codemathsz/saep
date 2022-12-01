import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import styles from './Automoveis.module.css'

import { API } from './lib/axios';

type AlocacaoProps = {
  id: number;
  area: number;
  quantidade: number;
  automovel: {
    id: number;
    modelo: string;
    preco: string;

  },
  concessionaria: {
    id: number;
    concessionaria: string;
  }
}

export function Automoveis() {

  const navigate = useNavigate()

  const [veiculosFromArea, setVeiculosFromArea] = useState<AlocacaoProps[]>([])

  const idArea = useParams()

  async function getVeiculosFromArea(id: any) {

    try {

      const response = await API.get(`alocacao/${id}`);


      setVeiculosFromArea(response.data)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getVeiculosFromArea(idArea.id)
  }, [])

  console.log('Data:  ', veiculosFromArea.map((item) => item.automovel.modelo));

  return (

    <div className={styles.container}>{/*  main */}

      <div className={styles.containerHeader}>
        <button onClick={() => navigate("/")}>
          X
        </button>
      </div>
      <ul>
        <thead>
         <p>{`Área ${idArea.id}`}</p>
        </thead>

        <>
        {
          veiculosFromArea.map((item) => {
            return (
              <tr key={item.id} className={styles.contentInfoVeiculo}>
                <td>{item.automovel.modelo}</td>
                <td>{item.automovel.preco}</td>
                <td><button onClick={() => navigate(`/vender/${item.automovel.id}`)}>VENDER</button></td>
              </tr>
            );
          })
        }
        </>
      </ul>
    </div>
  )
}
