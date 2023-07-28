import React, { useState } from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useFetch } from '../../../services/api'

const Footer = () => {
  const { i18n, t } = useTranslation(["about"]);
  const link = localStorage.getItem("link")

  return (
		<div className={`footer ${i18n.language}`}>
			<div className='footer_holder'>
				<div className='footer_block'>
					<NavLink to="/" className='footer_logo'> Anor-travel.uz</NavLink>
				</div>
				<div className='footer_block'>
					{/* <div className="footer_block_title">{t("Company")}</div> */}
					<div className='footer_block_links'>
						<NavLink to='/'>{t('Home')}</NavLink>
						<NavLink to='/about'>{t('About')}</NavLink>
						<NavLink to={`/adventures/${link}`}>{t('Tours')}</NavLink>
					</div>
				</div>
			</div>
			<div className='footer_copy'>{t('All rights reserved.')}</div>
		</div>
	)
};

export default Footer;
