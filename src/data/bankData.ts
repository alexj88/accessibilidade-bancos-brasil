
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
    website: "https://www.bb.com.br/site/investimentos/cdb/",
    accessibilityScore: 82, 
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance'],
    lastUpdated: "05/06/2025 às 00:31:29"
  },
  {
    id: 2,
    name: "Itaú",
    website: "https://www.itau.com.br/investimentos",
    accessibilityScore: 97,
    wcagCompliance: 'AAA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance', 'Text resizing', 'Voice commands'],
    lastUpdated: "04/06/2025 às 22:11:13"
  },
  {
    id: 3,
    name: "Bradesco",
    website: "https://banco.bradesco/html/classic/portal-investimentos/index.shtm",
    accessibilityScore: 78,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'High contrast mode'],
    lastUpdated: "04/06/2025 às 22:38:24"
  },
  {
    id: 4,
    name: "Nubank",
    website: "https://nubank.com.br/nu/investimentos",
    accessibilityScore: 85,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance', 'Simple navigation'],
    lastUpdated: "04/06/2025 às 22:19:03"
  },
  {
    id: 5,
    name: "XP Investimentos",
    website: "https://www.xpi.com.br",
    accessibilityScore: 82,
    wcagCompliance: 'AA',
    category: 'Corretoras',
    features: ['Screen reader support', 'Keyboard navigation', 'Form labels'],
    lastUpdated: "04/06/2025 às 22:27:08"
  },
  {
    id: 6,
    name: "BTG Pactual",
    website: "https://www.btgpactual.com",
    accessibilityScore: 96,
    wcagCompliance: 'AAA',
    category: 'Ambos',
    features: ['Keyboard navigation', 'ALT text for images'],
    lastUpdated: "04/06/2025 às 22:43:24"
  },
  {
    id: 7,
    name: "PicPay",
    website: "https://picpay.com/investimentos",
    accessibilityScore: 89,
    wcagCompliance: 'AA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Text alternatives', 'Form labels', 'Skip navigation'],
    lastUpdated: "04/06/2025 às 23:47:15"
  },
  {
    id: 8,
    name: "Santander",
    website: "https://www.santander.com.br/banco/investimentos",
    accessibilityScore: 91,
    wcagCompliance: 'AAA',
    category: 'Banco',
    features: ['Screen reader support', 'Keyboard navigation', 'Color contrast compliance'],
    lastUpdated: "04/06/2025 às 22:35:59"
  },
  {
    id: 9,
    name: "Rico",
    website: "https://www.rico.com.vc",
    accessibilityScore: 94,
    wcagCompliance: 'AAA',
    category: 'Corretoras',
    features: ['ALT text for images', 'Descriptive links'],
    lastUpdated: "04/06/2025 às 22:48:15"
  },
  {
    id: 10,
    name: "Inter",
    website: "https://www.bancointer.com.br",
    accessibilityScore: 93,
    wcagCompliance: 'AAA',
    category: 'Ambos',
    features: ['Screen reader support', 'Keyboard navigation', 'ARIA landmarks'],
    lastUpdated: "04/06/2025 às 22:23:19"
  },
  {
    id: 11,
    name: "Clear",
    website: "https://www.clear.com.br",
    accessibilityScore: 94,
    wcagCompliance: 'AAA',
    category: 'Corretoras',
    features: ['Keyboard navigation', 'ALT text for images'],
    lastUpdated: "04/06/2025 às 22:58:28"
  },
  {
    id: 12,
    name: "Modal Mais",
    website: "https://www.modalmais.com.br",
    accessibilityScore: 83,
    wcagCompliance: 'AA',
    category: 'Corretoras',
    features: ['ALT text for images', 'Basic keyboard navigation'],
    lastUpdated: "04/06/2025 às 22:59:16"
  }
];
