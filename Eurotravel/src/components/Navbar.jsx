import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
	const [nav, setNav] = useState('false')

	const toggleNav = () => {
		setNav(!nav)
	}
	return (
		<>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] items-center md:text-xl p-5 lg:hidden'>
            <h1>Eurotravel</h1>
        </div>
			<div className="hidden lg:flex w-full justify-between items-center px-4 py-6 border-b border-b-[#e6ebf4] bg-gradient-to-r from-cyan-500 to-blue-500">
				<Link to="/">
					<div className="flex items-center">
						<p className="text-white font-bold text-lg md:text-xl lg:text-2xl">Eurotravel</p>
					</div>
				</Link>
				<div>
					<Link to="/about" className="text-white font-bold text-lg md:text-xl lg:text-2xl pr-4">
						About
					</Link>
					<Link to="/quiz" className="text-white font-bold text-lg md:text-xl lg:text-2xl pr-4">
						Quiz
					</Link>
					<Link to="/currency-calculator" className="text-white font-bold text-lg md:text-xl lg:text-2xl">
						Calculator
					</Link>
				</div>
			</div>

			<div className="absolute right-5 top-5 z-50 ">
				<div onClick={toggleNav}>
					{nav ? (
						<AiOutlineClose size={20} className="text-[#fff] z-52 lg:hidden" />
					) : (
						<AiOutlineMenu size={20} className="text-[#fff] z-51 lg:hidden" />
					)}
				</div>
			</div>

			{nav && (
				<div className="fixed inset-0 z-40 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] items-center uppercase text-center lg:hidden">
					<ul className="flex flex-col justify-center items-center h-screen text-xl">
						<li className="pb-5">
							<Link to="/" onClick={toggleNav}>Home</Link>
						</li>
						<li className="pb-5">
							<Link to="about" onClick={toggleNav}>About</Link>
						</li>
						<li className="pb-5">
							<Link to="Quiz" onClick={toggleNav}>Quiz</Link>
						</li>
						<li>
							<Link to="currency-calculator" onClick={toggleNav}>Calculator</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default Navbar
