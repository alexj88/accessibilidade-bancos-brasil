
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WcagLevelsInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Info size={20} className="text-accessibility-main" />
        <h2 className="text-xl font-bold">Sobre os Níveis de Conformidade WCAG</h2>
      </div>
      
      <p className="text-gray-600 mb-4">
        As diretrizes WCAG (Web Content Accessibility Guidelines) definem três níveis de conformidade 
        que determinam o quão acessível é um site. Confira abaixo o que cada nível significa:
      </p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="wcag-aaa">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <span className="bg-accessibility-high text-white font-bold text-sm px-2 py-0.5 rounded">AAA</span>
              <span className="font-semibold">Nível Máximo de Conformidade</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              O nível AAA representa o mais alto grau de acessibilidade web. Sites com conformidade AAA 
              implementam todas as diretrizes WCAG, incluindo as mais rigorosas. Esses sites são 
              acessíveis ao maior número possível de pessoas com diferentes tipos de deficiências, 
              incluindo visual, auditiva, física, de fala, cognitiva, de linguagem, de aprendizado e neurológica.
            </p>
            <p className="text-gray-600 mt-2">
              Características incluem: alto contraste, navegação por teclado avançada, legendas em tempo real, 
              linguagem simplificada, suporte a tecnologias assistivas avançadas e mais.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="wcag-aa">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <span className="bg-accessibility-medium text-white font-bold text-sm px-2 py-0.5 rounded">AA</span>
              <span className="font-semibold">Nível Intermediário de Conformidade</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              O nível AA é considerado um bom nível de acessibilidade e é o padrão adotado pela maioria 
              das organizações. Sites com este nível de conformidade removem barreiras significativas 
              para uma ampla gama de pessoas com deficiências.
            </p>
            <p className="text-gray-600 mt-2">
              Características incluem: contraste adequado, legendas para conteúdo multimídia, 
              navegação consistente, rótulos de formulário claros, feedback de erro em formulários, e
              compatibilidade com leitores de tela.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="wcag-a">
          <AccordionTrigger className="text-left">
            <div className="flex items-center gap-2">
              <span className="bg-accessibility-low text-white font-bold text-sm px-2 py-0.5 rounded">A</span>
              <span className="font-semibold">Nível Básico de Conformidade</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              O nível A representa o nível mínimo de conformidade com as diretrizes WCAG. Sites com este 
              nível de conformidade conseguem eliminar algumas barreiras de acessibilidade básicas, mas 
              ainda podem apresentar dificuldades para muitos usuários com deficiências.
            </p>
            <p className="text-gray-600 mt-2">
              Características incluem: texto alternativo para imagens, títulos para organizar conteúdo,
              funcionamento sem depender exclusivamente de cores, e controles de áudio básicos.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WcagLevelsInfo;
