import './App.css'
import AddUpdateForm from './components/AddUpdateForm'
import CustomerList from './components/CustomerList'
import { CustomerProvider } from './components/hooks/CustomerContext'

function App() {

  return (
    <>
      <CustomerProvider>
        <CustomerList />
        <AddUpdateForm />
      </CustomerProvider>
    </>
  )
}

export default App
