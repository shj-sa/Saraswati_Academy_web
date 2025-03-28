import React, { useState } from "react";
import Sidebar from "./Sidebar";

const initialSchedule = [
  { time: "9:00 AM - 10:00 AM", class: "Math - Grade 10" },
  { time: "10:00 AM - 11:00 AM", class: "Science - Grade 9" },
  { time: "11:00 AM - 12:00 PM", class: "English - Grade 8" },
  { time: "12:00 PM - 1:00 PM", class: "Break" },
  { time: "1:00 PM - 2:00 PM", class: "Physics - Grade 11" },
];

const Schedule = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">📅 Teacher's Schedule</h1>
        <div className="bg-white shadow-lg rounded-lg p-4">
          {schedule.map((slot, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b"
            >
              <span className="text-lg font-semibold">{slot.time}</span>
              <span className="text-gray-600">{slot.class}</span>
              <a
                href="https://url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Edit
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
