import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const scheduleTemplate = [
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const initialSchedule = {
  "3:00 PM": { subject: "Math", grade: "Grade 10" },
  "4:00 PM": { subject: "Science", grade: "Grade 9" },
  "5:00 PM": { subject: "English", grade: "Grade 8" },
  "6:00 PM": { subject: "Break", grade: "" },
  "7:00 PM": { subject: "Physics", grade: "Grade 11" },
};

class ScheduleManager {
  constructor(schedule) {
    this.schedule = schedule;
  }

  reschedule(fromTime, toTime) {
    const updatedSchedule = { ...this.schedule };
    [updatedSchedule[toTime], updatedSchedule[fromTime]] = [
      updatedSchedule[fromTime],
      updatedSchedule[toTime],
    ];
    return updatedSchedule;
  }
}

const ScheduleItem = ({ time, subject, grade, moveItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "scheduleItem",
    item: { time, subject, grade },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "scheduleItem",
    drop: (draggedItem) => moveItem(draggedItem.time, time),
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-3 border-b border-gray-300 transition ${
        isDragging ? "opacity-50" : "hover:bg-gray-200"
      } bg-gray-50 flex justify-between items-center text-sm md:text-base lg:text-lg`}
    >
      <span className="font-semibold text-gray-700">{time}</span>
      <div className="text-gray-600">
        <span className="block font-medium">{subject || "-"}</span>
        <span className="text-xs text-gray-500">{grade}</span>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [schedule, setSchedule] = useState(initialSchedule);

  const moveItem = (fromTime, toTime) => {
    const scheduleManager = new ScheduleManager(schedule);
    setSchedule(scheduleManager.reschedule(fromTime, toTime));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-2 md:p-4 lg:p-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
            📅 Teacher's Schedule
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-3 md:p-4 lg:p-6">
            <div className="flex flex-col divide-y divide-gray-300">
              {scheduleTemplate.map((time) => (
                <ScheduleItem
                  key={time}
                  time={time}
                  subject={schedule[time]?.subject || ""}
                  grade={schedule[time]?.grade || ""}
                  moveItem={moveItem}
                />
              ))}
            </div>
            <div className="mt-4 text-right">
              <a
                href="https://url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-semibold text-sm md:text-base"
              >
                ✏️ Edit Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Schedule;
