import Image from "next/image";

export default function Garantee() {
  return (
	<>
		<div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-1">
			<div className="mx-3 text-center">
				<p className="font-bold text-center text-xl py-8"> COLATERAL </p>
				<li className=" text-justify pb-4">Improve your renting costs adding collateral, paving the way for reduced rental fees and exclusive perks.</li>
				<li className=" text-justify pb-4">The collateral you provide is like a deposit of trust. You don't lose it, it's just temporarily held to support the transaction.  </li>
				
			</div>
			<div className="flex justify-center">
			<Image
			className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
			src="/colateral.svg"
			alt=""
			width={150}
			height={150}
			/>
		</div>
		</div>
	</>
  );
}