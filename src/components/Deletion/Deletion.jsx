import { useState } from 'react';
import './Deletion.css';

const tableData = JSON.parse(localStorage.getItem('table-data'));

const deleteRow = (rowNum) => {
	if (rowNum < 1 || rowNum > tableData.length) {
		alert('Invalid row number.');
	} else {
		const tempStorage = JSON.parse(localStorage.getItem('table-data'));
		tempStorage.splice(rowNum - 1, 1);
		localStorage.setItem('table-data', JSON.stringify(tempStorage));
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
				<button id="clearButton" name="clearButton" className="submit">
					Clear
				</button>
			</div>
		</section>
	);
}

export default Deletion;
