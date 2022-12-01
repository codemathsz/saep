import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from './lib/axios'

import styles from './Vender.module.css'

type Automovel = {
    id: number
    modelo: string
    preco : string
}


type Cliente ={
    id: number
    nome: string
}

type Concessionaria ={
    id: number
    concessionaria: string
}
export function Vender() {

    const [veiculo, setVeiculo] = useState()
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [concessionaria, setConcessionaria] = useState<Concessionaria[]>([])

    const navigate = useNavigate()

    const idVeiculo = useParams()

    async function veiculoFindById(id: any) {
        try {

            const response = await API.get(`/automovel/${id}`)

            setVeiculo(response.data.modelo)
        } catch (error) {
            return `erro ao buscar veiculo por id, ${error}`
        }
    }

    async function clientesDidMount() {
        
        try {

            const response = await API.get(`/clientes`);
            setClientes(response.data)
            
        } catch (error) {
            return `erro ao busca clientes, ${error}`
        }
    }

    async function concessionariaDidMount() {
        
        try {

            const response = await API.get(`/concessionaria`);
            setConcessionaria(response.data)
            
        } catch (error) {
            return `erro ao busca concessionarias, ${error}`
        }
    }

    async function  vender(id: any) {
        
        try {

            const response = await API.delete(`/automovel/${id}`)

        } catch (error) {
            return `erro ao vender automovel, ${error}`
        }
    }


    useEffect(() => {
        veiculoFindById(idVeiculo.id)
        clientesDidMount()
        concessionariaDidMount()
    }, [])

    console.log(concessionaria);
    

    return (
        <div className={styles.container}>{/*  main */}

            <div className={styles.containerHeader}>
                <button onClick={() => navigate(-1)}>
                    X
                </button>
            </div>

            <div className={styles.infoVeiculo}>
                <p>{veiculo}</p>
            </div>

            <div className={styles.contentClientes}>
                <h2>Clientes:</h2>
                
                <select name='clientes' className={styles.clientes} >
                    {
                        clientes.map((cliente) => (
                            <option key={cliente.id} value={cliente.nome}>{cliente.nome}</option>
                        ))
                    }
                </select>
            </div>

            <div className={styles.contentClientes}>
                <h2>Concessionária:</h2>
                
                <select name='concessionaria' className={styles.clientes} >
                    {
                        concessionaria.map((concessionaria) => (
                            <option key={concessionaria.id} value={concessionaria.concessionaria}>{concessionaria.concessionaria}</option>
                        ))
                    }
                </select>
            </div>

            <div className={styles.button}><button onClick={() => vender(idVeiculo.id)}>Confirmar</button></div>
        </div>

    )
}
