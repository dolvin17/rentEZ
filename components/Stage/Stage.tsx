import Link from "next/link";
import Image from "next/image";

export default function Stage() {
	return (
		<div className="grid flex-wrap items-center justify-center grid-cols-2 px-8 pt-24 bg-her-pink sm:pt-32">
			<div className="flex flex-col items-center justify-center">
				<div className=" text-7xl font-bold px-16 text-right -translate-y-8 skew-x-6 text-black shadow-color-black">
				Redefining P2P Rental
					</div>
						<div className="max-w-lg mt-4  text-black shadow-color-black sm:text-2xl">
						Join the Future of Renting with Crypto Payments and Reputation NFTs
							<p className="text-sm mt-4">
							RentEZ is a revolutionary used goods marketplace that empowers users to rent second-hand items locally.
							</p>
							<p className="text-sm mt-4" >
							The decentralized app (dapp) connects individuals, ensuring safe and swift transactions.
							</p>
							<form className="my-16 sm:my-24 items-center justify-center flex">
							<Link
							href="/comunidad"
							target="_blank"
							className="px-5 py-3 font-medium text-white transition bg-black rounded-full md:text-xl hover:bg-blue-400">
							Know more!
							</Link>
							</form>
							
						</div>
					</div>
				<div className="static flex flex-col items-center justify-center">
			<div className="flex flex-row ">
		<div className="transition duration-700 delay-200 -translate-x-4 translate-y-3 hover:scale-150">
		<Image
		src="/rentez1.png"
		alt=""
		width={600}
		height={600}
		/>
		 
		</div>
		</div>
		</div>
		</div>
);
}