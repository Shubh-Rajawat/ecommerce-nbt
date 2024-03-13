import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const toast = useToast();
  const navigate = useNavigate();
  let login = Cookies.get("token");
  useEffect(() => {
    if (login === "undefined" || !login) {
      tost();
      navigate("/");
    }
  }, []);

  const tost = () => {
    toast({
      description: `Login required`,
      status: "warning",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  return login !== "undefined" && login && <Component />;
};

export default Protected;
