import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import './styles.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import HomeSlider from '../../../home/components/Slider/HomeSlider'
import Comments from './Comments'

const Customer = () => {
	const { t, i18n } = useTranslation(['common'])
	return (
		<div className='customer_container'>
			<div className='customer_left'>
				<img src='/adventure/customer.png' />
			</div>
			<div className='customer_right'>
				{/* <span className='liner'></span>
				<h1>{t('A customer said about us:')}</h1> */}
				<div className='box'>
					{/* <p>
						{t("Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.")}
					</p>
					<div className='box_bottom'>
						<div className='stars_left'>
							<span className='stars'>
								{' '}
								&#9733; &#9733;&#9733;&#9733;&#9733;
							</span>
							<b>Andrew Sarma</b>
							<code>{t("Enterpreneur")}</code>
						</div>
						<div className='right_swiper'>
							<button className=''>
								<AiOutlineArrowLeft />
							</button>
							<button>
								<AiOutlineArrowRight />
							</button>
						</div>
					</div> */}
					<Comments/>
				</div>
			</div>
		</div>
	)
}

export default Customer
