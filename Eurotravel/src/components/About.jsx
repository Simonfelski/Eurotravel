// import React, { useState } from 'react'

// const About = () => {

//     const [isListVisible, setIsListVisible] = useState(false);

//     const toggleList = () => {
//       setIsListVisible(!isListVisible);
//     }
//   }

// 	return (
// 		<div className="p-10">
// 			<h1 className=" font-bold text-lg text-center pb-3">
// 				Discover Europe with Eurotravel: Your Ultimate Companion for Unforgettable Adventures!
// 			</h1>
// 			<p className="text-lg text-center pb-3">
// 				Explore Europe with Eurotravel, your ultimate companion for unforgettable adventures! Whether you're drawn to
// 				the icy landscapes of Iceland or the sunny shores of Spain, Eurotravel is your go-to app. Discover the capital
// 				cities, traditional cuisines, famous figures, and more of each European country. Press the button now to uncover
// 				the diverse list of countries awaiting you in the Eurotravel app.
// 			</p>
// 			<img src="/assets/general/about.png" alt="" />
// 			<div className="flex justify-center pt-3">
// 				<button className="bg-[#9381ff] text-white font-bold rounded-md py-2 px-4" onClick={toggleList}>Check countries</button>
// 			</div>
//       {isListVisible && (
// 			<ul>
// 				<li>Albania</li>
// 				<li>Andorra</li>
// 				<li>Austria</li>
// 				<li>Belarus</li>
// 				<li>Belgium</li>
// 				<li>Bosnia and Herzegovina</li>
// 				<li>Bulgaria</li>
// 				<li>Croatia</li>
// 				<li>Cyprus</li>
// 				<li>Czech Republic</li>
// 				<li>Denmark</li>
// 				<li>Estonia</li>
// 				<li>England</li>
// 				<li>Finland</li>
// 				<li>France</li>
// 				<li>Germany</li>
// 				<li>Greece</li>
// 				<li>Hungary</li>
// 				<li>Iceland</li>
// 				<li>Ireland</li>
// 				<li>Italy</li>
// 				<li>Kosovo</li>
// 				<li>Latvia</li>
// 				<li>Liechtenstein</li>
// 				<li>Lithuania</li>
// 				<li>Luxembourg</li>
// 				<li>Malta</li>
// 				<li>Moldova</li>
// 				<li>Monaco</li>
// 				<li>Montenegro</li>
// 				<li>Netherlands</li>
// 				<li>North Macedonia</li>
// 				<li>Northen Ireland</li>
// 				<li>Norway</li>
// 				<li>Poland</li>
// 				<li>Portugal</li>
// 				<li>Romania</li>
// 				<li>Russia</li>
// 				<li>San Marino</li>
// 				<li>Scotland</li>
// 				<li>Serbia</li>
// 				<li>Slovakia</li>
// 				<li>Slovenia</li>
// 				<li>Spain</li>
// 				<li>Sweden</li>
// 				<li>Switzerland</li>
// 				<li>Turkey</li>
// 				<li>Ukraine</li>
// 				<li>Vatican City</li>
// 				<li>Wales</li>
// 			</ul>
//       )}
// 		</div>
// 	)
// }

// export default About

import React, { useState } from 'react'

const About = () => {
	const [isListVisible, setIsListVisible] = useState(false)

	const toggleList = () => {
		setIsListVisible(!isListVisible)
	}

	return (
		<div className="p-10">
			<h1 className="font-bold text-lg text-center pb-3">
				Discover Europe with Eurotravel: Your Ultimate Companion for Unforgettable Adventures!
			</h1>
			<p className="text-lg text-center pb-3">
				Explore Europe with Eurotravel, your ultimate companion for unforgettable adventures! Whether you're drawn to
				the icy landscapes of Iceland or the sunny shores of Spain, Eurotravel is your go-to app. Discover the capital
				cities, traditional cuisines, famous figures, and more of each European country.
			</p>
			<p className="text-lg text-center pb-3">
				<strong>Press the button now</strong> to uncover the diverse list of countries awaiting you in the Eurotravel
				app.
			</p>
			<img src="/assets/general/about.png" alt="" />
			<div className="flex justify-center pt-3">
				<button className="bg-[#9381ff] text-white font-bold rounded-md py-2 px-4" onClick={toggleList}>
					Check countries
				</button>
			</div>
			{isListVisible && (
				<div className='flex justify-between py-5'>
					<ul>
						<li>Albania</li>
						<li>Andorra</li>
						<li>Austria</li>
						<li>Belarus</li>
						<li>Belgium</li>
						<li>Bosnia <br></br>and Herzegovina</li>
						<li>Bulgaria</li>
						<li>Croatia</li>
						<li>Cyprus</li>
						<li>Czech Republic</li>
						<li>Denmark</li>
						<li>Estonia</li>
						<li>England</li>
						<li>Finland</li>
						<li>France</li>
						<li>Germany</li>
						<li>Greece</li>
						<li>Hungary</li>
						<li>Iceland</li>
						<li>Ireland</li>
						<li>Italy</li>
						<li>Kosovo</li>
						<li>Latvia</li>
						<li>Liechtenstein</li>
						<li>Lithuania</li>
					</ul>
					<ul>
						<li>Luxembourg</li>
						<li>Malta</li>
						<li>Moldova</li>
						<li>Monaco</li>
						<li>Montenegro</li>
						<li>Netherlands</li>
						<li>North Macedonia</li>
						<li>Northen Ireland</li>
						<li>Norway</li>
						<li>Poland</li>
						<li>Portugal</li>
						<li>Romania</li>
						<li>Russia</li>
						<li>San Marino</li>
						<li>Scotland</li>
						<li>Serbia</li>
						<li>Slovakia</li>
						<li>Slovenia</li>
						<li>Spain</li>
						<li>Sweden</li>
						<li>Switzerland</li>
						<li>Turkey</li>
						<li>Ukraine</li>
						<li>Vatican City</li>
						<li>Wales</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default About
