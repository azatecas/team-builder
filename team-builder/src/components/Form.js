import React, { useState } from "react";

const TeamForm = props => {
 
  const [team, setTeam] = useState({
    name: "",
    email:""    
  });

  //onChange handler to control inputs
  const handleChanges = e => {
    //e.target.value is extracting the input from the form
    //...note is the state
    setTeam({ ...team, [e.target.name]: e.target.value });
    console.log('form.js',team);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "" , email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Name..."
        value={team.name}
      />

    <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="Email..."
        value={team.email}
      />
      
      <button type="submit">Add Team Members</button>
    </form>
  );
};

export default TeamForm;