import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/scss/navigation'
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import slider1 from '../../../../assets/img/slider1.png'
import 'swiper/css/pagination'
import "./Comments.scss"
import { useFetch } from '../../../../services/api'

function Comments() {
	const { data, isPending, error } = useFetch(
	'https://travelagencylanding.pythonanywhere.com/comments/'
	)
	const { i18n, t } = useTranslation(['home'])

	return (
		<div className='home_slider'>
			<div className='home_slider_left'>
				{/* <p>{t('Testimonials')}</p> */}
				<h1 style={{
					fontSize:"29px"
				}}>{t('What People Say About Us.')}</h1>
			</div>
			<Swiper
				className='mySwiper'
				direction={'vertical'}
				navigation={true}
				modules={[Navigation, Pagination]}
				pagination={{
					clickable: true,
				}}
			>
				{data &&
					data.map(item => {
						return (
							<SwiperSlide key={item.id} className='slide'>
								<div className='slide_card'>
									<img src={slider1} alt='' />
									<p>{item[`comment_${i18n.language}`].slice(0,200)}...</p>
									<h1 style={{
										fontSize:"20px"										
									}}>{item[`full_name_${i18n.language}`]}</h1>
									<p>
										{item[`country_${i18n.language}`]},{' '}
										{item[`city_${i18n.language}`]}
									</p>
								</div>
							</SwiperSlide>
						)
					})}
			</Swiper>
		</div>
	)
}

export default Comments
