// Calendar.js
import React from "react";
import "./App.js";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./App.css";

function Calendar() {
  return (
    <div className="calendar-container">
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}

export default Calendar;
