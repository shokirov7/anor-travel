import axios from 'axios'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './styles.scss'
import swal from 'sweetalert'

const Contact = ({id}) => {
  const {i18n, t} = useTranslation(["common"])
  const initialValue = {
		full_name: '',
		phone_number: '',
		id,
	}
	const [formData, setFormData] = useState(initialValue)

	const [errors, setErrors] = useState({
		full_name: '',
		phone_number: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const validationErrors = validateForm(formData)
		if (Object.keys(validationErrors).length === 0) {
			setErrors('')
			try {
				const data = await axios.post(
					'https://travelagencylanding.pythonanywhere.com/contacts/',
					{
						...formData,
					}
				)

				if(data){
          swal({
						title: t('thanks'),
						icon: 'success',
					})
          setFormData(initialValue)
          
        }
			} catch (error) {
				swal({
					title: "Ma'lumotlarni jo'natishda xatolik mavjud !",
					icon: 'error',
				})
			}
		} else {
			setErrors(validationErrors)
		}
	}

	const validateForm = data => {
		let errors = {}
		if (!data.full_name) {
			errors.full_name = t('Ismingizni kiriting')
		}

		// if (!data.email) {
		// 	errors.email = 'Email manzilingizni kiriting'
		// } else if (!/\S+@\S+\.\S+/.test(data.email)) {
		// 	errors.email = "Noto'g'ri email formati"
		// }

		if (!data.phone_number) {
			errors.phone_number = t('Email manzilingizni kiriting')
		}

		return errors
	}

	return (
		<form id='contact' onSubmit={handleSubmit} className='form-container'>
			<h1>{t("subscribe")}</h1>

			<div class='container-input'>
				<input
					type='text'
					id='full_name'
					name='full_name'
					value={formData.full_name}
					onChange={handleChange}
					placeholder={t("To'liq ismingiz")}
					className='input'
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='1em'
					viewBox='0 0 448 512'
				>
					<path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
				</svg>
			</div>
			{errors.full_name && <p className='error-message'>{errors.full_name}</p>}
			<div class='container-input'>
				<input
					type='tel'
					id='phone_number'
					name='phone_number'
					value={formData.phone_number}
					onChange={handleChange}
					className='input'
					placeholder={t('Email manzilingizni kiriting')}
				/>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='1em'
					viewBox='0 0 512 512'
				>
					<path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
				</svg>
			</div>
			{errors.phone_number && (
				<p className='error-message'>{errors.phone_number}</p>
			)}

			<button class='Btn' type='submit'></button>
			<img className='image_top' src='/adventure/toTop.png' />
		</form>
	)
}

export default Contact
