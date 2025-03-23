import Hero from '../components/Hero';
import Header from '../components/Header';
import Porfolio from '../components/Porfolio';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Porfolio />
      <Services />
      <Team />
      <Contact />
      <Footer />

    </div>
  );
}

export default Home;
