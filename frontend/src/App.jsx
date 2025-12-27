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

        <Profile 
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="João Paulo Souza"
          bio="Engenheiro Backend"
          phone="85925347513"
          email="joao.paulo.souza@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
          theme="male"
        />

        <Profile 
          avatar="https://randomuser.me/api/portraits/women/55.jpg"
          name="Mariana Duarte"
          bio="Designer UI/UX"
          phone="85981741398"
          email="mariana.duarte@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
        />

        <Profile 
          avatar="https://randomuser.me/api/portraits/men/65.jpg"
          name="Diego Gonçalves"
          bio="Desenvolvedor Frontend"
          phone="85991451980"
          email="diego.goncalves@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
          theme="male"
        />

        <Profile 
          avatar="https://randomuser.me/api/portraits/women/75.jpg"
          name="Fabiana Oliveira"
          bio="Designer UI/UX"
          phone="8592134578"
          email="fabiana.oliveira@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
        />

        <Profile 
          avatar="https://randomuser.me/api/portraits/men/85.jpg"
          name="Rogerio filho"
          bio="Desenvolvedor Frontend"
          phone="8594311028"
          email="rogerio.filho@email.com"
          gitHubUrl="https://github.com/"
          linkedinUrl="https://www.linkedin.com/login/pt"
          instagramUrl="https://www.instagram.com/"
          theme="male"
        />
      </div>
      <Footer />
    </>
  );
}
