import './Table.css';

// const tableLocalData = [
// 	{
// 		number: 1,
// 		question: 'merge linked lists',
// 		source: 'LC #41',
// 		categories: 'linked-lists, two pointers',
// 		difficulty: 'hard',
// 		date: '2023-03-21',
// 		time: '73',
// 	},
// 	{
// 		number: 2,
// 		question: 'flatten array',
// 		source: 'CTCI #864',
// 		categories: 'array, string, nesting',
// 		difficulty: 'medium',
// 		date: '2022-11-12',
// 		time: '58',
// 	},
// 	{
// 		number: 3,
// 		question: 'In-Order Binary Tree Traversal',
// 		source: 'LC #1266',
// 		categories: 'tree, DFS, in-order, queue, recursion',
// 		difficulty: 'easy',
// 		date: '2023-01-03',
// 		time: '113',
// 	},
// ];

// localStorage.setItem('table-data', JSON.stringify(tableLocalData));

const tableData = localStorage.getItem('table-data')
	? JSON.parse(localStorage.getItem('table-data'))
	: [];

const renderTableData = () => {
	return tableData.map(
		({ number, question, source, categories, difficulty, date, time }) => {
			console.log('child: ' + question);
			return (
				<tr key={number}>
					<td>{number}</td>
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
				<tbody>{renderTableData()}</tbody>
			</table>
		</section>
	);
}
