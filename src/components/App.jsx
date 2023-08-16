import './App.css';
import Insertion from './Insertion/Insertion';
import Table from './Table/Table';
import Deletion from './Deletion/Deletion';

function App() {
	return (
		<>
			<header>
				<h1>DSA Progress Tracker</h1>
				<h2>
					Keep track of your progress in data-structure and algorithm problems
				</h2>
			</header>
			<Insertion />
			<Table />
			<Deletion />
		</>
	);
}

export default App;
