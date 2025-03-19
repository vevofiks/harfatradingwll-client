import Header from './shared/header'
import Footer from './shared/footer';
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
