import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const ImageSlider = ({ data }) => {
	const [imageIndex, setImageIndex] = useState(0); // state for active index

	const showPreviousImage = () => {
		setImageIndex(imageIndex === 0 ? data.length - 1 : imageIndex - 1);
	};

	const showNextImage = () => {
		setImageIndex(imageIndex === data.length - 1 ? 0 : imageIndex + 1);
	};

	return (
		<div>
			<a
				href="#after-image-slider-controls"
				className="skip-link"
			>
				Skip image slider controls
			</a>
			<section
				aria-label="image carousel"
				className="flex relative max-w-xl items-center"
			>
				{/* This is the main wrapper for the entire slider */}
				{/* so that children get placed absolutely in the center of it*/}
				{/* max-w-xl limits the maximum width of the slider */}

				{/* Left Arrow */}
				<button
					aria-label="View Previous Image"
					className="absolute left-8 z-10 p-3 bg-gray-300 text-black rounded-full"
					onClick={showPreviousImage}
				>
					<ArrowBigLeft aria-hidden />
				</button>

				{/* Contains the actual slider content */}
				{/* overflow-hidden prevents seeing content outside the slider's width */}
				{/* full width for the slider so that one card takes the view horizontally fully withtin a parent*/}
				<div className="flex overflow-hidden w-full items-center justify-center">
					{/* Sliding Mechanism */}
					<div
						style={{
							transform: `translateX(-${100 * imageIndex}%)`,
							transition: "transform 0.5s ease-in-out",
						}}
						className="flex w-full"
					>
						{data.map((d, index) => (
							// Each card is wrapped in a full-width div that centers it
							<div
								key={index}
								className="flex-shrink-0 w-[100%]  flex items-center justify-center"
							>
								{/* Card has a fixed width and height */}
								<div className="card w-[300px] h-[400px] bg-purple-100 rounded-xl text-black">
									<div className="h-56 rounded-t-xl flex justify-center bg-indigo-500 items-center">
										<img
											aria-hidden={imageIndex !== index}
											className="h-44 w-44 rounded-full object-cover"
											src={d.img}
											alt={`Testimonial from ${d.name}`}
										/>
									</div>
									<div className="flex flex-col items-center justify-center gap-4 text-center p-4">
										<p className="font-semibold text-xl">
											{d.name}
										</p>
										<p>{d.review}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Arrow */}
				<button
					aria-label="View Next Image"
					className="absolute right-8 z-10 p-3 bg-gray-300 text-black rounded-full"
					onClick={showNextImage}
				>
					<ArrowBigRight aria-hidden />
				</button>
				<div className="absolute flex translate-x-[-50%] bottom-[0.5rem] left-[50%]">
					{data.map((_, index) => (
						<button
							aria-label={`View Image ${index + 1}`}
							key={index}
							className="rounded-full dot"
							onClick={() => setImageIndex(index)}
						>
							{index === imageIndex ? (
								<CircleDot aria-hidden></CircleDot>
							) : (
								<Circle aria-hidden></Circle>
							)}
						</button>
					))}
				</div>
				<div id="after-image-slider-controls"></div>
			</section>
		</div>
	);
};

export default ImageSlider;
