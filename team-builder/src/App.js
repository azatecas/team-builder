import React, { useState } from "react";
import ReactDOM from "react-dom";
import Team from "./components/FormContainer";
import TeamForm from "./components/Form";


function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "test",
      email: 'email'      
    }
  ]);

  const addNewTeam = param => {
    const newTeam = {
      //we need a unique id, we will use Date.now() JS method
      id: Date.now(),
      title: param.name,
      body: param.email
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div>
      <h1>My Teams</h1>
      <TeamForm addNewTeam={addNewTeam} />
      <Team team={team} />
    </div>
  );
}

export default App;
