import React, { useState } from "react";
import PropTypes from "prop-types";

function AccountInfo({ onUserSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    onUserSubmit(username);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="e.g. Redux"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSubmit} className="submit-button">
        Search
      </button>
    </div>
  );
}

AccountInfo.propTypes = {
  onUserSubmit: PropTypes.func.isRequired,
};

export default AccountInfo;
