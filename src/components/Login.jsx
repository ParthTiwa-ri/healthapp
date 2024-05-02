import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useMedication } from "../context/medicineContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { user } = useMedication();

  const handleFormSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      toast.success("Login Sucessfull");
      navigate("/dashboard");
      reset();
    } else {
      toast.error("Wrong details");
    }
  };

  return (
    <div className="login-form min-h-screen text-white bg-white/10 flex flex-col items-center pt-24 px-9">
      <h2 className="text-3xl sm:text-5xl tracking-tighter font-bold py-12">
        Log In
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-y-5 rounded-lg sm:w-3/4 w-full lg:w-2/4"
      >
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
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LoginForm;
