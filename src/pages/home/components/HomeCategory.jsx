import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../../services/api';

function HomeCategory() {
  const { data, isPending, error } = useFetch('https://travelagencylanding.pythonanywhere.com/services/');
  const { i18n, t } = useTranslation(['home']);

  // Store the image URLs in a single array
  const icons = [
    './src/assets/img/item1.png',
    './src/assets/img/item2.png',
    './src/assets/img/item3.png',
    './src/assets/img/item4.png',
  ];

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
        {data && data.map((item, index) => {
          return (
            <div key={item.id} className='home_category_card'>
              {/* Use the icons array with the corresponding index */}
              <img src={icons[index]} alt='' />
              <h1>{item[`name_${i18n.language}`]}</h1>
              <p>{item[`about_${i18n.language}`]}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomeCategory;
