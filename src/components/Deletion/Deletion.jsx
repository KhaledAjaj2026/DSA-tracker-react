import { useState } from 'react';
import './Deletion.css';

const tableData = JSON.parse(localStorage.getItem('table-data'));

const deleteRow = (rowNum) => {
	if (!tableData) {
		alert('No rows to delete.');
	} else if (rowNum < 1 || rowNum > tableData.length) {
		alert('Invalid row number.');
	} else {
		const tempStorage = JSON.parse(localStorage.getItem('table-data'));
		tempStorage.splice(rowNum - 1, 1);
		localStorage.setItem('table-data', JSON.stringify(tempStorage));
		location.reload();
	}
};

const clearAllData = () => {
	const clearChoice = prompt(
		'Are you sure you want to clear all data? Type "Yes" to continue.'
	);
	if (clearChoice === 'Yes' || clearChoice === 'yes') {
		localStorage.clear();
		window.scrollTo(0, 0);
		location.reload();
		alert('Data cleared.');
	} else if (clearChoice === null) {
		alert('Clear cancelled.');
	} else {
		alert('Incorrect input, clear cancelled.');
	}
};

function Deletion() {
	const [row, setRow] = useState(0);

	const handleRow = (event) => {
		setRow(parseInt(event.target.value));
	};
	return (
		<section id="deletion-section">
			<div className="deleteRow-div">
				<label className="delete-label" htmlFor="deleteRow">
					Problem number to delete:
				</label>
				<input
					id="deleteRow"
					name="deleteRow"
					type="number"
					placeholder="0"
					onChange={handleRow}
				></input>
				<button
					id="deletButton"
					className="submit"
					onClick={() => deleteRow(row)}
				>
					Delete Row
				</button>
			</div>
			<div className="deleteRow-div">
				<label className="clear-label" htmlFor="clearButton">
					Clear All Data:
				</label>
				<button
					id="clearButton"
					name="clearButton"
					className="submit"
					onClick={clearAllData}
				>
					Clear
				</button>
			</div>
		</section>
	);
}

export default Deletion;
