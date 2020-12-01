import React from "react";
import Done from "./done/Done";
import Members from "./members/Members";
import ToDo from "./todo/ToDo";

export default function Board() {
  return (
    <div>
      <ToDo />
      <br></br>
      <Members />
      <br></br>
      <Done />
    </div>
  );
}
