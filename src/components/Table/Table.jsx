import './Table.css';

// load localStorage into table with dynamically-created elements.

function Table() {
	return (
		<section id="table-section">
			<table id="problem-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Question</th>
						<th>Source</th>
						<th>Categories</th>
						<th>Difficulty</th>
						<th>Date</th>
						<th>Time Spent</th>
					</tr>
				</thead>
			</table>
		</section>
	);
}

export default Table;
