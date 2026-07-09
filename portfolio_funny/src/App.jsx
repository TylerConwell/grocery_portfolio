import { useState } from 'react'
import resume  from './assets/figma_resume_template.png'
import vscode from './assets/vscode_figma_template.png'
import vista_tyler from './assets/background_link_tyler.png'
import './App.css'

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true);
    }, 1000);
    return() => clearTimeout(timer);
  }, []);






  return (
    <>









   
    </>
  )
}

export default App
