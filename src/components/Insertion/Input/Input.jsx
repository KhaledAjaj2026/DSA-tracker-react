/* eslint-disable react/prop-types */
import './Input.css';

export default function Input({ identity, label, type, placeholder }) {
	return (
		<div className="input-div">
			<label htmlFor={identity}>{label}</label>
			<input
				id={identity}
				name={identity}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
}