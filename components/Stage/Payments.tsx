import Image from "next/image";

export default function Payments() {
  return (
    <div className="flex items-center justify-center px-8 py-8  shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Payments
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
		  We automate the payment process, guaranteeing security and transparency. 50% is made when signing and delivering the rented property, while the other 50% is made when receiving the property back.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/percentage.png"
            alt=""
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}