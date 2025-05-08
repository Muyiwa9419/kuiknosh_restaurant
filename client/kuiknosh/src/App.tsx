import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselSection from "./components/Carousel";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow scroll-smooth">
      <section
        id="home"
        className="relative py-20 px-6 bg-black overflow-hidden">
  
  {/* Mobile background image */}
  <div
    className="absolute inset-0 bg-[url('/images/kburger.png')] bg-cover bg-center opacity-20  md:hidden"
    aria-hidden="true"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between z-10">
    {/* Left: Text */}
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Authentic Flavors, Unforgettable Moments
      </h1>
      <p className="text-lg text-white max-w-xl mx-auto md:mx-0">
        Freshly prepared, mouthwatering dishes that bring people together.
        Experience the taste of home-cooked meals, made with love and care.
        
      </p>
      <a href="https://www.instagram.com/kuiknosh?igsh=YzljYTk1ODg3Zg=="><button type="button" className="bg-red-600 cursor-pointer text-white py-2 px-2 rounded-lg mt-6 transition-all duration-500 hover:scale-105 ">Order Now</button></a>
    </div>

    {/* Right: Image (only shown on desktop) */}
    <div className="hidden md:block md:w-1/2">
      <img
        src="public/images/kburger.png"
        alt="burger"
        // className="w-full h-auto object-cover rounded-lg shadow-lg"
        className="w-130 h-auto rounded-4xl transition-all duration-500 hover:scale-105"
      />
    </div>
    
  </div>
  
</section>

      {/* About Section */}
<section
        id="about"
        className="relative py-20 px-6  bg-white overflow-hidden">
  
  {/* Mobile background image */}
  <div
    className="absolute inset-0 bg-[url('public/images/kfish.png')] bg-cover bg-center opacity-20  md:hidden"
    aria-hidden="true"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between z-10">
    {/* Left: image */}
     
     <div className="hidden md:block md:w-1/2 ">
      <img
        src="/images/kfish.png"
        alt="burger"
        // className="w-full h-auto object-cover rounded-lg shadow-lg"
        className="w-130 h-auto transition-all rounded-4xl duration-500 hover:scale-105"/>
    </div>
    {/* Right: text (only shown on desktop) */}
    <div className="text-center md:text-left md:w-1/2">
      <h6 className="text-red-600">About Us</h6>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
        Passion for Great Food, <br />Served with Love
      </h2>
      <p className="text-lg text-black max-w-xl mx-auto md:mx-0">
        At Kuiknosh, we bring you the finest flavors inspired by 
         The celebrity twin chef, crafted with high-quality ingredients, traditional recipes, and a passion for excellent
         service. Whether you're craving intercontinental cuisine, local delicacies, or seeking a cozy spot to enjoy with loved ones, we've 
         got you covered. Welcome to a place where food meets passion!
        
      </p>
      
    </div>

   
  </div>
</section>

<CarouselSection />
<section id="gallery" className="bg-black py-16 px-4 ">
<div className="max-w-5xl mx-auto text-center text-white ">
        <h6 className="text-red-600">Our Menu</h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-shadow-red-600">
          The Choice is Yours
        </h2>
        <p>At Kuiknosh, we know that great food is all about variety. Whether you're 
          a meat lover, a fan of crispy bites, or all about fresh veggies, we've got something something for you.
        </p>
        <a  href="https://www.instagram.com/reel/DD1fqsyoKBU/?igsh=YzljYTk1ODg3Zg==" ><button type="button" className="bg-red-600 cursor-pointer text-white py-2 px-2 rounded-lg mt-6 transition-all duration-500 hover:scale-105 ">Check Our Menu</button></a>
        </div>
</section>


    {/* Location Section */}
    <section
        id="location"
        className="relative py-20 px-6 bg-white overflow-hidden">
  
  {/* Mobile background image */}
  <div
    className="absolute inset-0 bg-[url('/images/Kmap.png')] bg-cover bg-center opacity-20  md:hidden"
    aria-hidden="true"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between z-10">
    {/* Left: image */}
     
     <div className="hidden md:block md:w-1/2 ">
      <img
        src="/images/Kmap.png"
        alt="burger"
        // className="w-full h-auto object-cover rounded-lg shadow-lg"
        className="w-130 h-auto transition-all rounded-4xl duration-500 hover:scale-105"/>
    </div>
    {/* Right: text (only shown on desktop) */}
    <div className="text-center md:text-left md:w-1/2">
      <h6 className="text-rose-500">Our Location</h6>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
        Locate Kuiknosh
      </h2>
      <p className="text-lg text-black max-w-xl mx-auto md:mx-0">
        BMT African Garden beside Switzerland Embassy: N0 155 
        Adetokunbo Ademola Wuse 2, Abuja, Nigeria
        <br />
        <strong><em>Phone(WhatsApp): +234 803 119 1589</em></strong>
        
      </p>
      <a href="https://www.google.com/maps/dir/9.1566285,7.3101799/BMT+African+Garden,+155+Adetokunbo+Ademola+Cres,+Wuse,+Abuja+904101,+Federal+Capital+Territory/@9.1135913,7.2296274,11z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x104e0afe9d452015:0xd0f86a6ccc5fb29!2m2!1d7.482016!2d9.0813731!3e0?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D">
      <button type="button" className="bg-red-600 cursor-pointer text-white py-2 px-2 rounded-lg mt-6 transition-all duration-500 hover:scale-105 ">Get Directions</button>
      </a>
    </div>

   
  </div>
</section>
<FeedbackForm />
<Footer />
      </main>
      
    </div>
  )
}
export default App;
// This code defines a functional React component named `App` that serves as the main entry point for a web application. It imports and uses two other components: `Header` and `Footer`. The `App` component is structured to create a responsive layout with a header, a main content area, and a footer. The main content area includes a section with a background image, text, and an image of a burger. The layout is styled using Tailwind CSS classes for responsiveness and aesthetics.