/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useMedication } from "../context/medicineContext";
import { toast } from "react-toastify";
import LineChartComponent from "./Linechart";
import BarChartComponent from "./Barchart";
import { motion } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";

const MedicineReminder = () => {
  const { medicines } = useMedication();

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  useEffect(() => {
    async function run() {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Give personalized recommendation to reduce carbon footprint (in plane text no heading ) `;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
      } catch (error) {
        console.error("Error fetching recommendation data:", error);
      }
    }

    run();
  }, []);

  useEffect(() => {
    // Clear previous timeouts
    const timeoutIds = [];

    // Calculate reminder times and set up reminders
    medicines.forEach((medicine) => {
      const scheduleTimes = medicine.schedule
        .split(",")
        .map((time) => time.trim());
      scheduleTimes.forEach((time) => {
        const [hours, minutes] = time.split(":").map((num) => parseInt(num));
        const now = new Date();
        const reminderTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          hours,
          minutes
        );
        const timeDiff = reminderTime.getTime() - now.getTime();
        if (timeDiff > 0) {
          const timeoutId = setTimeout(() => {
            sendReminder(medicine.name, medicine.dosage);
          }, timeDiff);
          timeoutIds.push(timeoutId);
        }
      });
    });

    // Clean up previous timeouts
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [medicines]);

  const sendReminder = (name, dosage) => {
    // This function can be customized to send reminders in different ways,
    // such as displaying a notification or sending an email.

    toast(`It's time to take ${dosage} of ${name}`);
  };

  return (
    <div className="min-h-screen bg-white/[7%] px-10 py-10">
      <h2 className="text-3xl sm:text-5xl  md:text-6xl font-bold text-white">
        Welcome User
      </h2>
      <p className="text-xl text-white/70 py-8 sm:py-12">Your medicine are:</p>
      <section>
        <ul className="flex gap-9">
          {medicines.map((medicine) => (
            <MedicineCard key={medicine.name} medicine={medicine} />
          ))}
        </ul>
      </section>
      <section className="my-8">
        <h1 className="mb-8 text-white/75 font-semibold text-xl">
          Weight Tracking
        </h1>
        <div className="flex gap-x-8">
          <div className=" basis-1/2 p-4 pt-16 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
            <LineChartComponent />
          </div>
          <div className=" basis-1/2 p-4 pt-16 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
            <BarChartComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicineReminder;

function MedicineCard({ medicine }) {
  return (
    <motion.div className="w-[200px] rounded px-4 py-4 shadow-2xl bg-white/[80%] ">
      <p className="text-xl font-bold  mb-2">{medicine.name}</p>
      <div>
        <p className="text-sm mb-1">
          <span className="font-bold ">Dosage:</span> {medicine.dosage}
        </p>
        <p className="text-sm mb-1">
          <span className="font-bold">Frequency:</span> {medicine.frequency}
        </p>
        <p className="text-sm">
          <span className="font-bold">Schedule:</span>
        </p>
        <ul className="list-disc pl-5">
          {medicine.schedule.split(",").map((time) => (
            <li className="text-sm" key={time}>
              {time.trim()}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
