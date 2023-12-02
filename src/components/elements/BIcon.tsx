import dynamic from "next/dynamic";
import { ComponentType, FC } from "react";

export type BIconType =
  | "ArrowRightIcon"
  | "ArrowLeftIcon"
  | "SendIcon"
  | "ChartLineIcon"
  | "TargetIcon"
  | "RocketIcon"
  | "BrainIcon"
  | "CloudIcon"
  | "MonitorIcon"
  | "OfferBgIcon";

interface BIconProps {
  icon: BIconType;
  className?: string;
}

const BIcon: FC<BIconProps> = ({ icon, className }) => {
  const Icon = dynamic(() =>
    import(`@/components/elements/BSvg`).then(
      (mod) => mod[icon] as ComponentType<React.SVGProps<SVGSVGElement>>
    )
  );
  return <Icon className={className} />;
};

export default BIcon;
