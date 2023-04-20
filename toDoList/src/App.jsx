import React from 'react'
import './App.css'

import AddTasks from "./components/Addtasks.jsx";
import Title from './components/Title.jsx';
import Footer from './components/Footer.jsx';

//create your first component
const Home = () => {
	return (
		<div className="toDoList">	
      		<Title/>
			<AddTasks/>
			<Footer/>
		</div>
	);
};

export default Home;


