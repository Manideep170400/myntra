import { Card } from "@mui/material";
import React from "react";
import { Cycle } from "../atoms/cycle";

const Altas = () => {
  const { price, model, capacity, seater } = Cycle.altas;
  const Altasbicycle = {
    url: "/cycle/bicycle-altas.jpg",
    title: "Altas",
  };
  const details = { price, model, capacity, seater };

  return (
    <div>
      <Card>
        <img src={Altasbicycle.url} alt="altas" style={{ width: "25%" }} />
        {Object.entries(details).map(([key, value], index) => (
          <p key={index}>
            {key}: {value}
          </p>
        ))}
      </Card>
    </div>
  );
};

export default Altas;
