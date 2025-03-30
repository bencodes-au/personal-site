import React from "react";

export const DisplayCard = ({ image, title, children, actions }) => {
  return (
    <div className="w-full h-min flex gap-3 p-9">
      <div className="[writing-mode:sideways-lr] font-black text-4xl p-3 text-right">
        {title}
      </div>
      <div className="">{children}</div>
      <div className="flex flex-col gap-3  max-w-1/3 min-w-1/3">
        <div className="w-full">{image}</div>
        {actions}
      </div>
    </div>
  );
};
