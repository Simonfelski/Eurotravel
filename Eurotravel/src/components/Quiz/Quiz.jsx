import React, { useRef, useState } from 'react'
import questions from '../../data/questions'

const Quiz = () => {
	const newIndex = Math.floor(Math.random() * questions.length);
	
	let [index, setIndex] = useState(newIndex)
	let [question, setQuestion] = useState(questions[index])
	let [lock, setLock] = useState(false)
	let [score, setScore] = useState(0)
	let [result, setResult] = useState(false)
	let [currentQuestionNumber, setCurrentQuestionNumber] = useState(1)

	let Option1 = useRef(null)
	let Option2 = useRef(null)
	let Option3 = useRef(null)
	let Option4 = useRef(null)

	let optionArray = [Option1, Option2, Option3, Option4]

	const checkAns = (e, ans) => {
		if (lock === false) {
			if (question.ans === ans) {
				e.target.classList.add('correct')
				setLock(true)
				setScore(prev => prev + 1)
			} else {
				e.target.classList.add('wrong')
				setLock(true)
				optionArray[question.ans - 1].current.classList.add('correct')
			}
		}
	}

	const next = () => {
		if (lock === true) {
			if (currentQuestionNumber === 5) {
				setResult(true)
				return 0
			}
			// const newIndex = Math.floor(Math.random() * questions.length);
			setIndex(newIndex)
			setQuestion(questions[newIndex])
			setLock(false)
			setCurrentQuestionNumber(prev => prev + 1)
			optionArray.map(option => {
				option.current.classList.remove('wrong')
				option.current.classList.remove('correct')
				return null
			})
		}
	}

	const reset = () => {
		// const newIndex = Math.floor(Math.random() * questions.length);
		setCurrentQuestionNumber(1)
		setIndex(0)
		setQuestion(questions[newIndex])
		setScore(0)
		setLock(false)
		setResult(false)
	}

	return (
		<section>
			{result ? (
				<></>
			) : (
				<div className='md:border md:border-solid md:border-black lg:max-w-[700px] lg:m-auto md:my-32 md:mx-10 lg:my-20'>
					<h3 className="flex justify-center font-bold text-lg md:text-xl lg:text-2xl p-12">
						{question.question}
					</h3>
					<div>
					<ul className='flex flex-col md:mx-20 lg:max-w-[1240px] lg:m-auto'>
						{/* <div className="flex justify-center"> */}
							<l1
								ref={Option1}
								onClick={e => {
									checkAns(e, 1)
								}}
								className="border border-solid border-black shadow-md rounded-md  p-5 m-4 cursor-pointer">
								{question.option1}
							</l1>
							<l1
								ref={Option2}
								onClick={e => {
									checkAns(e, 2)
								}}
								className="border border-solid border-black shadow-md rounded-md  p-5 m-4 cursor-pointer">
								{question.option2}
							</l1>

							<l1
								ref={Option3}
								onClick={e => {
									checkAns(e, 3)
								}}
								className="border border-solid border-black shadow-md rounded-md  p-5 m-4 cursor-pointer">
								{question.option3}
							</l1>
							<l1
								ref={Option4}
								onClick={e => {
									checkAns(e, 4)
								}}
								className="border border-solid border-black shadow-md rounded-md  p-5 m-4 cursor-pointer">
								{question.option4}
							</l1>
					
					</ul>
					</div>
					<div className="flex justify-center mt-16">
						<button
							onClick={next}
							className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md py-3 px-6 shadow-xl">
							Next
						</button>
					</div>
					<div className="flex justify-center p-4">
						<p>
							{currentQuestionNumber} of {questions.length - 45} questions
							
						</p>
					</div>
				</div>
			)}
			{result ? (
				<>
				<div className='max-w-[300px] mt-10 md:mt-24 m-auto md:max-w-[500px] border border-black'>
					<div className="flex justify-center text-lg md:text-xl lg:text-2xl font-bold p-4 uppercase">
						<h3>Quiz</h3>
					</div>
					<hr className="mx-24 border-t-1 border-black" />
					<div className="flex justify-center p-4 text-lg md:text-xl md:p-12 lg:text-2xl">
						<h3>
							You scored {score} of out {questions.length - 45}
						</h3>
					</div>
					</div>
					<div className="flex justify-center">
						<img src="/assets/general/quiz.png" alt="Bouy that solves a quiz" className='lg:w-64'/>
					</div>

					<div className="flex justify-center p-10">
						<button onClick={reset} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md py-3 px-6 shadow-xl">
							Try again!
						</button>
					</div>
				</>
			) : (
				<></>
			)}
		</section>
	)
}

export default Quiz
