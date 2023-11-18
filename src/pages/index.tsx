import Head from "next/head";
import Image from "next/image";
import Whyus from "../../components/Whyus";
import Products from "../../components/Products";
import Navigation from "../../components/Navigation/Navigation";
import Stage from "../../components/Stage/Stage";
import Starting from "../../components/Stage/Starting";
import Payments from "../../components/Stage/Payments";


export default function Home() {
	return (
		<>
		<Navigation />
		<Stage/>
		<Starting />
		<Payments />
	
	</>
	);
};
