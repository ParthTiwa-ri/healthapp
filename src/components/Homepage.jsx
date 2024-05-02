import { Link } from "react-router-dom";
import Button from "../ui/Button";

const buttonData = [
  { name: "Register", path: "/register" },
  { name: "Login", path: "/Login" },
];

function Homepage() {
  return (
    <div className="min-h-screen bg-white/[7%] flex flex-col items-center pt-24 md:pt-56 ">
      <h1 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
        Welcome to Medication Adherence App
      </h1>
      <p className="text-white/60 py-9 ">
        This application helps you manage your medication schedule, stay on
        track with your health checkups, and maintain a healthy lifestyle.
      </p>
      <ul className="space-x-3  ">
        {buttonData.map((btn) => (
          <Link to={btn.path} key={btn.name}>
            <Button>{btn.name}</Button>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
