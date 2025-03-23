import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import CreateInvoice from './components/account/CreateInvoice.jsx'
import CreateBill from './components/account/Bill.jsx'
import PatientCRUD from './components/patients/Patient.jsx'
import DoctorCRUD from './components/doctors/Doctor.jsx'
import ServiceCRUD from './components/services/Service.jsx'
import DummyInvoice from './components/Invoice/DummyInvoice.jsx'
import Transaction from './components/account/Transaction.jsx'
import Journals from './components/account/Journals.jsx'
import TrialBalance from './components/account/TrialBalance.jsx'
import ChartOfAccounts from './components/account/ChartOfAccounts .jsx'


createRoot(document.getElementById('root')).render(

    <HashRouter>
      <Routes>
        <Route element={<MainPage/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/invoice' element={<DummyInvoice/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/journal' element={<Journals/>}/>
            <Route path='/CreateInvoice' element={<CreateInvoice/>}/>
            <Route path='/bill' element={<CreateBill/>}/>
            <Route path='/patient' element={<PatientCRUD/>}/>
            <Route path='/doctor' element={<DoctorCRUD/>}/>
            <Route path='/service' element={<ServiceCRUD/>}/>
            <Route path='/trialBalance' element={<TrialBalance/>}/>
            <Route path='/ChartOfAccounts' element={<ChartOfAccounts/>}/>
        </Route>
      </Routes>
    </HashRouter>
)
