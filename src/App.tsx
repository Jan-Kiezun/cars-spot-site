import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeadersBlock from "./components/HeadersBlock";
import GalleryBlock from "./components/GalleryBlock";
import Seo from "./components/Seo";

export default function App() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <Navbar />
      <Hero />
      <HeadersBlock />
      <GalleryBlock />
      <Seo />
      <Footer />
    </div>
  );
}
