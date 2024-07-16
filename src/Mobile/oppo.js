import { Card } from "@mui/material";
import React from "react";
import { oppo } from "../atoms/mobile";

const Oppo = () => {
  const { model, ram, rom, processor, cost, screenWidth, battery } = oppo;
  const images = [
    {
      oppo: {
        url: "/assests/oppo.webp",
        title: "oppo",
      },
    },
  ];
  const details = { model, ram, rom, processor, cost, screenWidth, battery };

  return (
    <div>
      <Card className="card">
        <img src={images[0].oppo.url} alt="oppo" />
        <div>
          {Object.entries(details).map(([key, value]) => (
            <p>
              {key}: {value}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Oppo;
