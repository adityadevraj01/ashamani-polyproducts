import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
// import ProductHighlights from "../components/ProductHighlights";
import AwardsSection from "../components/AwardsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import EnquiryForm from "../components/EnquiryForm";
import ProductDetailsSection from "../components/ProductDetailSection";
import MachineryDetailsSection from "../components/MachineryDetailsSection";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-4">
        <HeroBanner />
      
        <ProductDetailsSection/>
        
        <AwardsSection />

        <div id="machinery-section">
        <MachineryDetailsSection />
        </div>

        <WhyChooseUs />
        
        <EnquiryForm />
        <Footer/>
      </main>
    </>
  );
}