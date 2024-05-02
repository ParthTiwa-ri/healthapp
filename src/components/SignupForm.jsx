import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useMedication } from "../context/medicineContext";

const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { setUser } = useMedication();
  const handleFormSubmit = (data) => {
    setUser(data);
    // console.log(data);
    reset();
    navigate("/login");
  };

  return (
    <div className="signup-form min-h-screen text-white bg-white/10 flex flex-col items-center pt-24 px-9">
      <h2 className="text-3xl sm:text-5xl  tracking-tighter font-bold py-12">
        Sign Up
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-y-5 rounded-lg sm:w-3/4 w-full lg:w-2/4"
      >
        <input
          type="text"
          name="Name"
          placeholder="Full name"
          {...register("Name")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          {...register("age")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        />
        <select
          name="gender"
          {...register("gender")}
          className="w-full h-10 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 focus:ring-2 focus:bg-white/10"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          {...register("medicalHistory")}
          className="w-full h-32 rounded bg-white/[7%] outline-none ring-accent/50 transition text-white px-3 py-2 focus:ring-2 focus:bg-white/10"
        ></textarea>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
