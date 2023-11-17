import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
		<div className="bg-white" >
		<div className="flex flex-row mt-4 flex-wrap items-center justify-center w-full gap-12 !z-50 border drop-shadow-lg bg-black backdrop-blur-lg border-white  h-[80px] px-8 mx-auto rounded-full lg:max-w-[54rem]">
			<Head>
				<title className="text-center">Rentez</title>
				<link rel="icon" href="/favicons.ico" />
			</Head>
						<Image
							src="/logo.svg"
							alt="Rentez Logo"
							height="50"
							width="70"/>
							<w3m-network-button/>
							<w3m-button />
			</div>
			<main className="">
				<div className="">
					<div className="">
						<h1>RentEZ</h1>
						<div className="">
							<ul>
								RentEZ is an innovative web platform that makes it easy
								to create and manage rental contracts between individuals,
								taking the experience to a new level by incorporating payments
								in cryptocurrencies and NFTs to build a strong community 
								reputation.
							</ul>
						</div>
					</div>
					<div className="">
					</div>
				</div>
				
			</main>
			</div>
		</>
	);
};
