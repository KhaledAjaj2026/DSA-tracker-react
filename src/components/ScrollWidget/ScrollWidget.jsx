import './ScrollWidget.css';

const scrollUp = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

/** TODO:

[  ] make element and style.
[  ] appear when scroll lower than top.
[ √ ] scroll page to top.
[  ] disappear when scroll at top or within parameters.
*/
export default function ScrollWidget() {
	return (
		<div id="container_scroll-widget">
			<img
				className="arrow-button hidden"
				src="src/assets/arrow-up.svg"
				width={80}
				height={80}
				alt="scroll to top"
				onClick={scrollUp}
			/>
		</div>
	);
}
