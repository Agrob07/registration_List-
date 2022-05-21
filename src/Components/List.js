import React from "react";
import { useState, useEffect } from "react";

const List = ({ data }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  function validator(e) {
    e.preventDefault();
    const validName = data.some((user) => user.name === userName);
    const validEmail = data.some((user) => user.email === userEmail);
    setIsValidName(validName);
    setIsValidEmail(validEmail);
    setUserName("")
    setUserEmail("")
  }

  return (
    <div className="wrapperForm">
      <form className="registrathionForm" onSubmit={(e) => validator(e)}>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          className={isValidName ? "validName" : "invalidName"}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="User email"
          value={userEmail}
          className={isValidEmail ? "validName" : "invalidName"}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <button> Sign in</button>
      </form>
    </div>
  );
};

export default List;
