import Calculator from "@components/Calculator/Calculator";

const Home = (props) => {
	// console.log(props);
	return (
		<div>
			<Calculator props={props} />
		</div>
	)
}

export default Home;