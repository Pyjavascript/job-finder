import {Start} from "./assets/main"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
function App() {
  useGSAP(() => {
   
  })
  return (
    <>
      <Start />
    </>
  )
}

export default App
