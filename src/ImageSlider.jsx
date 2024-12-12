import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ImageSlider = ({ data }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const showPreviousImage = () => {
		setImageIndex(imageIndex === 0 ? data.length - 1 : imageIndex - 1);
	};

	const showNextImage = () => {
		setImageIndex(imageIndex === data.length - 1 ? 0 : imageIndex + 1);
	};

	return (
		<div className="flex relative w-full max-w-lg h-full items-center justify-center">
			{/* Left Arrow */}
			<button
				className="absolute left-2 z-10 p-2 bg-gray-300 text-black rounded-full"
				onClick={showPreviousImage}
			>
				<ArrowBigLeft />
			</button>

			{/* Slider Container */}
			<div className="w-full h-full flex gap-4 overflow-hidden">
				{data.map((d, index) => (
					<div
						key={index}
						style={{
							transform: `translateX(-${100 * imageIndex}%)`,
							transition: "transform 0.5s ease-in-out",
						}}
						className="card flex-shrink-0 w-[300px] text-black bg-purple-100 h-[400px] rounded-xl"
					>
						<div className="h-56 image rounded-t-xl flex justify-center bg-indigo-500 items-center">
							<img
								className={`h-44 w-44 rounded-full object-cover`}
								src={d.img}
								alt={`Testimonial from ${d.name}`}
							/>
						</div>
						<div className="flex flex-col items-center justify-center gap-4 text-center p-4">
							<p className="font-semibold text-xl">{d.name}</p>
							<p>{d.review}</p>
						</div>
					</div>
				))}
			</div>

			{/* Right Arrow */}
			<button
				className="absolute right-2 z-10 p-2 bg-gray-300 text-black rounded-full"
				onClick={showNextImage}
			>
				<ArrowBigRight />
			</button>
		</div>
	);
};

export default ImageSlider;
