import { useState } from "react";
import { databases } from "../appwrite/AppWriteConfig";
import { REACT_APP_APPWRITE_DB, REACT_APP_ROL_COL } from "../appwrite/IDs";
import UserContext from "./userContext";

const UserState = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
