import React, { useState } from "react";
import { addOwnerUser } from "../../../services/ownerService";
import "./css/addingOInfo.css";

export const OwnerUserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOwnerToAdd = { fullName, cellPhone, email };
    if (fullName === "" || cellPhone === "" || email === "") {
      alert("Please enter all required");
    } else {
      console.log(newOwnerToAdd);
      addOwnerUser(newOwnerToAdd);
      alert("we recive your comment, thanks for it");
      //   setFullName("");
      //   setPhone("");
      //   setEmail("");
      //   setOwnerId("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formOInfo">
      <h1>Please fill in you details</h1>

      <div className="form-group">
        <label className="formLbl" htmlFor="name">
          Owner Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="formLbl" htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="formLbl" htmlFor="phone">
          Phone Number:
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={cellPhone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
