import Image from "next/image";
import Link from "next/link";

export default function Starting() {
	return (
	<div className="flex items-center justify-center  text-white px-8 py-32 shadow-2xl bg-black">
		<div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
			<div className="flex flex-col-reverse md:flex-row">
			<Image
			src="/snowboard.png"
			alt=""
			width={700}
			height={700}
			className="transition duration-700 delay-200 -translate-x-4 translate-y-3 hover:scale-125"
			/>
		</div>
		<div className="flex flex-col items-center">
			<h1 className="text-4xl text-left text-white font-bold md:text-center text-apple-system">
			RentEZ
		</h1>
		<p className="max-w-xl mx-auto mt-8 text-xl">
			RentEZ allows you easily rent high-quality second-hand sports equipment locally.
		</p>
		<p className="max-w-xl mx-auto mt-8 text-xl">
		Whether you're into surfing, kitesurfing, hiking, or other thrilling activities, RentEZ connects people making it simple and secure to access top-notch gear without the hefty price tag.
	</p>
		</div>
	</div>
	</div>
  );
}