import ProfileHeader from "./components/ProfileHeader";
import Carousel from "./components/Carousel";
import ActionButtons from "./components/ActionButtons";
import Footer from "./components/Footer";

function App() {
  const images1 = ["/1.png", "/2.png", "/3.png", "/4.png"];
  const images2 = ["/5.png", "/6.png", "/7.png", "/8.png"];

  return (
    <div className="container-main">
      <div className="mobile-container">
        <div className="fundo">
          <ProfileHeader />
          <Carousel images={images1} />
          <Carousel images={images2} reverse={true} />
        </div>
        <ActionButtons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
