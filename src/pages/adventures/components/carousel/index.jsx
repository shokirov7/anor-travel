import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './styles.scss'

import { Navigation, Pagination } from 'swiper/modules'
import { carouselData } from './data'

const Carousel = () => {
	return (
		<div className='mySwiper_react'>
			<div className='top_swiper'>
				<div className='left_swiper'>
					<h1>Categories</h1>
					<p>
						Here are lots of interesting destinations to <br />
						visit, but don’t be confused—they’re already <br /> grouped by
						category.
					</p>
				</div>
				<div className='right_swiper'>
					<button className=''>
						<AiOutlineArrowLeft />
					</button>
					<button>
						<AiOutlineArrowRight />
					</button>
				</div>
			</div>
			<Swiper
				slidesPerView={5}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'
			>
					{carouselData?.map((item, key) => (
    				<SwiperSlide key={key}>
		  												<img src={item} />
				    </SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}

export default Carousel