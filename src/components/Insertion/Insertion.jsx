import './Insertion.css';
import Input from './Input/Input';
import { useEffect, useState } from 'react';

export default function Insertion() {
	/** State responsible for input of each table row. */
	const [input, setInput] = useState([]);
	/** Data repsonsible for each input field. */
	const inputData = new Map();
	/** Retrieve data input according to input-field id and update it. */
	const handleDataInput = (event) => {
		inputData.set(event.target.id, event.target.value);
	};

	/** Check that all input fields full, then update 'input', triggering re-render. */
	const handleInput = () => {
		let numberOfInputs = 0;
		inputData.forEach((value) => {
			if (value) numberOfInputs++;
		});
		if (numberOfInputs === 6) {
			setInput([
				{
					question: inputData.get('question'),
					source: inputData.get('source'),
					categories: inputData.get('categories'),
					difficulty: inputData.get('difficulty'),
					date: inputData.get('date'),
					time: inputData.get('time'),
				},
			]);
		}
	};
	/** Update localStorage with data from 'input', trigger only when 'input' is changed. */
	useEffect(() => {
		// if-statement responsible for preventing infinite re-renders for 'input' state.
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
						handleChange={handleDataInput}
					/>
					<Input
						identity={'source'}
						label={'Source'}
						type={'text'}
						placeholder={'e.g. LeetCode #23'}
						handleChange={handleDataInput}
					/>
					<Input
						identity={'categories'}
						label={'Categories'}
						type={'text'}
						placeholder={'e.g. array, DFS, linked-list'}
						handleChange={handleDataInput}
					/>
				</div>
				<div className="input-right">
					<div className="input-div">
						<label htmlFor="difficulty">Difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							defaultValue="none-d"
							onChange={handleDataInput}
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
						handleChange={handleDataInput}
					/>
					<Input
						identity={'time'}
						label={'Time'}
						type={'number'}
						placeholder={'e.g. 60'}
						handleChange={handleDataInput}
					/>
				</div>
			</div>
			<button id="enter-button" className="submit" onClick={handleInput}>
				Enter
			</button>
		</section>
	);
}
