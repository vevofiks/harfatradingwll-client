import Header from './components/header'
import Footer from './components/footer';
import Hero from './home/hero';
import Products from './home/products';
import About from './about/page';
import Reviews from './home/review';
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <>
     <Header/>
     <Hero />
     <Products/>
     <About />
     <Reviews />
     <Footer/>
     <SpeedInsights/>
    </>
  );
}
