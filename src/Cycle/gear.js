import React from "react";
import { Card } from "@mui/material";
import { Cycle } from "../atoms/cycle";

const Gear = () => {
  const { price, model, capacity, seater } = Cycle.gear;
  const gearbicycle = {
    url: "/cycle/bicycle-gear.jpeg",
    title: "gear",
  };

  return (
    <div>
      <Card style={{ paddingLeft: "500px" }}>
        <img
          src={gearbicycle.url}
          alt={gearbicycle.title}
          style={{ width: "100%" }}
        />
        <p>Model: {model}</p>
        <p>Price: {price}</p>
        <p>Capacity: {capacity}</p>
        <p>Seater: {seater}</p>
      </Card>
    </div>
  );
};

export default Gear;
