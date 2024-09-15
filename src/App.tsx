import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeadersBlock from "./components/HeadersBlock";
import GalleryBlock from "./components/GalleryBlock";

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <HeadersBlock />
      <GalleryBlock />
      <Footer />
    </div>
  );
}
