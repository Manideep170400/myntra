import { Card } from "@mui/material";
import React from "react";
import { Iq } from "../atoms/mobile";

const IQ = () => {
  const { model, ram, rom, processor, cost, screenWidth, battery } = Iq;

  const images = {
    IQ: {
      url: "/assests/IQ.jpg",
      title: "IQ",
      width: "25px",
    },
  };
  const details = { model, ram, rom, processor, cost, screenWidth, battery };
  return (
    <div>
      <Card className="card p-r-2">
        <img src={images.IQ.url} alt="IQ" />
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

export default IQ;
