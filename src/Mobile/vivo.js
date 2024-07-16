import { Card } from "@mui/material";
import React from "react";
import { vivo } from "../atoms/mobile";

const Vivo = () => {
  const { model, ram, rom, processor, cost, screenWidth, battery } = vivo;
  const images = {
    url: "/assests/vivo.jpeg",
    title: "vivo",
  };
  const details = { model, ram, rom, processor, cost, screenWidth, battery };
  return (
    <div>
      <Card className="card">
        <img src={images.url} alt="vivo" />
        <div>
          {Object.entries(details).map(([key, value]) => (
            <p>
              {key} : {value}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Vivo;
