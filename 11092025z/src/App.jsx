import { useState } from 'react'
import React from 'react'

function App() {
	const [quotes, setQuotes] = useState(['cytat1', 'cytat2', 'cytat3'])
	const [quote, setQuote] = useState(null)
	const [value, setValue] = useState('')

	const handleShowQuote = () => {
		const index = Math.floor(Math.random() * quotes.length)
		setQuote(quotes[index])
	}

	const handleInputChange = e => {
		setValue(e.target.value)
	}

	const handleAddQuote = () => {
		if (value === '') {
			alert('Wpisz cos do inputa')
		} else {
			const newQuotes = [...quotes, value]
			setQuotes(newQuotes)
			alert(`Wrozba zostala dodana. Aktualne wrozby: ${quotes}, ${value}`)
			setValue('')
		}
	}

	return (
		<div className='d-flex justify-content-center align-items-center min-vh-100'>
			<div className='container-sm text-center bg-body-secondary p-4 d-flex flex-column rounded-4 '>
				<h2 className='text-center mb-4 fw-bold ' style={{ color: '#432874ff' }}>
					Generator cytatów motywacyjnych
				</h2>
				<button
					className='btn fw-medium text-white p-2 fs-3 mb-4 rounded-4'
					style={{ backgroundColor: '#432874ff' }}
					onClick={handleShowQuote}
				>
					Pokaż cytat dnia
				</button>
				{quote ? <h3> {quote} </h3> : null}
				<div className='d-flex justify-content-between'>
					<input
						className='form-control w-75 '
						type='text'
						value={value}
						placeholder='Wpisz swój cytat...'
						onChange={handleInputChange}
					/>
					<button className='btn btn-success ' onClick={handleAddQuote}>
						Dodaj
					</button>
				</div>
				<h2 className='fs-5 text-secondary mt-3 mb-0'>Dostepnych cytatów: {quotes.length}</h2>
			</div>
		</div>
	)
}

export default App
