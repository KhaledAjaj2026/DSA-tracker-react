import './ScrollWidget.css';
import $ from 'jquery';

document.addEventListener('scroll', () => {
	let lastKnownScrollPosition = window.scrollY;
	console.log(lastKnownScrollPosition);

	if (lastKnownScrollPosition > 80) {
		showArrow();
	} else if (
		lastKnownScrollPosition <= 80 &&
		$('.arrow-down').css('opacity') == 1
	) {
		hideArrow();
	}
});

const showArrow = () => {
	$('.arrow-down').css('animation', '0.3s ease-in forwards showArrow');
};

const hideArrow = () => {
	$('.arrow-down').css('animation', '0.3s ease-in forwards hideArrow');
};

const scrollUp = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

export default function ScrollWidget() {
	return (
		<button
			id="container_scroll-widget"
			className="arrow-down"
			onClick={() => {
				scrollUp();
			}}
		>
			<img
				src="src/assets/arrow-up.svg"
				width={80}
				height={80}
				alt="scroll to top"
			/>
		</button>
	);
}
