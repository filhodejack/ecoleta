import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = (props: any) => {
  return (
    <header>
      <img src={logo} alt="Ecoleta" />

      {!props.isHome && (
        <Link to="/">
          <FiArrowLeft />
          Voltar para inicial
        </Link>
      )}
    </header>
  );
};

export default Header;
