import { useState } from 'react';
import Svg from './component/Svg';
import Toggle from './component/Toggle';
import ProgressBar from './component/Progress';

function App() {
	const [isOn, setIsOn] = useState();
	const [value, setValue] = useState();

	function handleToggle() {
		setIsOn((isOn) => !isOn);
		setValue(0);
	}
	function handleChange(value) {
		setValue(value);
	}

	return (
		<div className="relative w-full">
			<Svg name="pattern" />
			<div className="w-4/5 md:w-6/12 mx-auto text-cyan-950 absolute left-1/2 -translate-x-1/2 top-[6rem] p-2 ">
				<div className="text-center">
					<h1 className="text-2xl font-semibold ">
						Simple, traffic-based pricing
					</h1>
					<p className="text-xs text-cyan-700">
						Sign-up for our 30-day trial. No credit card required.{' '}
					</p>
				</div>
				{/* card */}
				<div className="bg-white p-4 rounded-md mt-16 shadow-md">
					{/* head */}
					<div className="flex justify-between items-center text-cyan-800 font-semibold ">
						<p className="text-xs uppercase tracking-wide "> 100k Pageviews</p>

						<p className="text-sm font-normal flex items-center ">
							<strong className="text-2xl mr-1 text-gray-900">${value}</strong>{' '}
							/month
						</p>
					</div>
					{/* slider */}
					<div className="py-10">
						<ProgressBar
							value={value}
							max={!isOn ? 1000 : 5000}
							onChange={handleChange}
						/>
					</div>
					<div className="flex  gap-2 items-center justify-center text-xs sm:text-sm border-b-[1px] border-cyan-100 pb-10 text-nowrap flex-wrap">
						<p
							className={`${
								!isOn && ' bg-cyan-600 text-cyan-50'
							}  px-2 rounded-full transition-all duration-300  font-semibold py-[1px]`}
						>
							Monthly Billing
						</p>
						<Toggle isOn={isOn} handleToggle={handleToggle} />
						<p
							className={`${
								isOn && ' bg-cyan-600 text-cyan-50'
							}  px-2 rounded-full transition-all duration-300 font-semibold py-[1px]`}
						>
							Yearly Billing{' '}
						</p>
						<p className="bg-red-600 text-red-50 px-2 rounded-full py-[1px]">
							25% discount
						</p>
					</div>
					{/* list */}
					<div className="grid sm:grid-cols-2 mt-4 p-2">
						<ul className="flex  flex-col gap-2 items-center sm:items-start ">
							<li className="flex gap-2 items-center">
								<Svg name="check" />
								<span className="text-sm text-cyan-600">
									Unlimited websites
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<Svg name="check" />
								<span className="text-sm text-cyan-600">
									100% data ownership
								</span>
							</li>
							<li className="flex gap-2 items-center">
								<Svg name="check" />
								<span className="text-sm text-cyan-600">Email reports</span>
							</li>
						</ul>
						<div className="flex items-center justify-center py-5">
							<button className="bg-cyan-950 text-cyan-100 px-4 p-1 rounded-full hover:bg-cyan-800 transition-all hover:text-cyan-50">
								Start my trial
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Simple, traffic-based pricing
// Sign-up for our 30-day trial. No credit card required.

// Pageviews
// $ /month

// Monthly Billing
// Yearly Billing 25% discount

// Unlimited websites
// 100% data ownership
// Email reports

// Start my trial

export default App;
