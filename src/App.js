// ********* Delight - Dentist Website is created by Zpunet ******************
// ********* If you get an error please contact us ******
// ******** Email:info@codemarketi.com *********
// ********* Website:www.codemarketi.com *********
// ********* Phone:+255 762 352 746 *********
// ********* Youtub Channel: https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w *********

// ******** Support my work with *********
// ********* https://www.patreon.com/zpunet *********
// ********* https://www.buymeacoffee.com/zpunet *********

// ********* This is the main component of the website *********

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import Dashboard from './pages/Dashboard';
import Toast from './components/Notifications/Toast';
import Patients from './pages/patients/Patients';
import Settings from './pages/Settings';
import PatientProfile from './pages/patients/PatientProfile';
import CreatePatient from './pages/patients/CreatePatient';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import NewReceta from './pages/patients/NewReceta';

function App() {
  Aos.init();

  return (
    <>
      {/* Toaster */}
      <Toast />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/preview/:id" element={<PatientProfile />} />
          <Route path="/patients/create" element={<CreatePatient />} />
          <Route path="/patients/visiting/:id" element={<NewReceta />} />
          {/* others */}
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
