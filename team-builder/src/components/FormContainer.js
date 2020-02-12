import React from 'react';
import TeamForm from './Form';

const Team = props => {
    return (
      <div >
        {props.team.map(team => (
          <div key={team.id}>
            <h2>{team.name}</h2>
            <p>{team.email}</p>
            <p>{team.role}</p>            
          </div>
        ))}
      </div>
    );
  };
  
  export default Team;
  