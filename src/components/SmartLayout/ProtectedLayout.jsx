import React from "react";
import DashoboardLayouth from "../DashoboardLayouth";
import ProtectedRoute from "../ProtectedRouter/ProtectedRoute";

const ProtectedLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <DashoboardLayouth>{children}</DashoboardLayouth>
    </ProtectedRoute>
  );
};

export default ProtectedLayout;
