import './Deletion.css';

function Deletion() {
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
				></input>
				<button id="deletButton" className="submit" onClick="deleteRow()">
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
					onClick="clearData()"
				>
					Clear
				</button>
			</div>
		</section>
	);
}

export default Deletion;
