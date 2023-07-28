import React, { useState, useEffect } from "react";
import "./header.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useFetch } from '../../../services/api'

const Header = () => {
  const { i18n, t } = useTranslation(["about"]);
  const {data} = useFetch('https://travelagencylanding.pythonanywhere.com/places/')
  const navigate = useNavigate()

  if(data){
    localStorage.setItem("link", data[0].id)
  }
  const handleChange = (e) => { 
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const [isSticky, setIsSticky] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(selectedLanguage);
  }, [i18n]);
  const link = localStorage.getItem('link') ?  localStorage.getItem('link') : null

  const toTop = ()=>{
    navigate(`/adventures/${link}`)
  }
  return (
		<div className={`header ${i18n.language} ${isSticky ? 'sticky' : ''}`}>
			<div className='nav_left'>
				<NavLink to="/" className='nav_logo'>
					<img src='./src/assets/img/logo.svg' alt='' />
					<span> Anor-travel.uz</span>
				</NavLink>
				<div className='nav_links'>
					<NavLink to='/'>{t('Home')}</NavLink>
					<NavLink to='/about'>{t('About')}</NavLink>
					<NavLink to={`/adventures/${link}`}>{t('Tours')}</NavLink>
				</div>
			</div>
			<div className='nav_right'>
				<select value={i18n.language} onChange={handleChange}>
					<option value='en'>EN</option>
					<option value='uz'>UZ</option>
					<option value='ru'>RU</option>
				</select>
				<div className='nav_btn'>
					{/* <NavLink
						// to={`/adventures/${link}`}
						//to="/adventures/1">
					> */}
					<a onClick={toTop} href='#contact'>
						{t('Book Now')}{' '}
						<svg
							width='16'
							height='15'
							viewBox='0 0 16 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 8.45744L4.04598 10.2128L13.4253 2.87235L6.06897 11.1702V15L8.82758 11.9681L13.4253 13.5638L16 0L0 8.45744Z'
								fill='none'
							/>
						</svg>
					</a>
					{/* </NavLink> */}
				</div>
				<div
					className={`nav_menu ${isOpened ? 'active' : ''}`}
					style={{ zIndex: isOpened ? 888 : -1 }}
				>
					<NavLink
						onClick={() => {
							setIsOpened(false)
						}}
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpened(false)
						}}
						to='/about'
					>
						About
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpened(false)
						}}
						to={`/adventures/${link}`}
					>
						Tours
					</NavLink>
					<div className='nav_menu_btn ' onClick={toTop}>
						<Link>{t('Book Now')}</Link>
					</div>
				</div>
				<div className='nav_menu_holder'>
					<div
						className={`nav_menu_open ${isOpened ? 'close' : ''}`}
						onClick={() => {
							setIsOpened(!isOpened)
						}}
					>
						{isOpened ? (
							<AiOutlineClose style={{ color: '#fff' }} />
						) : (
							<AiOutlineMenu style={{ color: '#000' }} />
						)}
					</div>
				</div>
			</div>
		</div>
	)
};

export default Header;
