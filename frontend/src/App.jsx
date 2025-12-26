import "./global.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Profile } from "./components/profile/Profile";

export function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Profile 
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          name="Anna Caroline Dias"
          bio="Desenvolvedora FullStack"
          phone="85985741276"
          email="ana.carol.dias@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
        />
      </div>
      <Footer />
    </>
  );
}
