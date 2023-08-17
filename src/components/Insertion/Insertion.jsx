import './Insertion.css';
// import $ from 'jquery';

export default function Insertion() {
	return (
		<>
			<section id="insertion-section">
				<div className="input-fields">
					<div className="input-div">
						<label htmlFor="question">Question</label>
						<input
							id="question"
							name="question"
							type="text"
							placeholder="e.g. Reverse Array"
						/>
					</div>
					<div className="input-div">
						<label htmlFor="source">Source</label>
						<input
							id="source"
							name="source"
							type="text"
							placeholder="e.g. LeetCode #23"
						/>
					</div>
					<div className="input-div">
						<label htmlFor="categories">Categories</label>
						<input
							id="categories"
							name="categories"
							type="text"
							placeholder="e.g. array, DFS, linked-list"
						/>
					</div>
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
					<div className="input-div">
						<label htmlFor="date">Date</label>
						<input
							id="date"
							name="date"
							type="date"
							placeholder="e.g. 1/2/2023"
						/>
					</div>
					<div className="input-div">
						<label htmlFor="time">Time</label>
						<input id="time" name="time" type="number" placeholder="e.g. 60" />
					</div>
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
				<button id="enter-button" className="submit" onClick={'addRow'}>
					Enter
				</button>
			</section>
		</>
	);
}

// export default Insertion;
