import React from "react";


function Character(props) {
  const { name } = props;


  return (
    <div>
      <p>
      {name}
      </p>
    </div>
  );
}

export default Character;
