
import { Accessibility } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 px-1 md:px-8 bg-gradient-to-r from-accessibility-main to-accessibility-accent text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-col items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            
            <Accessibility size={40} />
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">AcessInvest</h1>
              <p className="text-sm md:text-base opacity-90">Ranking de acessibilidade de bancos e corretoras</p>
            </div>
          </div>
          <div>
            <section id="#">
            <p>
              {/* <span className="flex flex-col items-center font-bold ml:px-12">Menu</span> */}
            <ul className="flex flex-row md:flex-row items-center justify-between m-3 gap-4">
              <a href="#"><li>Home</li></a>
              <a href="#Ranking"><li>Ranking</li></a>
              <a href="#Contatos"><li>Contatos</li></a>
              <a href="#Ferramentas"><li>Ferramentas</li></a>
            </ul>
            </p>
            </section>
          </div>
          
          <p className="text-sm font-size: 0.5rem md:text-base max-w-md text-center md:text-right">
            Avaliamos os principais sites financeiros brasileiros seguindo as diretrizes WCAG de acessibilidade digital.
          </p>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
