import React, { type FC, useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { initUtils } from "@telegram-apps/sdk";

import { formatNumberWithCommas } from "@/utils/common";
import "./index.css";

export const CommunityPage: FC = () => {
  const [open, setOpen] = useState(false);
  const utils = initUtils();

  const handleClose = (_event: any, _reason: SnackbarCloseReason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setOpen(false);
  };

  const shareURLButton = () => {
    utils.shareURL("https://t.me/xyzly_bot", "Look! Some cool app here!");
  };

  const copyLinkButton = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://t.me/OfficialBananaBot/banana?startapp=referral=L7SUSL6"
      );
      setOpen(true);
      console.log("链接已复制到剪贴板");
      // 可以在这里添加UI反馈，例如显示复制成功的消息
    } catch (err) {
      console.error("复制链接到剪贴板失败:", err);
      // 可以在这里添加UI反馈，例如显示复制失败的消息
    }

    utils.readTextFromClipboard().then(data => {
      console.log("Clipboard data:", data);
      // Output: string or null
    });
  };

  const invitationList = [
    {
      id: 1,
      title: "Fixed Rewards",
      desc: "TTE/Person",
      icon: "/telegram-mini-app/images/community/coins.svg",
      income: "1000",
      total: 4500
    },
    {
      id: 2,
      title: "Direct Reward",
      desc: "from your invited",
      icon: "/telegram-mini-app/images/community/coins.svg",
      income: "16%",
      total: 1600
    },
    {
      id: 3,
      title: "Indirect Reward",
      desc: "from their invited",
      icon: "/telegram-mini-app/images/community/coins.svg",
      income: "8%",
      total: 800
    },
    {
      id: 4,
      title: "Invited Friends",
      desc: "More rewards to come!",
      icon: "/telegram-mini-app/images/community/friends.svg",
      income: "",
      total: 45
    }
  ];

  const InvitationCard: React.FC<{ item: any; index: number }> = ({ item }) => {
    return (
      <Card className="invitation-card h-[114px] flex flex-col items-center">
        <div className="w-full flex justify-center items-center">
          <img src={item.icon} alt="" />
          <div className="invitation-total-text">
            {formatNumberWithCommas(item.total)}
          </div>
        </div>
        <div className="invitation-title-text">{item.title}</div>
        <div className="invitation-desc-text">
          <span className="income-text"> {item.income}</span>
          <span className="desc-text"> {item.desc}</span>
        </div>
      </Card>
    );
  };

  return (
    <div className="main-container">
      <div className="w-full flex justify-between items-center">
        <div className="header-text">Community</div>
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
        <Card className="my-invitation-card h-[80px] flex justify-between items-center">
          <div className="w-full flex flex-col items-start">
            <div className="invitation-text">Invitation Rewards</div>
            <div className="invitation-text">(TTE)</div>
          </div>
          <div className="invitation-point-text">
            {formatNumberWithCommas(47400)}
          </div>
        </Card>

        <div className="invitation-warp py-[20px]">
          {invitationList.map((item, index) => (
            <InvitationCard item={item} index={index} key={index} />
          ))}
        </div>
        <div className="py-[50px]">
          <Button className="w-full invitation-btn" onClick={shareURLButton}>
            Share Invite Link
          </Button>
          <Button className="w-full invitation-btn" onClick={copyLinkButton}>
            Copy Invite Link
          </Button>
        </div>
      </div>

      <Snackbar
        className="snackbar-warp"
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <div className="snackbar-box w-[150px] h-[142px] flex flex-col justify-center items-center">
          <div className="snackbar-text">Copied</div>
          <div className="snackbar-text">Successfully</div>
        </div>
      </Snackbar>
    </div>
  );
};
