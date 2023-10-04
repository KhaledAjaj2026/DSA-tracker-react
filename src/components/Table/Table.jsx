import './Table.css';

/** Variable holding parsed data in localStorage. Data is an array holding objects. */
const tableData = localStorage.getItem('table-data')
	? JSON.parse(localStorage.getItem('table-data'))
	: [];

/** Load table from localStorage on render. */
const renderTableData = () => {
	return tableData.map(
		({ question, source, categories, difficulty, date, time }, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{question}</td>
					<td>{source}</td>
					<td>{categories}</td>
					<td>{difficulty}</td>
					<td>{date}</td>
					<td>{time}</td>
				</tr>
			);
		}
	);
};

export default function Table() {
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
				<tbody className="table-body">{renderTableData()}</tbody>
			</table>
		</section>
	);
}
