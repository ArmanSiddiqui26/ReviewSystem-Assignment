import React from "react";

const Card = () => {
  return (
    <div className="rounded-xl border p-3 ">
      <div className="flex flex-row justify-between">
        <p className="font-medium ">Username</p>
        <p className="">star</p>
      </div>
      <p>comment</p>
      <p className="text-sm">date</p>
    </div>
  );
};

export default Card;
