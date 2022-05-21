import React, { useState, useEffect } from "react";
import List from "./List";
import Users from "./Users";

const Registration = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="registrathionPage">
      <List data={data} />
      <Users data={data} />
    </div>
  );
};

export default Registration;
