import { useEffect, useRef, useState } from "react";

function EffectHooks() {
	const [inputA, setInputA] = useState(0);
	const [inputB, setInputB] = useState(0);
	const [hasil, setHasil] = useState(0);
	const [show, setShow] = useState(false);

	// const [mount, setMount] = useState(false);
	// const ref = useRef(false);

	// useEffect(() => {
	//   if (ref.current) {
	//     setHasil(inputA + inputB);
	//     setShow(true);
	//   } else {
	//     ref.current = true;
	//   }
	// }, [inputA, inputB]);

	useEffect(() => {
		const has = inputA + inputB;
		setHasil(inputA + inputB);

		if (has > 0) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [inputA, inputB]);

	return (
		<div>
			<input
				value={inputA}
				onChange={(e) => setInputA(parseInt(e.currentTarget.value || 0))}
				className="input input-bordered w-full max-w-xs mb-2"
			/>

			<input
				value={inputB}
				onChange={(e) => setInputB(parseInt(e.currentTarget.value || 0))}
				className="input input-bordered w-full max-w-xs"
			/>

			{show && (
				<>
					<p>Hasil: {hasil}</p>
					<p>Hasil: {inputA + inputB}</p>
				</>
			)}
		</div>
	);
}


export default EffectHooks;