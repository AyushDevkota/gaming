import React from "react";
import { HOME_LIVE_STREAMS } from "../../public/constant";
import { Card } from "../Reusable";

const watchLive = () => {
  return (
    <>
      <h2 className="mb-4">Live Stream</h2>
      <div className="grid grid-cols-2 gap-24">
        <Card data={HOME_LIVE_STREAMS[0]} />
        <Card data={HOME_LIVE_STREAMS[1]} />
      </div>
    </>
  );
};

export default watchLive;
