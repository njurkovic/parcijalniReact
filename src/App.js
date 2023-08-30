import React, { useState } from "react";
import AccountInfo from "./components/accountInfo";
import UserDetails from "./components/userDetails";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleUserSubmit = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="container">
      <h1>GitHub username</h1>
      {!user ? (
        <AccountInfo onUserSubmit={handleUserSubmit} />
      ) : (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
