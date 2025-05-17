
import { useState } from "react";
import { banco, banks } from "../data/bankData";
import { SortDirection, SortField, sortbancos } from "../utils/sortRanking";
import RankingItem from "./RankingItem";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownUp, Search } from "lucide-react";

const AccessibilityRanking = () => {
  const [sortField, setSortField] = useState<SortField>("accessibilityScore");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [filterCategory, setFilterCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter and sort the banks
  const filteredbancos = banks
    .filter((bank) => {
      // Apply category filter
      if (filterCategory !== "Todas" && bank.category !== filterCategory) {
        return false;
      }
      
      // Apply search filter (case insensitive)
      if (
        searchQuery &&
        !bank.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      
      return true;
    });
    
  const sortedbancos = sortbancos(filteredbancos, sortField, sortDirection);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  return (
  <div>
    <section id="Ranking">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-4">Ranking de Acessibilidade</h2>
        <p className="text-gray-600 mb-6">
          Nossa avaliação se baseia nas diretrizes WCAG (Web Content Accessibility Guidelines),
          que definem como tornar o conteúdo da web mais acessível para pessoas com deficiências.
          Todos os sites foram avaliados quanto ao nível de conformidade WCAG (A, AA ou AAA) e
          funcionalidades de acessibilidade implementadas.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Buscar por nome..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="w-full md:w-48">
            <Select
              value={filterCategory}
              onValueChange={setFilterCategory}
            >
              <SelectTrigger defaultValue="Banco">
                <SelectValue placeholder="Categoria" defaultValue={"Todas"}  />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todas" >Todas Categorias</SelectItem>
                <SelectItem value="Banco">Bancos</SelectItem>
                <SelectItem value="Corretoras">Corretoras</SelectItem>
                <SelectItem value="Ambos">Ambos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full md:w-48">
            <Select
              value={`${sortField}-${sortDirection}`}
              onValueChange={(value) => {
                const [field, direction] = value.split("-") as [SortField, SortDirection];
                setSortField(field);
                setSortDirection(direction);
              }}
            >
              <SelectTrigger>
                <div className="flex items-center gap-2">
                  <ArrowDownUp size={16} />
                  <span>Ordenar por</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accessibilityScore-desc">Maior pontuação</SelectItem>
                <SelectItem value="accessibilityScore-asc">Menor pontuação</SelectItem>
                <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
                <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
                <SelectItem value="wcagCompliance-desc">Conformidade WCAG</SelectItem>
                <SelectItem value="lastUpdated-desc">Mais recentes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-gray-500 mb-2">
            Exibindo {sortedbancos.length} de {banks.length} instituições
          </div>
          
          {sortedbancos.length > 0 ? (
            sortedbancos.map((bank, index) => (
              <RankingItem 
                key={bank.id} 
                bank={bank} 
                rank={index + 1} 
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              Nenhuma instituição encontrada com os filtros atuais
            </div>
          )}
        </div>
      </div>
  </section>
</div>
  );
};

export default AccessibilityRanking;
