import React from "react";
import { useState, useEffect } from "react";

export const Users = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((e) => setData(e));
  });

  useEffect(() => {
    for (let i of data) {
      return setItem(i.name);
    }
    console.log(item);
  }, [data]);

  return (
    <div>
      <a> Users list</a>
      <p>{item}</p>
    </div>
  );
};
