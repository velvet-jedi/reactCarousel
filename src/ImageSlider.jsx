import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ImageSlider = ({ data }) => {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div className="flex justify-center gap-20 items-center">
			<div className="">
				<button>
					<ArrowBigLeft></ArrowBigLeft>
				</button>
			</div>
			<div className="">
				{/* {data.map((d, index) => ( */}
				<div className="card text-black bg-purple-100 h-[350px] rounded-xl">
					<div className="h-56 image rounded-t-xl flex justify-center bg-indigo-500 items-center">
						<img
							className="h-44 w-44 rounded-full"
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
				{/* ))} */}
			</div>
			<div className="">
				<button>
					<ArrowBigRight></ArrowBigRight>
				</button>
			</div>
		</div>
	);
};

export default ImageSlider;
