import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ImageSlider = ({ data }) => {
	const [imageIndex, setImageIndex] = useState(0);

	const showPreviousImage = () => {
		if (imageIndex === 0) {
			setImageIndex(data.length - 1);
		} else {
			setImageIndex(imageIndex - 1);
		}
	};
	const showNextImage = () => {
		if (imageIndex === data.length - 1) {
			setImageIndex(0);
		} else {
			setImageIndex(imageIndex + 1);
		}
	};

	return (
		<div className="flex justify-center gap-20 items-center">
			<div className="">
				<button onClick={showPreviousImage}>
					<ArrowBigLeft></ArrowBigLeft>
				</button>
			</div>
			<div className="">
				<div className=" card text-black bg-purple-100 h-[400px] rounded-xl">
					<div className="h-64 image rounded-t-xl flex justify-center bg-indigo-500 items-center">
						<img
							className="h-52 w-52 rounded-full"
							src={data[imageIndex].img}
							alt="testimonial image"
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-4 p-4">
						<p className="font-semibold text-xl">
							{data[imageIndex].name}
						</p>
						<p>{data[imageIndex].review}</p>
					</div>
				</div>
			</div>
			<div className="">
				<button onClick={showNextImage}>
					<ArrowBigRight></ArrowBigRight>
				</button>
			</div>
		</div>
	);
};

export default ImageSlider;
