import './ScrollWidget.css';
import $ from 'jquery';

document.addEventListener('scroll', () => {
	let lastKnownScrollPosition = window.scrollY;

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
			<svg
				width="80px"
				height="80px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.15"
					d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
					fill="none"
				/>
				<path
					d="M12 7V17M12 7L16 11M12 7L8 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
					stroke="#dedede"
					strokeWidth="1"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}
