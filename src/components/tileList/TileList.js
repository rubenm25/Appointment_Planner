import React from "react";

import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  // const tiles = props.contactArr ? props.contactArr.map((info, index) => <Tile info={info} key={index} />) : "shit";

  const contactTiles = props.contactArr?.map((info, index) => <Tile info={info} key={index} />);
  const appointmentTiles = props.appointmentsArr?.map((info, index) => <Tile info={info} key={index} />);

  return (
    <div>
      {contactTiles}
      {appointmentTiles}
    </div>
  );
};
