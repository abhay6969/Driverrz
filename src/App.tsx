
import { BrowserRouter } from 'react-router'
import AppRouter from './routes/appRouter'
import { Navbar } from './components/navbar/navbar'


function App() {

  return (
    <>
    
    <BrowserRouter>
      <Navbar/> 
      <AppRouter/>
    </BrowserRouter>
    </>
  )
}

export default App
