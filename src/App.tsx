
import { BrowserRouter } from 'react-router'
import AppRouter from './routes/appRouter'
import { Navbar } from './components/navbar/navbar'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Navbar/> 
      <AppRouter/>
    </BrowserRouter>
    </>
  )
}

export default App
