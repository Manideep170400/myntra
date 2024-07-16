import React from "react";
import { Card } from "@mui/material";
import { Cycle } from "../atoms/cycle";

const Gear = () => {
  const { price, capacity, seater, model } = Cycle.gear;
  const gearbicycle = {
    url: "/public/cycle/bicycle-gear.jpeg",
    title: "gear",
  };

  return (
    <div>
      <Card style={{ width: "25%" }}>
        <img
          src={gearbicycle.url}
          alt={gearbicycle.title}
          style={{ width: "100%", height: "auto" }}
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
