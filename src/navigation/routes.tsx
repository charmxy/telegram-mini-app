import type { ComponentType, JSX } from "react";
import { InitDataPage } from "@/pages/InitDataPage/InitDataPage";
import { EarnPage } from "@/pages/Earn/index";
import { LeaderboardPage } from "@/pages/Leaderboard/index";
import { CommunityPage } from "@/pages/Community/index";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: EarnPage },
  { path: "/init-data", Component: InitDataPage, title: "Init Data" },
  { path: "/earn", Component: EarnPage, title: "Earn" },
  { path: "/leaderboard", Component: LeaderboardPage, title: "Leaderboard" },
  { path: "/community", Component: CommunityPage, title: "Community" }
];
