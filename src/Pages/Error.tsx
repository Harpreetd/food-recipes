import React, { FC } from "react";
import { Link } from "react-router-dom";
const Error: FC = () => {
  return (
    <div className="notFound">
      <h1>Oops!!! it's a dead end</h1>
      <Link to="/" className="links">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
