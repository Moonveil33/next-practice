import React, { useState } from "react";
import homesDb from "@/data/db.json";
import HomeCard from "@/components/modules/HomeCard";

function Homes() {
  const [homes] = useState([...homesDb.homes]);

  console.log(homes);

  return (
    <div className="homes">
      {homes.map((home) => (
        <HomeCard key={home.id} {...home} />
      ))}
    </div>
  );
}

export default Homes;
