import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataProvider } from './Contexts/ContextStore'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ToastContainer />
        <Layout />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
