import React from "react";
import './Aboutcard.scss'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Aboutcard({ icon, title, desc }) {
  const { i18n, t } = useTranslation(["about"]);
  return (
    <div className={`aboutcard ${i18n.language}`}>
      <div className="aboutcard_icon">{icon}</div>
      <div className="aboutcard_title">{title}</div>
      <div className="aboutcard_desc">{desc}</div>
    </div>
  );
}

export default Aboutcard;
