import './Insertion.css';
import Input from './Input/Input';
// import $ from 'jquery';

export default function Insertion() {
	return (
		<section id="insertion-section">
			<div className="input-fields">
				<Input
					identity={'question'}
					label={'Question'}
					type={'text'}
					placeholder={'e.g. Reverse Array'}
				/>
				<Input
					identity={'source'}
					label={'Source'}
					type={'text'}
					placeholder={'e.g. LeetCode #23'}
				/>
				<Input
					identity={'categories'}
					label={'Categories'}
					type={'text'}
					placeholder={'e.g. array, DFS, linked-list'}
				/>
				<div className="input-div">
					<label htmlFor="difficulty">Difficulty</label>
					<select name="difficulty" id="difficulty" defaultValue="none-d">
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
				/>
				<Input
					identity={'time'}
					label={'Time'}
					type={'number'}
					placeholder={'e.g. 60'}
				/>
			</div>
			<div className="categories-selected">
				<p id="categories-selected_title">Selected Categories (max 5):</p>
				<div id="item_window">
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
					<p>Strongly Connected Component</p>
				</div>
			</div>
			<button id="enter-button" className="submit">
				Enter
			</button>
		</section>
	);
}
