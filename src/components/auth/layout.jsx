import React, { Children } from "react";
import { Outlet } from "react-router-dom";

function Authlayout() {
  return (
    <div>
      Auth Layout
      <Outlet />
    </div>
  );
}

export default Authlayout;
