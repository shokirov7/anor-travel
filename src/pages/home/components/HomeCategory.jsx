import React from "react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../../services/api";
import item1 from "../../../assets/img/item1.png";
import item2 from "../../../assets/img/item2.png";
import item3 from "../../../assets/img/item3.png";
import item4 from "../../../assets/img/item4.png";

function HomeCategory() {
  const { data, isPending, error } = useFetch(
    "https://travelagencylanding.pythonanywhere.com/services/"
  );
  const { i18n, t } = useTranslation(["home"]);

  // Store the image URLs in a single array
  const icons = [item1, item2, item3, item4];

  return (
    <div className="home_category">
      <div className="home_category_title">
        <h3>{t("CATEGORY")}</h3>
        <h1>{t("We Offer Best Services")}</h1>
      </div>
      <div className="home_category_cards">
        <div className="home_category_cards_details">
          <img src="../../../assets/img/h3.png" alt="" />
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <div key={item.id} className="home_category_card">
                <img src={icons[index]} alt="" />
                <h1>{item[`name_${i18n.language}`]}</h1>
                <p>{item[`about_${i18n.language}`]}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomeCategory;
