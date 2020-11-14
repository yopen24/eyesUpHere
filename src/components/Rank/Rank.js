import React from "react";

const Rank = ({name, entries}) => {
  if(entries === undefined){

    entries= 0;
  }
  return (
    <div>
      <div className="white f3">{ `${name}  your current score is...`}</div>  
      <div className="white f1">{ `# ${entries}`}</div>
    </div>
  );
};

export default Rank;
