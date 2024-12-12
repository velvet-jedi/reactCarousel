import React from "react";

const ImageSlider = ({ data }) => {
	return (
		<div>
			<div className="">
        {data.map((d, index) => (
            <div key={index} className="card text-black bg-purple-100 h-[350px] rounded-xl">
                <div className="h-56 image rounded-t-xl flex justify-center bg-indigo-500 items-center">
                    <img
                        className="h-44 w-44 rounded-full"
                        src={d.img}
                        alt="testimonial image"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="font-semibold text-xl">{d.name}</p>
                    <p>{d.review}</p>
                </div>
            </div>
        ))}
    </div>
		</div>
	);
};

export default ImageSlider;
