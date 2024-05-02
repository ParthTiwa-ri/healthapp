import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MedicationReminderForm from "./components/MedicationReminderForm";
import MedicineReminder from "./components/Dashboard";
import WeightTracker from "./components/WeightForm";
import BarChartComponent from "./components/Barchart";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/meditionform" element={<MedicationReminderForm />} />
      <Route path="/dashboard" element={<MedicineReminder />} />
      <Route path="/weightform" element={<WeightTracker />} />

      <Route path="test" element={<BarChartComponent />} />
    </Routes>
  );
}

export default App;
