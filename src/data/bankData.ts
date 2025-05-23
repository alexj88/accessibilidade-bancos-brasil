
export interface banco {
  id: number;
  name: string;
  website: string;
  accessibilityScore: number;
  wcagCompliance: 'A' | 'AA' | 'AAA' | 'None';
  category: 'Banco' | 'Corretoras' | 'Ambos';
  features: string[];
  lastUpdated: string;
}

export const banks: banco[] = [
  {
    id: 1,
    name: "Banco do Brasil",
    website: "https://www.bb.com.br/site/investimentos",
    accessibilityScore: 99,
    wcagCompliance: 'AAA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance'],
    lastUpdated: "2023-12-15"
  },
  {
    id: 2,
    name: "Itaú",
    website: "https://www.itau.com.br/investimentos",
    accessibilityScore: 92,
    wcagCompliance: 'AAA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance', 'Text resizing', 'Voice commands'],
    lastUpdated: "2024-01-20"
  },
  {
    id: 3,
    name: "Bradesco",
    website: "https://banco.bradesco/html/classic/portal-investimentos/index.shtm",
    accessibilityScore: 78,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'High contrast mode'],
    lastUpdated: "2023-11-10"
  },
  {
    id: 4,
    name: "Nubank",
    website: "https://nubank.com.br/nu/investimentos",
    accessibilityScore: 88,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance', 'Simple navigation'],
    lastUpdated: "2024-02-05"
  },
  {
    id: 5,
    name: "XP Investimentos",
    website: "https://www.xpi.com.br",
    accessibilityScore: 82,
    wcagCompliance: 'AA',
    category: 'Corretoras',
    features: ['Screen reader support', 'Keyboard navigation', 'Form labels'],
    lastUpdated: "2024-01-15"
  },
  {
    id: 6,
    name: "BTG Pactual",
    website: "https://www.btgpactual.com",
    accessibilityScore: 75,
    wcagCompliance: 'A',
    category: 'Ambos',
    features: ['Keyboard navigation', 'ALT text for images'],
    lastUpdated: "2023-10-25"
  },
  {
    id: 7,
    name: "Caixa Econômica Federal",
    website: "https://www.caixa.gov.br",
    accessibilityScore: 89,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Text alternatives', 'Form labels', 'Skip navigation'],
    lastUpdated: "2024-02-12"
  },
  {
    id: 8,
    name: "Santander",
    website: "https://www.santander.com.br/banco/investimentos",
    accessibilityScore: 80,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance'],
    lastUpdated: "2023-12-05"
  },
  {
    id: 9,
    name: "Rico",
    website: "https://www.rico.com.vc",
    accessibilityScore: 68,
    wcagCompliance: 'A',
    category: 'Corretoras',
    features: ['ALT text for images', 'Descriptive links'],
    lastUpdated: "2023-09-30"
  },
  {
    id: 10,
    name: "Inter",
    website: "https://www.bancointer.com.br",
    accessibilityScore: 84,
    wcagCompliance: 'AA',
    category: 'Ambos',
    features: ['Screen reader support', 'Keyboard navigation', 'ARIA landmarks'],
    lastUpdated: "2024-01-08"
  },
  {
    id: 11,
    name: "Clear",
    website: "https://www.clear.com.br",
    accessibilityScore: 65,
    wcagCompliance: 'A',
    category: 'Corretoras',
    features: ['Keyboard navigation', 'ALT text for images'],
    lastUpdated: "2023-08-15"
  },
  {
    id: 12,
    name: "Modal Mais",
    website: "https://www.modalmais.com.br",
    accessibilityScore: 60,
    wcagCompliance: 'A',
    category: 'Corretoras',
    features: ['ALT text for images', 'Basic keyboard navigation'],
    lastUpdated: "2023-07-20"
  }
];
