import React, { useState } from 'react'
import step from '../../../assets/img/step.png'
import home_step1 from '../../../assets/img/h-step1.png'
import home_step2 from '../../../assets/img/h-step2.png'
import home_step3 from '../../../assets/img/h-step3.png'
import home_step4 from '../../../assets/img/h-step4.jpg'
import home_step5 from '../../../assets/img/h-step5.png'
import { BiLeaf } from "react-icons/bi";
import { BsMap } from 'react-icons/bs';
import { BsSend } from 'react-icons/bs';
import { GiModernCity } from 'react-icons/gi';
import { useTranslation } from 'react-i18next'
import { FiHeart } from 'react-icons/fi';



function HomeSteps() {
	const { t, i18n } = useTranslation(['home'])
	// const Steps = [
	// 	{
	// 		id: 1,
	// 		title: t('choose'),
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	// 		img: home_step1,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: t('Make Payment'),
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	// 		img: home_step2,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: t('Reach Airport on Selected Date'),
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
	// 		img: home_step3,
	// 	},
	// ]

	// const [steps, setSteps] = useState(Steps)
	return (
		<div className='home_steps'>
			<div className='home_steps_left'>
				<p>{t('Easy and Fast')}</p>
				<h1>{t('Book your next trip in 3 easy steps')}</h1>
				<div className='home_steps_cards'>
					<div className='home_steps_card'>
						<img src={home_step1} alt='' />
						<div className='home_steps_card_text'>
							<h1>{t('choose')}</h1>
							<p>
								{t("Sayohatingiz uchun orzuingizdagi shaharni tanlang")}
							</p>
						</div>
					</div>
					<div className='home_steps_card'>
						<img src={home_step2} alt='' />
						<div className='home_steps_card_text'>
							<h1>{t('Make Payment')}</h1>
							<p>
								{t("To'lovlar siz istagan usulda")}
							</p>
						</div>
					</div>
					<div className='home_steps_card'>
						<img src={home_step3} alt='' />
						<div className='home_steps_card_text'>
							<h1>{t('Reach Airport on Selected Date')}</h1>
							<p>
								{t("Aeroportga belgilangan sanaga yetib keling va sayohatni boshlang")}
							</p>
						</div>
					</div>
					{/* {steps && steps.map(item => {
						return (
							<div key={item.id} className="home_steps_card">
								<img src={item.img} alt="" />
								<div className="home_steps_card_text">
									<h1>{item.title}</h1>
									<p>{item.description}</p>
								</div>
							</div>
						)
					})} */}
				</div>
			</div>
			<div className='home_steps_right'>
				<div className='home_steps_right_details'>
					<img className='detail' src={step} alt='' />
				</div>
				<a target='_blank' href='https://docs.google.com/spreadsheets/d/1O8ibl4sDuSmPD8v3_stTQHLl9x1XcmRrBPDGiWogGPQ/edit?usp=sharing' className='home_steps_right_card'>
					<img className='home_step4' src={home_step4} alt='' />
					<h1>{t('Trip To Umrah')}</h1>
					<p>14-29 June | by Abduqahhor Ibrohimov</p>
					<div className='home_steps_right_card_icons'>
						<div className='icon'>
							<BiLeaf fontSize='small' />
						</div>
						<div className='icon'>
							<BsMap fontSize='small' />
						</div>
						<div className='icon'>
							<BsSend fontSize='small' />
						</div>
					</div>
					<div className='home_steps_right_card_text'>
						<span>
							<GiModernCity />
							<p>{t('24 people going')}</p>
						</span>
						<FiHeart />
					</div>
				</a>
				<a target='_blank' href='https://docs.google.com/spreadsheets/d/1O8ibl4sDuSmPD8v3_stTQHLl9x1XcmRrBPDGiWogGPQ/edit?usp=sharing' className='home_steps_right_details'>
					<div className='home_steps_right_details_card'>
						<div className='detail_second'>
							<img style={{width: '50px', height: '50px'}} src={home_step4} alt='' />
							<div className='detail_second_text'>
								<p>{t('Ongoing')}</p>
								<h1>{t('Trip to Umrah')}</h1>
								<h2>
									<span>40%</span> {t('completed')}
								</h2>
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default HomeSteps