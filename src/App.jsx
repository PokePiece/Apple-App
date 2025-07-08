import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from './components/Model'
import { Link, Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
