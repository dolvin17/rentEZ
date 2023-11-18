import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Whyus from "../Whyus";
import Products from "../Products";

export default function Navigation() {

  const LINKS = (
    <Fragment>
		<Whyus />
		<Products />
		<w3m-network-button/>
		<w3m-button />
    </Fragment>
  );

  return (
	<div className="fixed w-full top-4 flex justify-center z-50">
		<div className="flex items-center mt-4 gap-12 text-white bg-black backdrop-blur-lg border border-white h-20 px-8 mx-auto rounded-full max-w-[54rem]">
        <Link className="flex-shrink-0 max-w-[5rem]" href="/">
          <Image
            src="/logo.svg"
			alt="Rentez Logo"
			height="50"
			width="70"/>
        </Link>
        {LINKS}
      </div>
	  </div>
  );
}