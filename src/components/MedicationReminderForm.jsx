/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import { useMedication } from "../context/medicineContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const MedicationReminderForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addMedicines } = useMedication();
  const navigate = useNavigate();
  const handleFormSubmit = (data) => {
    addMedicines(data);
    reset();
    navigate("/dashboard");
  };
  return (
    <div className="medication-reminder-form min-h-screen text-white bg-white/10 flex flex-col items-center pt-24 px-9">
      <h2 className="text-3xl sm:text-5xl  tracking-tighter font-bold py-12">
        Add Medication
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-y-5 rounded-lg sm:w-3/4 w-full lg:w-2/4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
          className="w-full h-10 rounded  bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10  "
        />
        <input
          type="text"
          name="dosage"
          placeholder="Dosage"
          {...register("dosage")}
          className="w-full h-10 rounded  bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10 "
        />
        <input
          type="text"
          name="frequency"
          placeholder="Frequency"
          {...register("frequency")}
          className="w-full h-10 rounded  bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10 "
        />

        <input
          type="text"
          name="schedule"
          placeholder="Schedule (Example 10:00, 18:00)"
          {...register("schedule")}
          className="w-full h-10 rounded  bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <Button type="submit">Save Medication</Button>
      </form>
    </div>
  );
};

export default MedicationReminderForm;
