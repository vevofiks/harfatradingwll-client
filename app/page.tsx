import Header from './components/header'
import Footer from './components/footer';
import Hero from './home/hero';
import Products from './home/products';
import About from './about/page';
import Reviews from './home/review';


export default function Home() {
  return (
    <>
     <Header/>
     <Hero />
     <Products/>
     <About />
     <Reviews />
     <Footer/>
    </>
  );
}
