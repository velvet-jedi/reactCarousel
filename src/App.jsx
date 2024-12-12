import "./App.css";
import ImageSlider from "./ImageSlider";

const carouselData = [
	{
		name: "Alice Johnson",
		img: "./images/alice.jpg",
		review: "Great service and friendly staff! Highly recommend.",
	},
	{
		name: "Bob Smith",
		img: "/images/bob.jpg",
		review: "Excellent experience from start to finish.",
	},
	{
		name: "Catherine Lee",
		img: "./images/catherine.jpg",
		review: "A wonderful place with fantastic amenities.",
	},
	{
		name: "David Brown",
		img: "/images/david.jpg",
		review: "Truly exceeded my expectations in every way.",
	},
	{
		name: "Emily Davis",
		img: "/images/emily.jpg",
		review: "A memorable visit with top-notch customer service.",
	},
	{
		name: "Frank Miller",
		img: "/images/frank.jpg",
		review: "Professional and courteous, a five-star experience.",
	},
	{
		name: "Grace Wilson",
		img: "/images/grace.jpg",
		review: "Absolutely loved it, will definitely come back.",
	},
	{
		name: "Henry White",
		img: "/images/henry.jpg",
		review: "An enjoyable stay with impeccable service.",
	},
	{
		name: "Isabella Martinez",
		img: "/images/isabella.jpg",
		review: "Outstanding attention to detail and care.",
	},
	{
		name: "Jack Thompson",
		img: "/images/jack.jpg",
		review: "A delightful experience with exceptional service.",
	},
	{
		name: "Karen Taylor",
		img: "/images/karen.jpg",
		review: "Highly recommend for a relaxing and pleasant stay.",
	},
	{
		name: "Liam Anderson",
		img: "/images/liam.jpg",
		review: "A perfect blend of luxury and comfort.",
	},
];

function App() {
	return (
		<>
			<ImageSlider data={carouselData}></ImageSlider>
		</>
	);
}

export default App;
