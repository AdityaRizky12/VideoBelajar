import { BrowserRouter, Routes , Route } from 'react-router'
import Home from './home'
import Login from './login'
import Register from './register'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
