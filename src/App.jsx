import { useState, useEffect } from 'react'
import fs from 'fs'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [champs, setChamps] = useState([])

  console.log(fs)

  return ''

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://ddragon.leagueoflegends.com/cdn/15.15.1/data/en_US/champion.json').then(res => res.json())
  //     setChamps(Object.keys(res.data))
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const res = await fetch('https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Yunara.png')
  //     console.log({res})
  //   }
  //   // fetchImage()
  // })

  // return (
  //   <>
  //     {champs.map(champ => <img src={`https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/${champ}.png`}/>)}
  //   </>
      
  // )
}

export default App
