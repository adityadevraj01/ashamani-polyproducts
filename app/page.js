import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import AwardsSection from "../components/AwardsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import EnquiryForm from "../components/EnquiryForm";
import ProductDetailsSection from "../components/ProductDetailsSection"; // ✅ for homepage
import MachineryDetailsSection from "../components/MachineryDetailsSection";
import Footer from "../components/Footer";
import WelcomeOverlay from "@/components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <WelcomeOverlay />
      <Navbar />
      <main className="pt-4">
        <HeroBanner />
        
        {/* ✅ Home page products section */}
        <ProductDetailsSection />

        <WhyChooseUs />

        <div id="machinery-section">
          <MachineryDetailsSection />
        </div>

        <AwardsSection />

        <EnquiryForm />
        <Footer />
      </main>
    </>
  );
}
