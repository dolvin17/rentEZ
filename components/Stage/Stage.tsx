import Link from "next/link";
import Image from "next/image";

export default function Stage() {
	return (
		<div className="grid flex-wrap items-center justify-center grid-cols-2 px-8 pt-24 bg-her-pink sm:pt-36">
			<div className="flex flex-col items-center justify-center">
				<div className="mt-8 text-xl font-bold text-center text-black sm:text-5xl shadow-color-black">
					Don't sell your products
					</div>
						<div className="max-w-lg mt-4 text-center text-black shadow-color-black sm:text-2xl">
							Win money renting them, you don't have to trust nobody, everything happens on blockchain
							<div className="flex flex-row gap-8 items-center justify-center">
							<form className="my-16 sm:my-24">
							<Link
							href="/comunidad"
							target="_blank"
							className="px-5 py-3 font-medium text-white transition bg-black rounded-full md:text-xl hover:bg-blue-400">
							Know more!
							</Link>
							</form>
							<form className="my-16 sm:my-24">
							<Link
							href="/comunidad"
							target="_blank"
							className="px-5 py-3 font-medium text-white transition bg-black rounded-full md:text-xl hover:bg-blue-400">
							Upload product
							</Link>
							</form>
							</div>
							
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