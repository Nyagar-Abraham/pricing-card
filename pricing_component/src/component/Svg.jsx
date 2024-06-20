import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
function Svg({ name }) {
	const [width, setWidth] = useState(() => window.innerWidth);
	useEffect(() => {
		function callback() {
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', callback);

		return () => {
			window.removeEventListener('resize', callback);
		};
	}, []);

	if (name === 'pattern')
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width={width} height="449">
				<path
					fill="#F1F5FE"
					fill-rule="evenodd"
					d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
				/>
			</svg>
		);

	if (name === 'check')
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
				<path
					fill="none"
					stroke="#10D8C4"
					stroke-width="2"
					d="M1 4.134l1.907 1.908L7.949 1"
				/>
			</svg>
		);

	if (name === 'slider')
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="13">
				<g fill="#a5f3fc" fill-rule="evenodd">
					<path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
				</g>
			</svg>
		);

	if (name === 'circle')
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
				<g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
					<circle cx="63" cy="82" r="62.5" />
					<circle cx="105" cy="41" r="40.5" />
				</g>
			</svg>
		);
}

export default Svg;
