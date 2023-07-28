import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import header4 from '../../../assets/img/h4.png'
import icon from '../../../assets/img/icon.svg'
import { useFetch } from '../../../services/api'

function HomeDestination() {

	const { data, isPending, error } = useFetch(
		'https://travelagencylanding.pythonanywhere.com/places/'
	)
		if(data){
			localStorage.setItem("link",data[0].id)
		}

	const { t, i18n } = useTranslation(['home'])

		const handleClick = ()=> {
			localStorage.setItem("url", window.location.href)
			window.scrollTo(0, 40)
		}
	// const [ selling, setSelling ] = useState(Selling)

	return (
		<div className='home_destination'>
			<div className='home_destination_title'>
				<h3>{t("Top Selling")}</h3>
				<h1>{t("Top Destinations")}</h1>
			</div>
			<div className='home_destination_cards'>
				<div className='home_destination_card_decoration'>
					<img src={header4} alt='' />
				</div>
				{data &&
					data.map(item => {
						return (
							<Link
							onClick={handleClick}
								to={`/adventures/${item.id}`}
								key={item.id}
								className='home_destination_card'
								style={{ backgroundImage: `url(${item.image})`}}
							>
								<div className='home_destination_card_text'>
									<div className='title_price'>
										<p>{item[`name_${i18n.language}`]}</p>
										<p>$ {item.price} </p>
									</div>
									<div className='duration'>
										<img src={icon} alt='' />
										<p>{item.day} {t("day")}</p>
									</div>
								</div>
							</Link>
						)
					})}
			</div>
		</div>
	)
}

export default HomeDestination
