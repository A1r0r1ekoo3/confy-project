import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-[#222831]">
      <div className="max-container  flex justify-end items-center gap-5 py-2">
        <h1 className="text-white">Hello, Abrorbek</h1>
        <Link to="/login" className="btn btn-primary btn-outline btn-sm dark:btn-success">
          LOGOUT
        </Link>
      </div>
    </div>
  );
}

export default Header;
