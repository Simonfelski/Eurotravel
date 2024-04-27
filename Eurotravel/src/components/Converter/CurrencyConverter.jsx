import React, { useEffect, useState } from 'react'
import CurrencyDropdown from './CurrencyDropdown'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'

const CurrencyConverter = () => {
	const [currencies, setCurrencies] = useState([])
	const [amount, setAmount] = useState(1)
	const [fromCurrency, setFromCurrency] = useState('PLN')
	const [toCurrency, setToCurrency] = useState('EUR')
	const [convertedAmount, setConvertedAmount] = useState(null)
	const [converting, setConverting] = useState(false)
	//  api.frankfurter.app/currencies

	const fetchCurrencies = async () => {
		try {
			const res = await fetch('https://api.frankfurter.app/currencies')
			const data = await res.json()
			setCurrencies(Object.keys(data))
		} catch (error) {
			console.error('Error fetching data', error)
		}
	}

	const currencyConvert = async () => {
		if (!amount) return
		setConverting(true)
		try {
			const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
			)
			const data = await res.json()
			setConvertedAmount(`${data.rates[toCurrency] + '' + toCurrency}`)
		} catch (error) {
			console.error('Error fetching', error)
		} finally {
			setConverting(false)
		}
	}

  useEffect(() => {
		fetchCurrencies()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		currencyConvert()
	}

	const swapCurrencies = () => {
		setFromCurrency(toCurrency)
		setToCurrency(fromCurrency)
	}

	return (
		<div className="py-10">
			<div className="max-w-xl lg:max-w-3xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
				<h3 className="mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h3>

				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
						<CurrencyDropdown
							currencies={currencies}
							title="From:"
							currency={fromCurrency}
							setCurrency={setFromCurrency}
						/>
						<div className="flex justify-center -mb-5">
							<button
								onClick={swapCurrencies}
								className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full cursor-pointer text-white">
								<HiOutlineArrowsRightLeft className="text-xl" />
							</button>
						</div>
						<CurrencyDropdown currencies={currencies} title="To:" currency={toCurrency} setCurrency={setToCurrency} />
					</div>

					<div className="mt-4">
						<label htmlFor="amount" className="block text-sm font-medium text-gray-700">
							Amount:
						</label>
						<input
							type="number"
							className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							value={amount}
							onChange={e => setAmount(e.target.value)}
						/>
					</div>

					<div className="flex justify-end mt-6">
						<button
							onClick={currencyConvert}
							className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-md py-2 px-4 shadow-xl focus:outline-none focus:ring-2 focus:ring-black ${
								converting ? 'animate-pulse' : ''
							}`}>
							Convert
						</button>
					</div>

					{convertedAmount && (
						<div className="mt-4 text-lg font-medium text-right text-green-500">
							Converted Amount: {convertedAmount}
						</div>
					)}
				</form>
			</div>
			<div className="flex justify-center">
				<img src="/assets/calculator/currency.png" alt="exchange picture" className="max-w-[50%] lg:max-w-[30%]" />
			</div>
		</div>
	)
}

export default CurrencyConverter
