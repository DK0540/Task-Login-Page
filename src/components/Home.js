import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login" className="button">
        PLease Login
      </Link>
      <div></div>
    </div>
  );
};

export default Home;
