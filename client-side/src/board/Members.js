import Member from "./Member";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { CardColumns } from "react-bootstrap";

export default function Members() {
  const myServerBaseURL = "http://localhost:3000";
  const [members, setMembers] = useState([]);

  const loadMembers = useCallback(async () => {
    const response = await axios.get(`${myServerBaseURL}/member`);
    const members = response.data;
    console.log(members);
    setMembers(members);
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  return (
    // <CardColumns>
    <div className="box-members">
      {members.map((member) => (
        <Member key={member._id} name={member.name} />
      ))}
    </div>
    // </CardColumns>
  );
}
