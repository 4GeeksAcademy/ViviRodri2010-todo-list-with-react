import React from "react";
import TodoList from "./todoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<TodoList />
			
		</div>
	);
};

export default Home;
