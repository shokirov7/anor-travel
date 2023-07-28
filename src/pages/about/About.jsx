import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import "./About.scss";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { PiHandHeartBold } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { FaRedhat } from "react-icons/fa";
import Aboutcard from "./Aboutcard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EmployeeData from "./employeeData/employeeData";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import i18next from "i18next";
import Submit from "../../components/submit/Submit";
import { useFetch } from '../../services/api'

const About = () => {
  // Translation
  const { i18n, t } = useTranslation(["about"]);

  const [employeesData, setEmployeesData] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);

  // Form submit
  const [isSent, setIsSent] = useState(false);
  const { data } = useFetch(
		'https://travelagencylanding.pythonanywhere.com/places/'
	)
  if (data) {
		localStorage.setItem('link', data[0].id)
	}
  //
  const link = localStorage.getItem('link')
		? localStorage.getItem('link')
		: null


  // Slider ------------------

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // --------------------

  const employee = employeesData.map((item) => (
    <EmployeeData
      key={item.id}
      name={item && item[`first_name_${i18n.language}`]}
      lastname={item && item[`last_name_${i18n.language}`]}
      position={item && item[`position_${i18n.language}`]}
      img={item.image}
    />
  ));

  // Post Contact

  const [succes, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submitSend(e) {
    e.preventDefault();
    axios
      .post("https://travelagencylanding.pythonanywhere.com/contacts/", {
        full_name: name,
        phone_number: phone,
      })
      .then(setSuccess(true))
      .catch((err) => console.log(err));
  }

  // ---------------

  useEffect(() => {
    window.scrollTo(0, 40)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://travelagencylanding.pythonanywhere.com/employees/"
        );
        setEmployeesData(response.data);
        setTotalEmployees(response.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(employeesData);
  const [counteron, setCounterOn] = useState(false);

  return (
    <div className={`about ${i18n.language}`}>
      <div className="hero">
        <div className="hero_title">
          {t("It’s a Big World Out There, Go Explore")}
        </div>
        <div className="hero_desc">
          {t(
            "Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.and very customize continually."
          )}
        </div>
        <div className="hero_btns">
          <Link to={`/adventures/${link}`}>{t("Get Exploration")}</Link>
        </div>
      </div>
      <div className="underhero">
        <Aboutcard
          icon={<FaMedal />}
          title={t("Best Price Guarantee")}
          desc={t("Assuring Unbeatable Prices for Your Dream Getaways")}
        />
        <Aboutcard
          icon={<PiHandHeartBold />}
          title={t("Travellers Love Us")}
          desc={t("Cherishing Unforgettable Journeys Together")}
        />
        <Aboutcard
          icon={<FaRedhat />}
          title={t("Best Travel Agent")}
          desc={t(
            "A World of Possibilities with Our Award-Winning Travel Agent"
          )}
        />
        <Aboutcard
          icon={<MdSupportAgent />}
          title={t("Our Dedicated Support")}
          desc={t("Seamless Journeys, Backed by Our Dedicated Support.")}
        />
      </div>
      <div className="about_holder">
        <div className="about_bg_text">{t("Travel")}</div>
        <div className="about_left">
          <img src={img1} alt="" />
          <img className="about_left_img2" src={img2} alt="" />
        </div>
        <div className="about_right">
          <div className="about_right_title">{t("About Us")}</div>
          <div className="about_right_bigtitle">
            {t("Anor Travel sayyohlik agentligi.")}
          </div>
          <div className="about_right_desc">
            {t(
              "Biz sizni sayohatlar uchun kamtar shaharlar va mamlakatlar bilan tanishish, tarixiy, madaniy va tabiiy go'zalliklar bilan ta'minlanishga chaqiramiz. Sayohatingizni eng yaxshi va unutilmas tajribaga aylantirish hamda sizning hayolingizdagi ideal sayohatni haqiqiylikka aylantirishga ko'maklashamiz."
            )}
          </div>
          <ul>
            <li>
              <span>&#10004;</span>
              <p>
                {t(
                  "We providing compe quality for packed with elated different."
                )}
              </p>
            </li>
            <li>
              <span>&#10004;</span>
              <p>
                {t("We are one of compelling quality for packed with leading.")}
              </p>
            </li>
            <li>
              <span>&#10004;</span>
              <p>
                {t("Learn how compelling quality for packed with elated grow.")}
              </p>
            </li>
          </ul>
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
            }}
            onExit={() => {
              setCounterOn(false);
            }}
          >
            <div className="about_right_stats">
              <div className="about_stats_block">
                <div className="about_stats_block_title">
                  {counteron && <CountUp start={0} end={16} delay={0} />}+
                </div>
                <div className="about_stats_block_desc">
                  {t("Year Experience")}
                </div>
              </div>
              <div className="about_stats_block">
                <div className="about_stats_block_title">
                  {counteron && <CountUp start={0} end={20} delay={0} />}+
                </div>
                <div className="about_stats_block_desc">
                  {t("Partners")}
                </div>
              </div>
              <div className="about_stats_block">
                <div className="about_stats_block_title">
                  {counteron && <CountUp start={0} end={12} delay={0} />}K+
                </div>
                <div className="about_stats_block_desc">
                  {t("Happy Customers")}
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        <img src="./src/assets/img/img3.png" alt="" className="about_img3" />
      </div>
      <div className="employees">
        <div className="emp_min_title">
          {t("We have {{totalEmployees}}+ members", { totalEmployees })}
        </div>
        <div className="emp_title">{t("Meet our agents")}</div>
        <div className="emp_holder">
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            itemClass="carousel-item"
            showDots={true}
            ssr={true}
            keyBoardControl={true}
          >
            {employee}
          </Carousel>
        </div>
      </div>
      <div className="about_connect">
        <div className="connect_holder">
          <div className="about_connect_title">
            {t("Get connected our top near business peartner")}
          </div>
          <form action="" onSubmit={submitSend}>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              type="text"
              placeholder="Full name"
            />
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
              type="text"
              placeholder="Phone number"
            />
            
            <button onClick={()=> {setIsSent(true)}} type="submit">{t("Get listed")}</button>
          </form>
        </div>
      </div>
      {isSent && succes && <Submit sent={setIsSent}/>}
    </div>
  );
};

export default About;
