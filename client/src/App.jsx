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
  Patient,
  Welcome,
  PatientInfo,
  PatientHistory,
  Prescription
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
        <Route path='/doctor/' element={<Welcome />} />
        <Route path='/doctor/patient/info/:id' element={<PatientInfo />} />
        <Route path='/doctor/patient/history/:id' element={<PatientHistory />} />
        <Route path='/doctor/patient/prescription/:id' element={<Prescription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
