import React from "react";
import Done from "./Done";
import Members from "./Members";
import ToDo from "./ToDo";

export default function Board() {
  return (
    <div>
      <ToDo />
      <br></br>
      <Members />
      |<Done />
    </div>
  );
}
