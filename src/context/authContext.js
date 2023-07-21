import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  console.log(typeof JSON.parse(localStorage.getItem("darkMode")));

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Ali",
      profilePic:
        "https://images.pexels.com/photos/17418477/pexels-photo-17418477/free-photo-of-snow-landscape-man-people.jpeg",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
