import './Insertion.css';
import Input from './Input/Input';
import { useState } from 'react';
// import $ from 'jquery';

export default function Insertion() {
	// const tableData = JSON.parse(localStorage.getItem('table-data')) ?? [];

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
		if (question && source && categories && difficulty && date && time) {
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
			console.log('input set');
			console.log('input: ' + JSON.stringify(input));
			if (input.length) {
				const prevLocalData = localStorage.getItem('table-data') ?? [];
				console.log('prevLocalData B4: ' + JSON.stringify(prevLocalData));
				prevLocalData.push(input[input.length - 1]);
				console.log('prevLocalData AfT: ' + JSON.stringify(prevLocalData));
				localStorage.setItem('table-data', JSON.stringify(prevLocalData));
				setInput([]);
				window.dispatchEvent(new Event('storage'));
			}
		}
	};

	// let localTableData;
	// $('.table-body').append(localTableData);

	// const renderTableData = () => {
	// 	console.log('RENDERED');
	// 	localTableData = tableData.map(
	// 		({ number, question, source, categories, difficulty, date, time }) => {
	// 			return (
	// 				<tr key={number}>
	// 					<td>{number}</td>
	// 					<td>{question}</td>
	// 					<td>{source}</td>
	// 					<td>{categories}</td>
	// 					<td>{difficulty}</td>
	// 					<td>{date}</td>
	// 					<td>{time}</td>
	// 				</tr>
	// 			);
	// 		}
	// 	);
	// };

	return (
		<section id="insertion-section">
			<div className="input-fields">
				<div className="input-left">
					<Input
						identity={'question'}
						label={'Question'}
						type={'text'}
						placeholder={'e.g. Reverse Array'}
						handleChange={handleQuestion}
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
