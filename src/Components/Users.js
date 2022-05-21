import React from "react";


const Users = ({ data }) => {
  
 

  return (
    <div className="userslist">
      <select name="users" className="users">
      <option defaultValue hidden className="opt">User List</option>
        <optgroup label="Choose One"> 
      
          {data.map((e) => {
            return <option key={e.id}>{e.name}  {e.email}</option>;
          })}
        </optgroup>
      </select>
    </div>
  );
};

export default Users;
