import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Departments,
  Homepage,
  PatientList,
  Payment,
  RegisterPatient,
  LoginEmployee,
  DepartmentInfo,
  DoctorInfo,
  Patient
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/emp/login' element={<LoginEmployee />} />
        <Route path='/opd/' element={<RegisterPatient />} />
        <Route path='/opd/department/' element={<Departments />} />
        <Route path='/opd/department/:name' element={<DepartmentInfo />} />
        <Route path='/opd/doctor/:id' element={<DoctorInfo />} />
        <Route path='/opd/patient/' element={<PatientList />} />
        <Route path='/opd/patient/:cnic' element={<Patient />} />
        <Route path='/opd/payment/' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
