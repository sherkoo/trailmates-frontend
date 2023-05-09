import React, { useState } from "react";
import "./calendar.css";

class CalendarClass {
  constructor() {
    this.months = 12;
    this.month = null;
    this.monthName = "";
    this.shortMonthName = "";
    this.longMonthDays = 31;
    this.shortMonthDays = 30;
    this.shortestMonthDays = 28;
    this.dayStart = 0;
    this.days = null;
    this.currentYear = new Date().getFullYear();
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth();
    this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    this.dayOfWeek = this.firstDayOfMonth.getDay();
  }

  handleShortMonthName = (name) => {
    return name.slice(0, 3);
  };

  handleDayClick = (day) => {
    alert(day);
  };

  handleShowAllDays = (days) => {
    const daysArray = Array.from(Array(days).keys());
    console.log(this.dayOfWeek);
    return (
      <div className="calendarContainer">
        <div className="weekdayContainer">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tues</div>
          <div>Wed</div>
          <div>Thur</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendarDayContainer">
          {daysArray.map((d, index) => (
            <div
              index={index}
              className={"calendarDay"}
              style={
                index === 0 ? { gridColumnStart: this.dayOfWeek + 1 } : null
              }
              onClick={() => this.handleDayClick(d + 1)}
            >
              <span className="calendarDaySpan">{d + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  showMonth(monthId) {
    switch (monthId) {
      case 0:
        this.monthName = "January";
        this.days = this.longMonthDays;
        break;
      case 1:
        this.monthName = "February";
        this.days = this.shortestMonthDays;
        break;
      case 2:
        this.monthName = "March";
        this.days = this.longMonthDays;
        break;
      case 3:
        this.monthName = "April";
        this.days = this.longMonthDays;
        break;
      case 4:
        this.monthName = "May";
        this.days = this.longMonthDays;
        break;
      case 5:
        this.monthName = "June";
        this.days = this.longMonthDays;
        break;
      case 6:
        this.monthName = "July";
        this.days = this.longMonthDays;
        break;
      case 7:
        this.monthName = "August";
        this.days = this.longMonthDays;
        break;
      case 8:
        this.monthName = "September";
        this.days = this.longMonthDays;
        break;
      case 9:
        this.monthName = "October";
        this.days = this.longMonthDays;
        break;
      case 10:
        this.monthName = "November";
        this.days = this.longMonthDays;
        break;
      case 11:
        this.monthName = "December";
        this.days = this.longMonthDays;
        break;
      default:
        this.monthName = "No month by this name";
        this.days = this.longMonthDays;
        break;
    }

    this.shortMonthName = this.handleShortMonthName(this.monthName);

    // return this.monthName + " - " + this.shortMonthName;
  }
}

const Calendar = () => {
  const calendar = new CalendarClass();
  const [currentMonth, setCurrentMonth] = useState(calendar.currentMonth);
  calendar.showMonth(currentMonth);

  return (
    <div>
      <h2>
        {calendar.monthName} - {calendar.shortMonthName} -{calendar.currentYear}
      </h2>
      {calendar.handleShowAllDays(calendar.days)}
    </div>
  );
};

export default Calendar;
