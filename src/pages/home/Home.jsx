import React, { useEffect } from 'react'
import './Home.scss'
import './HomeResponsive.scss'
import HomeHeader from './components/HomeHeader'
import HomeCategory from './components/HomeCategory'
import HomeDestination from './components/HomeDestination'
import HomeSteps from './components/HomeSteps'
import HomeSlider from './components/Slider/HomeSlider'

const Home = () => {

	useEffect(()=>{
		window.scrollTo(0,40)
	},[])
	return (
		<div className='home'>
			<HomeHeader />
			<HomeCategory />
			<HomeDestination />
			<HomeSteps />
			<HomeSlider/>
		</div>
	)
}

export default Home