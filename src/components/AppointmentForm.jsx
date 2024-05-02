import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useMedication } from "../context/medicineContext";

const AppointmentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { addSchedule } = useMedication();

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    addSchedule({ ...data, completed: false });
    console.log(data); // For demonstration, log the form data
    reset();
    navigate("/dashboard"); // Redirect to dashboard after form submission
  };

  return (
    <div className="health-checkup-scheduler min-h-screen text-white bg-white/10 flex flex-col items-center pt-24 px-9">
      <h2 className="text-3xl sm:text-5xl tracking-tighter font-bold py-12">
        Health Checkup Scheduler
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-y-5 rounded-lg sm:w-3/4 w-full lg:w-2/4"
      >
        <input
          type="text"
          name="checkupType"
          placeholder="Type of Checkup"
          {...register("checkupType")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <input
          type="date"
          name="scheduledDate"
          placeholder="Scheduled Date"
          {...register("scheduledDate")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <Button type="submit">Schedule Checkup</Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
