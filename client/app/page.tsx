import Header from './components/header'
import Footer from './components/footer';
import Hero from './home/hero';
import Products from './home/products';
import Reviews from './home/review';
import BrandPartners from './components/brandPartners';
import {About} from './home/about';


export default function Home() {
  return (
    <>
     <Header/>
     <Hero />
     <Products/>
     <About />
     <BrandPartners />
     <Reviews />
     <Footer/>
    </>
  );
}
