import React from "react";

function Student(props) {
  let greets = "Hello mam";
  let solve = "thank you senior";

  return (
    <div style={{ backgroundColor: "cyan", width: "300px", height: "300px" }}>
      <h2>This is Student</h2>

      {props.greet}
    </div>
  );
}

export default Student;
