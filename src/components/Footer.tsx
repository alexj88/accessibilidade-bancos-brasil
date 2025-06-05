
import { Accessibility, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
  <section id="Contatos">
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Accessibility size={24} className="text-accessibility-main" />
            <span className="text-lg font-semibold">AcessInvest</span>
          </div>
          
          <div className="text-sm text-gray-600 text-center md:text-right">
            <p className="mb-1">
              Este ranking é atualizado regularmente com base nas diretrizes WCAG.
             
            </p>
            <section id="Ferramentas">
            <p>*A ferramenta utilizada para obter as pontuações WCAG foi
            <a href=""> http:/pagespeed.web.dev/</a>
            </p>
            </section>
            <p className="flex items-center mt-3 justify-center md:justify-end gap-1">
              Desenvolvido com <Heart size={16} className="text-accessibility-low" /> por 
              <a href="#" className="text-accessibility-accent hover:underline ml-1">
                AcessInvest
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 text-center">
          <p>
            © {new Date().getFullYear()} AcessInvest. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Os dados deste ranking são baseados em análises independentes de conformidade com WCAG 2.1.
            
           
          </p>
        </div>
      </div>
    </footer>
</section>
  );
};

export default Footer;
