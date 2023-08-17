import './Table.css';

// const tableData = [
// 	{
// 		number: 1,
// 		question: 'merge linked lists',
// 		source: 'LC #41',
// 		categories: 'linked-lists, two pointers',
// 		date: '2023-03-21',
// 		time: '73',
// 	},
// 	{
// 		number: 2,
// 		question: 'flatten array',
// 		source: 'CTCI #864',
// 		categories: 'array, string, nesting',
// 		date: '2022-11-12',
// 		time: '58',
// 	},
// 	{
// 		number: 3,
// 		question: 'In-Order Binary Tree Traversal',
// 		source: 'LC #1266',
// 		categories: 'tree, DFS, in-order, queue, recursion',
// 		date: '2023-01-03',
// 		time: '113',
// 	},
// ];

// localStorage.setItem('table-data', JSON.stringify(tableData));

const tableData = localStorage.getItem('table-data')
	? JSON.parse(localStorage.getItem('table-data'))
	: [];

console.log('localStorage: ' + JSON.stringify(tableData));

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
				<tbody>
					<tr>
						{Object.keys(tableData).forEach((parent) => {
							console.log('parent: ' + parent);
							Object.values(tableData[parent]).map((child) => {
								console.log('child: ' + child);
								<td key={child}>{child}</td>;
							});
						})}
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default Table;
