import { API } from "./lib/axios"
import { useState, useEffect } from 'react'

import { useNavigate, NavLink } from 'react-router-dom';

import styles from './Home.module.css'



export function Home() {

  const [area1, setArea1] = useState([])
  const [area2, setArea2] = useState([])
  const [area3, setArea3] = useState([])
  const [area4, setArea4] = useState([])
  const [area5, setArea5] = useState([])
  const [area6, setArea6] = useState([])
  const [area7, setArea7] = useState([])


  async function area1DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);

    setArea1(response.data)


  }

  async function area2DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);
    setArea2(response.data)
  }

  async function area3DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);
    setArea3(response.data)
  }

  async function area4DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);
    setArea4(response.data)
  }

  async function area5DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);
    setArea5(response.data)
  }

  async function area6DidMount(number: number) {

    const response = await API.get(`alocacao/${number}`);
    setArea6(response.data)
  }

  async function area7DidMount(number: number) {

    const response = await API.get(`alocacao/`);
    setArea7(response.data)
  }


  useEffect(() =>{
    area1DidMount(1)
    area2DidMount(2)
    area3DidMount(3)
    area4DidMount(4)
    area5DidMount(5)
    area6DidMount(6)
    area7DidMount(7)
  }, [])

  return (
    <div className={styles.container}>

      <NavLink
        to={area1.length ===  0 ? '/' : `automoveis/${1}` }
        
        className={styles.containerArea1}
        style={area1.length === 0 ? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          1
        </div>
      </NavLink>

      <NavLink
        to={area2.length ===  0? '/' : `automoveis/${2}` }
        
        className={styles.containerArea2}
        style={area2.length === 0 ? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          2
        </div>
      </NavLink>

      <NavLink
        to={area3.length ===  0? '/' : `automoveis/${3}` }
        
        className={styles.containerArea3}
        style={area3.length === 0 ? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          3
        </div>
      </NavLink>

      <NavLink
        to={area4.length ===  0? '/' : `automoveis/${4}` }
        
        className={styles.containerArea4}
        style={area4.length === 0 ? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          4
        </div>
      </NavLink>

      <NavLink
        to={area5.length ===  0? '/' : `automoveis/${5}` }
        
        className={styles.containerArea5}
        style={area5.length === 0? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          5
        </div>
      </NavLink>

      <NavLink
        to={area6.length ===  0? '/' : `automoveis/${6}` }
        
        className={styles.containerArea6}
        style={area6.length === 0? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          6
        </div>
      </NavLink>

      <NavLink
        to={area7.length ===  0? '/' : `automoveis/${7}` }
        
        className={styles.containerArea7}
        style={area7.length === 0 ? {backgroundColor:'#FFF'} : {backgroundColor: '#0000FF', color: '#FFF'}}
      >
        <div >
          7
        </div>
      </NavLink>

    </div>


  )
}
