import { useState, type FC } from "react";
import IconButton from "@mui/material/IconButton";
import "./index.css";

interface CalendarProps {
  defaultValue: string;
  handleSingIn: Function;
}

const Calendar: FC<CalendarProps> = ({ defaultValue, handleSingIn }) => {
  const [date, setDate] = useState(new Date(defaultValue));
  console.log(date.toLocaleDateString());

  const weekList = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];

  const lastMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // 下月
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // 获取每个月有多少天
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 获取每个月第一天是星期几
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const DayBox: React.FC<{ item: any }> = ({ item }) => {
    let classText = "date-box";
    switch (item.status) {
      case -1:
        classText = "date-box";
        break;
      case 0:
        classText = "date-box wating-sign-in";
        break;
      case 1:
        classText = "date-box signed-in";
        break;
    }

    return (
      <div
        className={classText}
        onClick={() => {
          handleSingIn(item.point);
        }}
      >
        <div className="date-text">{item.dateText}</div>
        <div className="flex justify-center items-center">
          <img className="w-[10px] h-[10px] mx-auto" src={item.icon} alt="" />
          {item.status !== -1 ? (
            <div className="w-[13px] h-[12px] date-point">{item.point}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDays = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDays; i++) {
      days.push(
        <DayBox
          key={i}
          item={{
            status: -1,
            point: 10,
            dateText: i,
            icon: "/telegram-mini-app/images/earn/sad.svg"
          }}
        />
      );
    }

    for (let i = 1; i <= daysCount; i++) {
      // const handelClick = () => {
      //   const current = new Date(date.getFullYear(), date.getMonth(), i);
      //   setDate(current);
      //   props.onChange(current);
      // };

      if (i === date.getDate()) {
        days.push(
          <DayBox
            key={i}
            item={{
              status: 1,
              point: 10,
              dateText: i,
              icon: "/telegram-mini-app/images/earn/check.svg"
            }}
          />
        );
      } else {
        days.push(
          <DayBox
            key={i}
            item={{
              status: 0,
              point: 10,
              dateText: i,
              icon: "/telegram-mini-app/images/earn/coin.svg"
            }}
          />
        );
      }
    }

    return days;
  };

  return (
    <div className="calendar-warp">
      <div className="flex justify-start items-center">
        <IconButton onClick={lastMonth} aria-label="lastMonth">
          <img
            className="w-[10px] h-[10px]"
            src={"/images/earn/last-month.svg"}
            alt=""
          />
        </IconButton>
        <div className="date-text">
          {"Apr"} {date.getFullYear()}
        </div>
        <IconButton onClick={nextMonth} aria-label="nextMonth">
          <img
            className="w-[10px] h-[10px]"
            src={"/images/earn/next-month.svg"}
            alt=""
          />
        </IconButton>
      </div>
      <div className="line w-full"></div>
      <div className="calendar-body">
        <div className="w-full flex justify-around align-items">
          {weekList.map((item, index) => (
            <div className="day-text" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div className="day-warp w-full">{renderDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
