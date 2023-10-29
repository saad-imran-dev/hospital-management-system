import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Departments, PatientList, Payment, RegisterPatient } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/opd/' element={<RegisterPatient />} />
        <Route path='/opd/department/' element={<Departments />} />
        <Route path='/opd/patientlist/' element={<PatientList />} />
        <Route path='/opd/payment/' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
