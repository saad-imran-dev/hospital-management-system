import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Departments,
  Homepage,
  PatientList,
  Doctordashboard,
  Writeprescription,
  Seepatienthistory,
  Payment,
  RegisterPatient,
  LoginEmployee,
  DepartmentInfo,
  DoctorInfo,
  Patient,
  Patientlog,
  Patientappoint,
  Patienthistory,
  Patientboard,
  Patientprescript,
  About,
  Doctorpage,
  PatientSignUp,
  DoctorLogin,
  LoginOpd
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Aboutus' element={<About />} />
        <Route path='/doctorpage' element={<Doctorpage />} />
        <Route path='/emp/login' element={<LoginEmployee />} />
        <Route path='/opd/' element={<LoginOpd />} />
        <Route path='/opd/register' element={<RegisterPatient />} />
        <Route path='/opd/department/' element={<Departments />} />
        <Route path='/opd/department/:name' element={<DepartmentInfo />} />
        <Route path='/opd/doctor/:id' element={<DoctorInfo />} />
        <Route path='/opd/patient/' element={<PatientList />} />
        <Route path='/opd/patient/:cnic' element={<Patient />} />
        <Route path='/opd/payment/' element={<Payment />} />
        <Route path='/patient/login' element={<Patientlog />} />
        <Route path='/patient/history' element={<Patienthistory />} />
        <Route path='/patient/dashboard' element={<Patientboard />} />
        <Route path='/patient/prescription' element={<Patientprescript />} />
        <Route path='/patient/appointment' element={<Patientappoint />} />
        <Route path='/patient/signup' element={<PatientSignUp />} />
        <Route path='/doctor/dashboard' element={<Doctordashboard />} />
        <Route path='/doctor/writeprescription' element={<Writeprescription />} />
        <Route path='/doctor/Seepatienthistory' element={<Seepatienthistory />} />
        <Route path='/doctor/login' element={<DoctorLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
