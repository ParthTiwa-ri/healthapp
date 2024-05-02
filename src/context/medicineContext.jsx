/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const MedicationContext = createContext();

export const MedicationProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([
    {
      name: "Medicine A",
      dosage: "1 pill",
      frequency: "daily",
      schedule: "09:00",
    },
    {
      name: "Medicine B",
      dosage: "2 pills",
      frequency: "twice a day",
      schedule: "10:00, 18:00",
    },
  ]);
  const [weightData, setWeightData] = useState([]);

  const addMedicines = (newMedicines) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicines]);
  };

  return (
    <MedicationContext.Provider
      value={{ medicines, addMedicines, weightData, setWeightData }}
    >
      {children}
    </MedicationContext.Provider>
  );
};

export const useMedication = () => {
  const context = useContext(MedicationContext);
  if (!context) {
    throw new Error("useMedication must be used within a MedicationProvider");
  }
  return context;
};
