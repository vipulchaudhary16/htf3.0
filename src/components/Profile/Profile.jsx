import React, { useEffect, useState } from "react";
import { account } from "../../appwrite/AppWriteConfig";

export default function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = account.get();
    getData
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div>
      {user ? (
        <h1 className="text-xl text-center mt-4">Welcome {user.name}</h1>
      ) : null}
    </div>
  );
}
