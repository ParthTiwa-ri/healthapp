import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MedicationReminderForm from "./components/MedicationReminderForm";
import MedicineReminder from "./components/Dashboard";
import WeightTracker from "./components/WeightForm";
// import BarChartComponent from "./components/Barchart";

import AppointmentForm from "./components/AppointmentForm";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/meditionform" element={<MedicationReminderForm />} />
      <Route path="/dashboard" element={<MedicineReminder />} />
      <Route path="/weightform" element={<WeightTracker />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/appointment" element={<AppointmentForm />} />

      <Route path="test" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
