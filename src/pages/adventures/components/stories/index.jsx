import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './styles.scss'

const Stories = () => {
	const [active, setActive] = useState(false)
	const { t, i18n } = useTranslation(['common'])
	return (
		<div className='section_stories'>
			<div className='left_stories'>
				<img src='/adventure/main-image.png' />
			</div>
			<div className='right_stories'>
				<p className='top_title'>{t("Our Experience")}</p>
				<h1 className='subject_title'>{t("Our Stories Have Adventures")}</h1>
				<p className='text_title'>
					{' '}
					{t("We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!")}
				</p>
				<div className='counts'>
					<ScrollTrigger
						onEnter={() => setActive(true)}
						onExit={() => setActive(false)}
					>
						<div className='bx'>
							<p>{active && <CountUp start={0} end={12} delay={0.6} />}K+</p>
							<span className='desc'>{t("Mamnun mijozlar")}</span>
						</div>
					</ScrollTrigger>
					<ScrollTrigger
						onEnter={() => setActive(true)}
						onExit={() => setActive(false)}
					>
						<div className='bx'>
							<p>{active && <CountUp start={0} end={16} delay={0.6} />}+</p>
							<span className='desc'>{t("Yillik tajriba")}</span>
						</div>
					</ScrollTrigger>
					<ScrollTrigger
						onEnter={() => setActive(true)}
						onExit={() => setActive(false)}
					>
						<div className='bx'>
							<p>{active && <CountUp start={0} end={20} delay={0.6} />}+</p>
							<span className='desc'>{t("Hamkorlar")}</span>
						</div>
					</ScrollTrigger>
				</div>
			</div>
		</div>
	)
}

export default Stories
