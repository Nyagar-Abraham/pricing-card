/* eslint-disable react/prop-types */
const Toggle = ({ isOn, handleToggle }) => {
	return (
		<div
			className={`w-12 h-5 flex items-center  rounded-full p-1 cursor-pointer ${
				isOn ? 'bg-cyan-500' : 'bg-cyan-200'
			}`}
			onClick={handleToggle}
		>
			<div
				className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
					isOn ? 'translate-x-6' : ''
				}`}
			></div>
		</div>
	);
};

export default Toggle;
