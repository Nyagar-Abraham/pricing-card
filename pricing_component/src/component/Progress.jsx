/* eslint-disable react/prop-types */

function ProgressBar({ value, max, onChange }) {
	function handleMouseMove(e) {
		const { left, width } = e.currentTarget.getBoundingClientRect();
		const newValue = Math.round(((e.clientX - left) / width) * max);
		onChange(newValue);
	}

	function handleClick(e) {
		handleMouseMove(e);
	}

	return (
		<div
			className="w-full bg-gray-300 rounded-full h-2 cursor-pointer relative"
			onMouseMove={handleMouseMove}
			onClick={handleClick}
		>
			<div
				className="bg-cyan-600 h-full rounded-full transition-all duration-300"
				style={{ width: `${(value / max) * 100}%` }}
			/>
			<div
				className="absolute left-0 top-0 h-full flex items-center justify-center"
				style={{ width: `${(value / max) * 100}%` }}
			>
				<span className="text-white text-xs">{}</span>
			</div>
		</div>
	);
}

export default ProgressBar;

// import PropTypes from 'prop-types';
// import Svg from './Svg';

// const Progress = ({ value, max }) => {
// 	const percentage = (value / max) * 100;

// 	function handleMouseOver(e) {
// 		const x = e.target.getBoundingClientRect();

// 		console.log(x);
// 	}

// 	return (
// 		<div
// 			onMouseMove={handleMouseOver}
// 			className="w-full relative bg-cyan-100 rounded-full h-2 "
// 		>
// 			<div
// 				className="bg-cyan-500 h-full text-center text-xs text-white"
// 				style={{ width: `${percentage}%` }}
// 			>
// 				<button className=" absolute flex items-center justify-center -top-2/3 h-6 w-6 rounded-full bg-cyan-600">
// 					<Svg name="slider" />
// 				</button>

// 				{/* {percentage.toFixed(0)}% */}
// 			</div>
// 		</div>
// 	);
// };

// Progress.propTypes = {
// 	value: PropTypes.number.isRequired,
// 	max: PropTypes.number.isRequired,
// };

// export default Progress;
