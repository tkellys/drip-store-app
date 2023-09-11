import { useState } from 'react'
import Cabecalho  from "./header/Cabecalho";
import { MenuCima } from './components/menu-lateral/MenuCima';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MenuCima>
   
    </MenuCima>
   <Cabecalho/>
    </>
  )
}

export default App
