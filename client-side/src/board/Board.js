import React from "react";
import Done from "./Done";
import Members from "./Members";
import ToDo from "./ToDo";

export default function Board() {
  return (
    <div dir="rtl">
      <ToDo dir="rtl" />
      <br></br>
      <Members dir="rtl" />
      |<Done dir="rtl" />
    </div>
  );
}
