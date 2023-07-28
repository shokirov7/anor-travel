import React from 'react'
import './Employee.scss'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function EmployeeData({name, lastname, position, img}) {
  const { i18n, t } = useTranslation(["about"]);
  return (
    <div className={`employee_card ${i18n.language}`} style={{backgroundImage: `url(${img})`}}>
        <div className="emp_card_name">
            {name + " " +  lastname}
        </div>
        <div className="emp_card_job">{position}</div>
    </div>
  )
}

export default EmployeeData
