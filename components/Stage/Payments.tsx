import Image from "next/image";

export default function Payments() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
			<div className="mx-3 text-center">
				<p className="font-bold text-center text-xl py-8">PAYMENTS</p>
				<li className="text-justify pb-4">Our system automates payments, providing security and transparency.</li>
				<li className="text-justify pb-4">50% payment upon signing and delivering the property, and 50% upon property return.</li>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/payments.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
	);
}