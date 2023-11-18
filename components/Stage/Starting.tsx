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
            width={500}
            height={500}
            className="transition duration-700 delay-200 -translate-x-4 translate-y-3 hover:scale-125"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            RentEZ
          </h1>
		<p className="max-w-xl mx-auto mt-8">
			RentEZ is a revolutionary used goods marketplace that empowers users to rent second-hand items locally.
		</p>
		  <p className="max-w-xl mx-auto mt-8">
		  Our dapp connects individuals, ensuring safe and swift transactions.
          </p>
          <div className="mt-16 ">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-center px-8 py-2 text-white bg-blue-400 rounded-full hover:bg-blue-800"
            >
              Social Media
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}