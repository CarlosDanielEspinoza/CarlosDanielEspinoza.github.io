import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import AboutMe from './components/aboutMe/aboutMe.jsx';
import Projects from './components/projects/projects.jsx';
import Contact from './components/contact/contact.jsx';


function App() {

	return (
	<div className="MainApp">
	  <Navbar/>
	  <Hero/>
	  <AboutMe/>
	  <Projects/>
	  <Contact/>
	</div>
	);
}

export default App;
