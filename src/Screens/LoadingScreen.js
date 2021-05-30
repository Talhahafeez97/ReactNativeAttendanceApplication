import React, { useEffect, useContext } from "react";
import { Text, Context as AuthContext } from "../context/AuthContext";

const LoadingScreen = () => {
  const { trylocalSignin } = useContext(AuthContext);
  useEffect(() => {
    trylocalSignin();
  }, []);
  return null;
};
export default LoadingScreen;
