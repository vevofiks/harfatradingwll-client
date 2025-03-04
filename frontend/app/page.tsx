import Header from './shared/header'
import Footer from './shared/footer';
import Hero from './hero/page';
import Products from './products/page';
import About from './about/page';
import Reviews from './reviews/page';

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
