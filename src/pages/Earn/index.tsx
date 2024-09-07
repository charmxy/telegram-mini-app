import type { FC } from "react";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
//import { useInitData } from "@telegram-apps/sdk-react";
import { formatNumberWithCommas } from "@/utils/common";
import Calendar from "@/components/Calendar";

import "./index.css";

interface WeekModel {
  id: number;
  title: string;
  dateText: string;
  status: number;
  icon: string;
  point: number;
}

export const EarnPage: FC = () => {
  const [value, setValue] = useState("1");
  const [open, setOpen] = useState(false);
  const [point, setPoint] = useState(0);
  //const initData = useInitData();

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<string>
  ) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSingIn = (val: React.SetStateAction<number>) => {
    setOpen(true);
    setPoint(val);
  };

  const weekList = [
    {
      id: 1,
      title: "Mon.",
      dateText: "20",
      status: -1,
      icon: "/telegram-mini-app/images/earn/sad.svg",
      point: 10
    },
    {
      id: 2,
      title: "Tue.",
      dateText: "21",
      status: -1,
      icon: "/telegram-mini-app/images/earn/sad.svg",
      point: 10
    },
    {
      id: 3,
      title: "Wed.",
      dateText: "22",
      status: 1,
      icon: "/telegram-mini-app/images/earn/check.svg",
      point: 10
    },
    {
      id: 4,
      title: "Thu.",
      dateText: "23",
      status: 1,
      icon: "/telegram-mini-app/images/earn/check.svg",
      point: 10
    },
    {
      id: 5,
      title: "Fri.",
      dateText: "24",
      status: 0,
      icon: "/telegram-mini-app/images/earn/coin.svg",
      point: 10
    },
    {
      id: 6,
      title: "Sat.",
      dateText: "25",
      status: 0,
      icon: "/telegram-mini-app/images/earn/coin.svg",
      point: 50
    },
    {
      id: 7,
      title: "Sun.",
      dateText: "26",
      status: 0,
      icon: "/telegram-mini-app/images/earn/coin.svg",
      point: 50
    }
  ];

  const taskList = [
    {
      id: 1,
      title: "Follow T2EARN on X",
      desc: "",
      status: 0,
      icon: "/telegram-mini-app/images/earn/twitter.svg",
      point: 5000
    },
    {
      id: 2,
      title: "Follow BitApple on X",
      desc: "",
      status: 0,
      icon: "/telegram-mini-app/images/earn/twitter.svg",
      point: 5000
    },
    {
      id: 3,
      title: "Join BitApple Channel",
      desc: "",
      status: 0,
      icon: "/telegram-mini-app/images/earn/telegram.svg",
      point: 5000
    },
    {
      id: 4,
      title: "Invite Your Friends",
      desc: "",
      status: 0,
      icon: "/telegram-mini-app/images/earn/invite.svg",
      point: 5000
    },
    {
      id: 5,
      title: "Invite Your Friends",
      desc: "",
      status: 0,
      icon: "/telegram-mini-app/images/earn/invite.svg",
      point: 5000
    }
  ];

  const DayBox: React.FC<{ item: WeekModel; index: number }> = ({
    item,
    index
  }) => {
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
      <div key={index}>
        <div className="day-text">{item.title}</div>
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
      </div>
    );
  };

  const TaskBox: React.FC<{ item: any; index: number }> = ({ item, index }) => {
    return (
      <ListItem className="task-item" key={index} component="div">
        <ListItemButton className="task-item-content">
          <img src={item.icon} alt="" />
          <div className="task-text">
            <div className="task-text-title">{item.title}</div>
            <div className="task-text-point">{`+ ${item.point} TTE`}</div>
          </div>
          <div className="task-go">
            <div className="task-go-text">Go</div>
          </div>
        </ListItemButton>
      </ListItem>
    );
  };

  const DialogBox: React.FC<{ singInPoint: number }> = ({ singInPoint }) => {
    return (
      <Dialog className="sign-in-dialog-box" onClose={handleClose} open={open}>
        <DialogTitle>
          <div className="dialog-header w-[217px] relative">
            Bonus
            <img
              className="w-[25px] h-[25px] absolute top-[-1px] right-[-3px]"
              src={"/telegram-mini-app/images/earn/close_btn.svg"}
              alt=""
              onClick={handleClose}
            />
          </div>
        </DialogTitle>
        <div className="dialog-content">Check-In Successfully！</div>
        <div className="flex justify-center items-center pt-[10px] pb-[20px]">
          <img
            className="w-[40px] h-[29px]"
            src={"/telegram-mini-app/images/earn/coin_img.svg"}
            alt=""
          />
          <span className="dialog-point">
            {formatNumberWithCommas(singInPoint)}
          </span>
        </div>
      </Dialog>
    );
  };

  return (
    <div className="main-container">
      <div className="w-full flex justify-between items-center">
        <div className="points-warp">
          <img
            className="w-[24px] h-[24px]"
            src={"/telegram-mini-app/images/earn/coins.svg"}
            alt=""
          />
          <div className="total-points-text">
            {formatNumberWithCommas(123645)}
          </div>
        </div>
        <div className="service-warp">
          <div className="service-text">T2EARN</div>
          <img
            className="w-[24px] h-[24px]"
            src={"/telegram-mini-app/images/earn/customer-service.svg"}
            alt=""
          />
        </div>
      </div>
      <div className="px-[24px] pt-[16px]">
        <div className="date-warp relative">
          <TabContext value={value}>
            <TabList className="date-tabs" onChange={handleChange}>
              <Tab
                className="date-tab"
                value="1"
                label={<div className="tab-text tab-border-bottom">Week</div>}
              />
              <Tab
                className="date-tab"
                value="2"
                label={<div className="tab-text tab-border-bottom">Month</div>}
              />
            </TabList>
            <TabPanel className="" value="1">
              <div className="week-text py-[10px] ">
                You haven't checked in today
              </div>
              <div className="w-[101px] h-[94px] absolute top-[0px] right-[0px] flex justify-center items-center bg-[url('/images/earn/check-bk-show.png')] bg-cover bg-center">
                <div className="check-in-text">
                  Check
                  <br />
                  In Now
                </div>
              </div>
              <div className="line w-full"></div>
              <div className="week-warp">
                {weekList.map((item, index) => (
                  <DayBox item={item} index={index} key={index} />
                ))}
              </div>
            </TabPanel>
            <TabPanel value="2" className="p-[12px 24px]">
              <div className="w-full pb-[12px]">
                <div className="month-text">
                  Well Done! Continuous Check-In{" "}
                </div>
                <div className="month-text">Can Get Higher Rewards!</div>
              </div>
              <div className="w-[101px] h-[94px] absolute top-[0px] right-[0px] flex justify-center items-center bg-[url('/images/earn/month-check-bk-show.png')] bg-cover bg-center">
                <div className="check-in-text">
                  Apr 28
                  <br />
                  2024
                </div>
              </div>

              <div className="week-warp">
                <Calendar
                  defaultValue={"2024-9-05"}
                  handleSingIn={handleSingIn}
                />
              </div>
            </TabPanel>
          </TabContext>
        </div>
        <div className="task-warp">
          <h3 className="task-title">Tasks</h3>
          {taskList.map((item, index) => (
            <TaskBox item={item} index={index} key={index} />
          ))}
        </div>
      </div>
      <DialogBox singInPoint={point} />
    </div>
  );
};
