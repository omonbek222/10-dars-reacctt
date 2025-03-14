
import './App.css'
import AddEdit from './pages/AddEdit'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
     <div className='border'>
      <AddEdit/>
      <Home/>
      <Login/>
      <Register/>
     </div>
    </>
  )
}

export default App
