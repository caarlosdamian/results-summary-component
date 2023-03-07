import React from "react";
import { reaction } from "../../images";
import "./Stats.scss";

interface statsI {
  label: string;
  className: string;
  img: string;
  amount: string;
}

export const Stats = ({ className, img, label, amount }: statsI) => {
  return (
    <div className={`stats ${className}`}>
      <div className="stats__left">
        <img src={img} alt={label} />
        <h3 className="stats__left--header">{label}</h3>
      </div>
      <div className="stats__right">
        <span className="stats__right--header">
          {amount}
          <strong> / 100</strong>
        </span>
      </div>
    </div>
  );
};
