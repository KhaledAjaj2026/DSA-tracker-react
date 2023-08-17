import { useEffect, useState } from 'react';

export default function Form1() {
	// hook for loading name in localStorage, either a name or an empty string is loaded.
	const [name, setName] = useState(() => {
		const savedName = JSON.parse(localStorage.getItem('input-name'));
		return savedName || '';
	});
	// hook used for new input, holds new name in state
	const [input, setInput] = useState('');
	// handles input typed into field, sets state of 'name' with input.
	const handleChange = (event) => {
		setInput(event.target.value);
	};
	// handles changing of localStorage name, sets the name with new input.
	const handleInput = () => {
		setName(input);
	};
	// hook that triggers only when 'name' state changes, which is when updating localStorage.
	useEffect(() => {
		localStorage.setItem('input-name', JSON.stringify(name));
	}, [name]);

	return (
		<form>
			<input
				type="text"
				placeholder="Enter name"
				aria-label="nameentry"
				onChange={handleChange}
			/>
			<button onClick={handleInput}>Enter</button>
		</form>
	);
}
