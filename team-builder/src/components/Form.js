import React, { useState } from "react";

const TeamForm = props => {
 
  const [team, setTeam] = useState({
    title: "",
    email:""
    
  });

  //onChange handler to control inputs
  const handleChanges = e => {
    //e.target.value is extracting the input from the form
    //...note is the state
    setTeam({ ...team, [e.target.name]: e.target.value });
    console.log(team);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam({ title: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Note Title</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        placeholder="Title..."
        value={team.title}
      />
      
      <button type="submit">Add Note</button>
    </form>
  );
};

export default TeamForm;