import './Insertion.css';
import Input from './Input/Input';
import { useState } from 'react';
// import $ from 'jquery';

export default function Insertion() {
	const [input, setInput] = useState([]);
	const [question, setQuestion] = useState('');
	const [source, setSource] = useState('');
	const [categories, setCategories] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');

	const handleQuestion = (event) => {
		setQuestion(event.target.value);
	};
	const handleSource = (event) => {
		setSource(event.target.value);
	};
	const handleCategories = (event) => {
		setCategories(event.target.value);
	};
	const handleDifficulty = (event) => {
		setDifficulty(event.target.value);
	};
	const handleDate = (event) => {
		setDate(event.target.value);
	};
	const handleTime = (event) => {
		setTime(event.target.value);
	};

	const handleInput = () => {
		setInput([
			...input,
			{
				question: question,
				source: source,
				categories: categories,
				difficulty: difficulty,
				date: date,
				time: time,
			},
		]);
	};
	return (
		<section id="insertion-section">
			<div className="input-fields">
				<div className="input-left">
					<Input
						identity={'question'}
						label={'Question'}
						type={'text'}
						placeholder={'e.g. Reverse Array'}
						handleChange={handleQuestion.bind(this)}
					/>
					<Input
						identity={'source'}
						label={'Source'}
						type={'text'}
						placeholder={'e.g. LeetCode #23'}
						handleChange={handleSource.bind(this)}
					/>
					<Input
						identity={'categories'}
						label={'Categories'}
						type={'text'}
						placeholder={'e.g. array, DFS, linked-list'}
						handleChange={handleCategories.bind(this)}
					/>
				</div>
				<div className="input-right">
					<div className="input-div">
						<label htmlFor="difficulty">Difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							defaultValue="none-d"
							onChange={handleDifficulty}
						>
							<option value="none-d" disabled>
								Select difficulty
							</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>
					<Input
						identity={'date'}
						label={'Date'}
						type={'date'}
						placeholder={'e.g. 1/2/2023'}
						handleChange={handleDate.bind(this)}
					/>
					<Input
						identity={'time'}
						label={'Time'}
						type={'number'}
						placeholder={'e.g. 60'}
						handleChange={handleTime.bind(this)}
					/>
				</div>
			</div>
			{/* <div className="categories-selected">
				<p id="categories-selected_title">Selected Categories (max 5):</p>
				<div id="item_window">
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
				</div>
			</div> */}
			<button id="enter-button" className="submit" onClick={handleInput}>
				Enter
			</button>
		</section>
	);
}
