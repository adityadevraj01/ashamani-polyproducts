// import Navbar from "../components/Navbar";
// import HeroBanner from "../components/HeroBanner";
// import AwardsSection from "../components/AwardsSection";
// import WhyChooseUs from "../components/WhyChooseUs";
// import EnquiryForm from "../components/EnquiryForm";
// import ProductDetailsSection from "../components/ProductDetailsSection"; // ✅ for homepage
// import MachineryDetailsSection from "../components/MachineryDetailsSection";
// import Footer from "../components/Footer";
// import WelcomeOverlay from "@/components/WelcomeMessage";

// export default function Home() {
//   return (
//     <>
//       {/* <WelcomeOverlay /> */}
//       <Navbar />
//       <main className="pt-4">
//         <HeroBanner />
        
//         {/* ✅ Home page products section */}
//         <ProductDetailsSection />

//         <WhyChooseUs />

//         <div id="machinery-section">
//           <MachineryDetailsSection />
//         </div>

//         <AwardsSection />

//         <EnquiryForm />
//         <Footer />
//       </main>
//     </>
//   );
// }
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import AwardsSection from "../components/AwardsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import EnquiryForm from "../components/EnquiryForm";
import ProductDetailsSection from "../components/ProductDetailsSection";
import MachineryDetailsSection from "../components/MachineryDetailsSection";
import Footer from "../components/Footer";
import WelcomeOverlay from "@/components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashamani Polyproducts Pvt. Ltd. | HDPE & Woven Poly Bags Manufacturer in India</title>
        <meta
          name="description"
          content="Ashamani Polyproducts Pvt. Ltd. is a leading manufacturer of HDPE, woven, and poly bags for industrial, agricultural, and domestic use. Custom sizes, colors, branding, and eco-friendly packaging available."
        />
        <meta
          name="keywords"
          content="HDPE bags, woven bags, poly bags, biodegradable plastic bags, packaging bags, industrial packaging, agricultural poly bags, custom plastic bags India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:title" content="Ashamani Polyproducts Pvt. Ltd." />
        <meta
          property="og:description"
          content="Premium manufacturer of HDPE, woven and poly bags in India for industrial and agricultural packaging. Customizable, durable, eco-conscious options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ashamanipolyproducts.com" />
        <meta property="og:image" content="https://www.ashamanipolyproducts.com/banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ashamani Polyproducts Pvt. Ltd." />
        <meta
          name="twitter:description"
          content="Leading Indian manufacturer of HDPE and poly bags for all packaging needs. Domestic & industrial applications. Custom options available."
        />
        <meta name="twitter:image" content="https://www.ashamanipolyproducts.com/banner.jpg" />

        {/* Favicon (Optional) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <WelcomeOverlay /> */}
      <Navbar />
      <main className="pt-4">
        <HeroBanner />
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
