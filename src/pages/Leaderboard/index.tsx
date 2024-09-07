import React, { type FC, useState, useMemo } from "react";
import Card from "@mui/material/Card";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { useInitData, type User } from "@telegram-apps/sdk-react";
import { formatNumberWithCommas } from "@/utils/common";
import "./index.css";

export const LeaderboardPage: FC = () => {
  const [value, setValue] = useState("1");
  const initData = useInitData();

  const user = useMemo<User | undefined>(() => {
    return (initData && initData.user) || undefined;
  }, [initData]);

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<string>
  ) => {
    setValue(newValue);
  };

  const rankList = [
    {
      id: 1,
      nickname: "Fantasy",
      ranking: 1,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-001.png",
      point: 29986
    },
    {
      id: 2,
      nickname: "charm",
      ranking: 2,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-002.png",
      point: 29880
    },
    {
      id: 3,
      nickname: "ck jj",
      ranking: 3,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-003.png",
      point: 28502
    },
    {
      id: 4,
      nickname: "Do do",
      ranking: 4,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-004.png",
      point: 5000
    },
    {
      id: 5,
      nickname: "wwkkjs",
      ranking: 5,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-005.png",
      point: 3000
    },
    {
      id: 6,
      nickname: "ccds",
      ranking: 6,
      icon: "/telegram-mini-app/images/leaderboard/profile-picture-006.png",
      point: 2000
    }
  ];

  const RankCard: React.FC<{ item: any; index: number }> = ({
    item,
    index
  }) => {
    return (
      <Card
        className="rank-list-card h-[80px] my-[10px] flex justify-between items-center"
        key={index}
      >
        <div className="flex justify-start items-center">
          <img className="w-[48px] h-[48px]" src={item.icon} alt="" />
          <div className="rank-content w-full pl-[20px]">
            <div className="rank-text">{item.nickname}</div>
            <div className="rank-text">{`${formatNumberWithCommas(
              item.point
            )} TTE`}</div>
          </div>
        </div>
        <div className="rank-right">
          <div className="ranking-text">{item.ranking}</div>
        </div>
      </Card>
    );
  };

  return (
    <div className="main-container">
      <div className="w-full flex justify-between items-center">
        <div className="header-text">Leaderboard</div>
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
        <Card className="my-rank-card h-[104px] flex justify-between items-center">
          <div className="rank-left">
            <div className="w-full flex justify-start items-center py-[2px]">
              <img
                src={"/telegram-mini-app/images/leaderboard/coins.svg"}
                alt=""
              />
              <div className="my-ponit-text pl-[10px]">
                {formatNumberWithCommas(123567)}
              </div>
            </div>
            <div className="w-full flex justify-start items-center py-[4px]">
              <img
                src={"/telegram-mini-app/images/leaderboard/ranking-star.svg"}
                alt=""
              />
              <div className="my-rank-text pl-[10px]">NO.4423</div>
            </div>
          </div>
          <div className="rank-right">
            <img
              className="w-[36px] h-[36px]"
              src={"/telegram-mini-app/images/leaderboard/my-head-picture.png"}
              alt=""
            />
            <div className="my-rank-text pt-[12px]">{user?.username}</div>
          </div>
        </Card>

        <div className="rank-warp pt-[24px]">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "#FFBF6A4D" }}>
              <TabList
                className="rank-tabs"
                variant="fullWidth"
                onChange={handleChange}
              >
                <Tab
                  className="rank-tab"
                  value="1"
                  label={
                    <div className="tab-text tab-border-bottom">Total</div>
                  }
                />
                <Tab
                  className="rank-tab"
                  value="2"
                  label={
                    <div className="tab-text tab-border-bottom">Daily</div>
                  }
                />
                <Tab
                  className="rank-tab"
                  value="3"
                  label={
                    <div className="tab-text tab-border-bottom">Weekly</div>
                  }
                />
                <Tab
                  className="rank-tab"
                  value="4"
                  label={
                    <div className="tab-text tab-border-bottom">Monthly</div>
                  }
                />
              </TabList>
            </Box>
            <TabPanel value="1" className="rank-tabpanel">
              <div className="top-three-warp mt-[30px] mb-[20px]">
                <div className="top-two-box relative">
                  <div className="nickname-text text-[#759CB8]">
                    {rankList[1].nickname}
                  </div>
                  <div className="point-text">
                    {formatNumberWithCommas(rankList[1].point)}
                  </div>
                  <img
                    className="w-[48px] h-[48px] absolute top-[-24px]"
                    src={rankList[1].icon}
                    alt=""
                  />
                  <img
                    className="w-[19px] h-[19px] absolute top-[-32px] right-[16px]"
                    src={"/telegram-mini-app/images/leaderboard/runner-up.svg"}
                    alt=""
                  />
                </div>
                <div className="top-one-box relative">
                  <div className="nickname-text text-[#E25536]">
                    {rankList[0].nickname}
                  </div>
                  <div className="point-text">
                    {formatNumberWithCommas(rankList[0].point)}
                  </div>
                  <img
                    className="w-[48px] h-[48px] absolute top-[-24px]"
                    src={rankList[0].icon}
                    alt=""
                  />
                  <img
                    className="w-[19px] h-[19px] absolute top-[-32px] right-[16px]"
                    src={"/telegram-mini-app/images/leaderboard/champion.svg"}
                    alt=""
                  />
                </div>
                <div className="top-three-box relative">
                  <div className="nickname-text text-[#D77707]">
                    {rankList[2].nickname}
                  </div>
                  <div className="point-text">
                    {formatNumberWithCommas(rankList[2].point)}
                  </div>
                  <img
                    className="w-[48px] h-[48px] absolute top-[-24px]"
                    src={rankList[2].icon}
                    alt=""
                  />
                  <img
                    className="w-[19px] h-[19px] absolute top-[-32px] right-[16px]"
                    src={
                      "/telegram-mini-app/images/leaderboard/second-runner-up.svg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="rank-list-warp">
                {rankList.map((item, index) => (
                  <RankCard item={item} index={index} key={index} />
                ))}
              </div>
            </TabPanel>
            <TabPanel value="2"></TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  );
};
