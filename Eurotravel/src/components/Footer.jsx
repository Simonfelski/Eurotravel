import React from 'react'

const Footer = () => {
	const currentDate = new Date().getFullYear()

	return (
		<div className="w-full bg-[#dedee2] flex flex-col items-center">
			<h3 className='text-xl font-bold py-3'>Eurotravel</h3>
			<p className='pb-3'>&copy; {currentDate} Eurotravel. All rights reserved.</p>
		</div>
	)
}

export default Footer
