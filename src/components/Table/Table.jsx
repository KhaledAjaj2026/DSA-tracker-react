import './Table.css';

const dynamicItems = [
	{
		name: 'Dynof',
		description: 'weilds three axes.',
	},
	{
		name: 'Rivera',
		description: 'holds the ever-crystal.',
	},
	{
		name: 'Credulle',
		description: 'memorized the Greater Archives.',
	},
];

function Table() {
	return (
		<>
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
							{dynamicItems.map((item) => (
								<td key={item.name}>{item.name}</td>
							))}
						</tr>
					</tbody>
				</table>
			</section>
			{/* <div>
				{dynamicItems.map((item) => (
					<div key={item.name}>{item.name}</div>
				))}
			</div> */}
		</>
	);
}

export default Table;
