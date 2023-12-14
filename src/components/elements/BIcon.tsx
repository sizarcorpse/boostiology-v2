import dynamic from "next/dynamic";
import { ComponentType, FC } from "react";

export interface BIconProps {
  icon: string;
  className?: string;
}

export interface DynamicIcon {
  [key: string]: ComponentType<any>;
}

export const dynamicIcon: DynamicIcon = {
  BrainIcon: dynamic(() => import("@/components/svg/BrainIcon")),
  ChartLineIcon: dynamic(() => import("@/components/svg/ChartLineIcon")),
  CloudIcon: dynamic(() => import("@/components/svg/CloudIcon")),
  SendIcon: dynamic(() => import("@/components/svg/SendIcon")),
  ShareIcon: dynamic(() => import("@/components/svg/ShareIcon")),
  TargetIcon: dynamic(() => import("@/components/svg/TargetIcon")),
  RocketIcon: dynamic(() => import("@/components/svg/RocketIcon")),
  ArrowRightIcon: dynamic(() => import("@/components/svg/ArrowRightIcon")),
  ArrowLeftIcon: dynamic(() => import("@/components/svg/ArrowLeftIcon")),
  MonitorIcon: dynamic(() => import("@/components/svg/MonitorIcon")),
  OfferBgIcon: dynamic(() => import("@/components/svg/OfferBgIcon")),
  GitHubIcon: dynamic(() => import("@/components/svg/GitHubIcon")),
  TwitterIcon: dynamic(() => import("@/components/svg/TwitterIcon")),
  LinkedInIcon: dynamic(() => import("@/components/svg/LinkedInIcon")),
  MapPinIcon: dynamic(() => import("@/components/svg/MapPinIcon")),
  PhoneCallIcon: dynamic(() => import("@/components/svg/PhoneCallIcon")),
  MailIcon: dynamic(() => import("@/components/svg/MailIcon")),
};

const BIcon: FC<BIconProps> = ({ icon, className }) => {
  const Icon = dynamicIcon[icon];
  return <Icon className={className} />;
};

export default BIcon;
