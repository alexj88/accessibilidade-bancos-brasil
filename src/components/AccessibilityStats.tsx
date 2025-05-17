
import { CheckCircle2, CircleDashed, InfoIcon } from "lucide-react";
import { banks } from "@/data/bankData";
import { Progress } from "@/components/ui/progress";

const AccessibilityStats = () => {
  // Calculate statistics
  const totalInstitutions = banks.length;
  const avgScore = banks.reduce((sum, bank) => sum + bank.accessibilityScore, 0) / totalInstitutions;
  
  const wcagLevels = {
    'AAA': banks.filter(bank => bank.wcagCompliance === 'AAA').length,
    'AA': banks.filter(bank => bank.wcagCompliance === 'AA').length,
    'A': banks.filter(bank => bank.wcagCompliance === 'A').length,
    'None': banks.filter(bank => bank.wcagCompliance === 'None').length,
  };

  const categories = {
    'Banco': banks.filter(bank => bank.category === 'Banco').length,
    'Corretoras': banks.filter(bank => bank.category === 'Corretoras').length,
    'Ambos': banks.filter(bank => bank.category === 'Ambos').length,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex items-start gap-2 mb-4">
        <InfoIcon size={20} className="text-accessibility-main mt-1" />
        <div>
          <h2 className="text-xl font-bold">Panorama da Acessibilidade Digital</h2>
          <p className="text-gray-600">Estatísticas gerais sobre a acessibilidade digital no setor financeiro brasileiro</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Pontuação Média</h3>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold">{avgScore.toFixed(1)}%</span>
          </div>
          <Progress value={avgScore} className="h-2 mb-3" />
          <p className="text-sm text-gray-600">
            Média de pontuação de acessibilidade considerando todas as instituições avaliadas.
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Conformidade WCAG</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-accessibility-high w-3 h-3 rounded-full"></span>
                <span className="text-sm">Nível AAA</span>
              </div>
              <span className="font-semibold">{wcagLevels.AAA}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-accessibility-medium w-3 h-3 rounded-full"></span>
                <span className="text-sm">Nível AA</span>
              </div>
              <span className="font-semibold">{wcagLevels.AA}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-accessibility-low w-3 h-3 rounded-full"></span>
                <span className="text-sm">Nível A</span>
              </div>
              <span className="font-semibold">{wcagLevels.A}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="bg-gray-300 w-3 h-3 rounded-full"></span>
                <span className="text-sm">Sem conformidade</span>
              </div>
              <span className="font-semibold">{wcagLevels.None}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Por Tipo de Instituição</h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold">{totalInstitutions}</span>
            <span className="text-gray-600">instituições analisadas</span>
          </div>
          <div className="space-y-2 mt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Bancos</span>
              <span className="font-semibold">{categories.banco}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Corretoras</span>
              <span className="font-semibold">{categories.Corretoras}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Ambos</span>
              <span className="font-semibold">{categories.Ambos}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStats;
