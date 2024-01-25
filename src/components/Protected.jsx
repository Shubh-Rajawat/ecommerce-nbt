import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    let login = Cookies.get("token");
    if (!login) {
      tost();
      navigate("/");
    }
  }, []);

  const tost = () => {
    toast({
      description: `Login required`,
      status: "error",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  return <Component />;
};

export default Protected;
