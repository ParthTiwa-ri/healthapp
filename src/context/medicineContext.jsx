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
  const [weightData, setWeightData] = useState([
    {
      date: "2023-04-01",
      weight: 40,
    },
    {
      date: "2023-04-07",
      weight: 60,
    },
    {
      date: "2023-04-09",
      weight: 50,
    },
  ]);
  const [schedule, setSchedule] = useState([
    {
      checkupType: "Health checkup",
      scheduledDate: "2024-05-09",
      completed: false,
    },
  ]);

  const [user, setUser] = useState({
    Name: "John Doe",
    email: "john@gmail.com",
    password: "123",
    age: "20",
    gender: "male",
    medicalHistory:
      "I'm a 20-year-old male with allergies to penicillin, causing hives and breathing difficulties. I've had hypertension since 2010, managed with Lisinopril, and was diagnosed with type 2 diabetes mellitus in 2015, controlled with Metformin. I underwent an appendectomy in 2018. There's a family history of hypertension and diabetes on my father's side. This summary outlines key medical information for my ongoing care.",
  });

  const addSchedule = (newAppointment) => {
    setSchedule((prevAppointment) => [...prevAppointment, newAppointment]);
  };
  const addMedicines = (newMedicines) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicines]);
  };

  return (
    <MedicationContext.Provider
      value={{
        medicines,
        addMedicines,
        weightData,
        setWeightData,
        schedule,
        addSchedule,
        user,
        setUser,
      }}
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
