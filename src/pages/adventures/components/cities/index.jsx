import React from "react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../../../services/api";
import "./styles.scss";
import Loader from "../../../../components/loader/Loader";
import { Link, NavLink } from "react-router-dom";

const Cities = ({ toTop }) => {
  const { data, isPending, error } = useFetch(
    "https://travelagencylanding.pythonanywhere.com/places/"
  );
  const { t, i18n } = useTranslation(["common"]);

  if (isPending) {
    return <Loader />;
  } else if (error) {
    console.log(error);
  }
  return (
		<>
			{(data?.length >= 6 && (
				<div className='city_section'>
					<h1>{t('Top Destinations')}</h1>
					<p>{t("Eng zo'r manzaralardan bahra oling")}</p>
					<div className='btns'>
						{data?.map(item => (
							<NavLink key={item.id} to={`/adventures/${item.id}/`}>
								<button onClick={() => toTop(item.id)}>{item.name}</button>
							</NavLink>
						))}
					</div>
					<div className='box_images'>
						<div className='left_container'>
							<div className='top_container_images'>
								<div className='relative_image'>
									{/* <Link to={`/adventures/${data[0].id}/`}> */}
									<img
										onClick={() => toTop(data[0]?.id)}
										src={data[0]?.image}
										// src='/adventure/city1.png'
									/>
									{/* </Link> */}
									<div className='public_absolute'>
										<h3>{data[0][`name_${i18n.language}`]}</h3>
										<span>$ {data[0][`price`]}</span>
									</div>
								</div>
								<div className='relative_image'>
									{/* <Link to={`/adventures/${data[1].id}/`}> */}
									<img
										onClick={() => toTop(data[1].id)}
										src={data[1]?.image}
										// src='/adventure/city1.png'
									/>
									{/* </Link> */}
									<div className='public_absolute'>
										<h3>{data[1][`name_${i18n.language}`]}</h3>
										<span>$ {data[1][`price`]}</span>
									</div>
								</div>
							</div>
							<div
								onClick={() => toTop(data[2].id)}
								className='relative_image relative_image_small'
							>
								{/* <Link
									to={`/adventures/${data[2].id}/`}
								> */}

								{/* </Link> */}
								<div
									className='public_absolute'
									style={{
										height: '70px',
									}}
								>
									<img src='' alt='' />
									<h3>{data[2][`name_${i18n.language}`]}</h3>
									<span>$ {data[2][`price`]}</span>
								</div>
							</div>
						</div>
						<div className='right_container'>
							<div className='relative_image'>
								{/* <Link to={`/adventures/${data[3].id}/`}> */}
								<img
									style={{
										objectFit: 'cover',
									}}
									onClick={() => toTop(data[3].id)}
									src={data[3]?.image}
									// src='/adventure/city1.png'
								/>
								{/* </Link> */}
								<div className='public_absolute'>
									<h3>{data[3][`name_${i18n.language}`]}</h3>
									<span>$ {data[3][`price`]}</span>
								</div>
							</div>
							<div className='bottom_container_images'>
								<div className='relative_image'>
									{/* <Link to={`/adventures/${data[4].id}/`}> */}
									<img
										onClick={() => toTop(data[4].id)}
										src={data[4]?.image}
										// src='/adventure/city1.png'
									/>
									{/* </Link> */}
									<div className='public_absolute'>
										<h3>{data[4][`name_${i18n.language}`]}</h3>
										<span>$ {data[4][`price`]}</span>
									</div>
								</div>
								<div className='relative_image'>
									{/* <Link to={`/adventures/${data[5].id}/`}> */}
									<img
										onClick={() => toTop(data[5].id)}
										src={data[5]?.image}
										// src='/adventure/city1.png'
									/>
									{/* </Link> */}
									<div className='public_absolute'>
										{data[5] && <h3>{data[5][`name_${i18n.language}`]}</h3>}
										<span>
											$ {data && data[5].price}
											{/* {data[6].price} {t('price')} */}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)) || <></>}
		</>
	)
};

export default Cities;
