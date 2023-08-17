import './App.css';
import Form1 from './Form1/Form1';
import Insertion from './Insertion/Insertion';
import Table from './Table/Table';
import Deletion from './Deletion/Deletion';

export default function App() {
	return (
		<>
			<header>
				<h1>DSA Progress Tracker</h1>
				<h2>
					Keep track of your progress in data-structure and algorithm problems
				</h2>
			</header>
			<Form1 />
			<Insertion />
			<Table />
			<Deletion />
		</>
	);
}
