import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import Contextc from "./Contextc";
import Contextc3 from "./Contextc3";
export const UserContext = createContext();

function Contextp() {
    const [user, setUser] = useState("silpa");
    

    return (
        <div>
             <UserContext.Provider value={user}>
      <h3>{`Hello ${user}!`}</h3>
      <Contextc></Contextc>
    </UserContext.Provider>
        </div>
    )
}

export default Contextp


