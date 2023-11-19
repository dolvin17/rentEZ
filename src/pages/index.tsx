import Navigation from "../../components/Navigation/Navigation";
import Stage from "../../components/Stage/Stage";
import Starting from "../../components/Stage/Starting";
import Howitworks from "../../components/Stage/Howitworks";
import Benefits from "../../components/Stage/Benefits";
import Colateral from "../../components/Stage/Colateral";
import Cards from "../../components/Products/Cards";


export default function Home() {
	return (
		<>
		<Navigation />
		<Stage/>
		<Starting />
		<Howitworks />
		<Colateral />
		<Benefits />
		<Cards />
	
	</>
	);
};
