import Banner from "./components/banner";
import Contato from "./components/contato";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Portfolio from "./components/portfolio";
import Servicos from "./components/servicos";
import Sobre from "./components/sobre";

export default function Home() {
  return (
    <div>
     <Menu/>
     <Banner/>
     <Sobre/>
     <Servicos/>
     <Portfolio/>
     <Contato/>
     <Footer/>
    </div>
  );
}
