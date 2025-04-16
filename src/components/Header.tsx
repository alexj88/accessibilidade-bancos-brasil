
import { Accessibility } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 px-4 md:px-8 bg-gradient-to-r from-accessibility-main to-accessibility-accent text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Accessibility size={40} />
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">Acessibilidade Digital Brasil</h1>
              <p className="text-sm md:text-base opacity-90">Ranking de acessibilidade de bancos e corretoras</p>
            </div>
          </div>
          
          <p className="text-sm md:text-base max-w-md text-center md:text-right">
            Avaliamos os principais sites financeiros brasileiros seguindo as diretrizes WCAG de acessibilidade digital.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
