import { ReactNode } from "react";

interface InfoItemProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const InfoItem = ({ title, children, className }: InfoItemProps) => {
  return (
    <div className={`page-notice-info${className ? " " + className : ""}`}>
      <div className="item-title">{title}</div>
      {children}
    </div>
  );
};

export default InfoItem;
