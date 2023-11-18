import Image from "next/image";

export default function Whatcanbecol() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-1">
			<div className="mx-3 text-center">
				<p className="font-bold text-center text-xl py-8"> WAYS TO </p>
				<li className=" text-justify pb-4">Value comes in many ways. That's why we offer a wide range of collateral options, giving you the flexibility to choose what suits you best. </li>
				<li className=" text-justify pb-4">Your collateral can be anything from cryptocurrencies to other valuable assets like NFTS</li>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/value.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
  );
}