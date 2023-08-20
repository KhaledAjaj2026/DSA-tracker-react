import './Insertion.css';
import Input from './Input/Input';
import { useEffect, useState } from 'react';

export default function Insertion() {
	/* State responsible for input of each table row. */
	const [input, setInput] = useState([]);
	/* Each state repsonsible for each input field. */
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

	/** Inserts state of each input element and updates 'input', triggering re-render. */
	const handleInput = () => {
		if (question && source && categories && difficulty && date && time) {
			setInput([
				{
					question: question,
					source: source,
					categories: categories,
					difficulty: difficulty,
					date: date,
					time: time,
				},
			]);
		}
	};
	/** Updates localStorage with data from 'input', triggers only when 'input' is changed. */
	useEffect(() => {
		if (input.length > 0) {
			const prevLocalData =
				JSON.parse(localStorage.getItem('table-data')) ?? [];
			prevLocalData.push(...input);
			localStorage.setItem('table-data', JSON.stringify(prevLocalData));
			location.reload();
		}
	}, [input]);

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
			<button id="enter-button" className="submit" onClick={handleInput}>
				Enter
			</button>
		</section>
	);
}
