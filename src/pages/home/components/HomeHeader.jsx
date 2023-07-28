import React from 'react'
import header1 from '../../../assets/img/h1.png'
import header2 from '../../../assets/img/h2.png'
import { useTranslation } from 'react-i18next'
import headerLine from '../../../assets/img/line.png'
import { t } from 'i18next'
import { Link } from 'react-router-dom'

function HomeHeader() {
	const { t, i18n } = useTranslation(['home'])
	const link = localStorage.getItem("link") ? localStorage.getItem("link") : 3
	
	return (
		<div className="home_header">
				<div className="home_header_left">
					<h3>{t("Best Destinations around the world")}</h3>
					<h1>{t("Travel,")} <span><img src={headerLine} alt="" /> {t("enjoy")}</span> {t("and live a new and full life")}</h1>
					<p>{t("With Anor Travel it's all easy, fast and reliable.")}</p>
					<div className="home_header_left_btns">
						<Link to={`adventures/${link}`}>{t("Find out more")}</Link>
					</div>
				</div>
				<div className="home_header_right">
					<div className="home_header_right_mainImg">
						<img src={header1} alt="" />
					</div>
					<div className="home_header_right_details">
						<img className='header1' src={header2} alt="" />
						<img className='header2' src={header2} alt="" />
					</div>
				</div>
			</div>
	)
}

export default HomeHeader