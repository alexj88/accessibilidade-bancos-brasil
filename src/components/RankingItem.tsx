
import { ExternalLink } from "lucide-react";
import { banco } from "../data/bankData";
import { getAccessibilityColorClass } from "../utils/sortRanking";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RankingItemProps {
  bank: banco;
  rank: number;
  
}

const RankingItem = ({ bank, rank }: RankingItemProps) => {
  const scoreColorClass = getAccessibilityColorClass(bank.accessibilityScore);
  
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg shadow mb-4 border-l-4 border-accessibility-main hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3 md:mb-0">
        <div className="bg-accessibility-main text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
          {rank}
        </div>
        <div>
          <h3 className="font-bold text-lg">{bank.name}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            <Badge variant="outline">{bank.category}</Badge>
            <Badge 
              variant="secondary" 
              className={`${
                bank.wcagCompliance === 'AAA' 
                  ? 'bg-accessibility-high text-white hover:bg-accessibility-high/90' 
                  : bank.wcagCompliance === 'AA' 
                    ? 'bg-accessibility-medium text-white hover:bg-accessibility-medium/90' 
                    : 'bg-accessibility-low text-white hover:bg-accessibility-low/90'
              }`}
            >
              WCAG {bank.wcagCompliance}
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Pontuação</span>
            <div className="flex items-center">
              <div className={`${scoreColorClass} h-6 w-6 rounded-full flex items-center justify-center mr-2`}>
                <span className="text-xs text-white font-bold">
                  {Math.round(bank.accessibilityScore / 10)}
                </span>
              </div>
              <span className="font-bold">{bank.accessibilityScore}% </span>
              <br/>
              
              
            </div>
          </div>
        </div>
        <div>
          
        </div>
        <div>
            <span className="flex flex-col text-wrap">
            <span>Data de verificação</span>
            <span>{bank.lastUpdated}</span>
            </span>
        </div>
        <Button asChild className="w-full md:w-auto btn-as-link">
            <a href={bank.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            Acessar Site <ExternalLink size={13} />
          </a>
        </Button>
        <Button asChild className="w-full md:w-auto bg-blue-600 btn-as-link hover:bg-blue-700">
          {/* https://pagespeed.web.dev/analysis?url */}
          <a href={'https://pagespeed.web.dev/analysis?url='+bank.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            Verificar Acessibilidade <ExternalLink size={13} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default RankingItem;
