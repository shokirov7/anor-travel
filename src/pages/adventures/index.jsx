import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GrDown } from 'react-icons/gr'
import { useParams } from 'react-router'
import Loader from '../../components/loader/Loader'
import { useFetch } from '../../services/api'
import Contact from './components/contact'
import Customer from './components/customer'
import Stories from './components/stories'
import './style.scss'
import Cities from './components/cities'
// import i18n from '../../i18n'

const Adventures = () => {
	const { id } = useParams()
	const { data, error, isPending } = useFetch(
		`https://travelagencylanding.pythonanywhere.com/place/${id}/`
	)

	useEffect(()=>{
		window.scrollTo(0,0)
	},[])
	const { t, i18n } = useTranslation(['common'])
	const handleSubmit = e => {
		e.preventDefault()
		window.scrollTo({
			top: 6400,
			behavior: 'smooth',
		})
	}
	const toTop = (id) => {
		window.scrollTo(0, 40)
		const currentUrl = localStorage.getItem('url')
		const newUrl = `${currentUrl}adventures/${id}`
		console.log(newUrl);
		window.location.href = newUrl
	}
	if(error){
		<>
			<div>{error}</div>
		</>
	}
	
	return (
		<>
			{!data ? (
				<Loader />
			) : (
				<div className={`main ${i18n.language}`}>
					<div className='header__main'>
						<div className='left_main'>
							<h1>{data && data[`name_${i18n.language}`]}</h1>
							<p>{data && data[`about_${i18n.language}`]}</p>
							<div className='form'>
								<div>
									<label>{t('Where')}</label> <br />
									<input value={data && data[`name_${i18n.language}`]} readOnly />
								</div>
								<hr />
								<div>
									<label>{t('Date')}</label> <br />
									<input
										type='text'
										readOnly={true}
										value={`${data?.day} ${t('day')}`}
										placeholder='09th March,2021'
									/>
								</div>
								<div>
									<a href='#contact'>
										<button>
											<GrDown />
										</button>
									</a>
								</div>
							</div>
						</div>
						<div className='right_main'>{data && <img src={data.image} />}</div>
					</div>
					{/* <Carousel /> */}
					<Stories />
					<Cities toTop={toTop} />
					<Customer />
					<Contact id={id} />
				</div>
			)}
		</>
	)
}

export default Adventures