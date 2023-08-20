import './Table.css';

/* test data for populating localStorage. */
// const tableLocalData = [
// 	{
// 		question: 'merge linked lists',
// 		source: 'LC #41',
// 		categories: 'linked-lists, two pointers',
// 		difficulty: 'hard',
// 		date: '2023-03-21',
// 		time: '73',
// 	},
// 	{
// 		question: 'flatten array',
// 		source: 'CTCI #864',
// 		categories: 'array, string, nesting',
// 		difficulty: 'medium',
// 		date: '2022-11-12',
// 		time: '58',
// 	},
// 	{
// 		question: 'In-Order Binary Tree Traversal',
// 		source: 'LC #1266',
// 		categories: 'tree, DFS, in-order, queue, recursion',
// 		difficulty: 'easy',
// 		date: '2023-01-03',
// 		time: '113',
// 	},
// ];

// localStorage.setItem('table-data', JSON.stringify(tableLocalData));
/* end test data */

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
