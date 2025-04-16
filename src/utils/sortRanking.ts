
import { Bank } from "../data/bankData";

export type SortField = 'name' | 'accessibilityScore' | 'wcagCompliance' | 'category' | 'lastUpdated';
export type SortDirection = 'asc' | 'desc';

export const sortBanks = (banks: Bank[], field: SortField, direction: SortDirection): Bank[] => {
  return [...banks].sort((a, b) => {
    let comparison = 0;
    
    switch (field) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'accessibilityScore':
        comparison = a.accessibilityScore - b.accessibilityScore;
        break;
      case 'wcagCompliance':
        // Convert WCAG level to numeric value for sorting
        const wcagValue = {
          'AAA': 3,
          'AA': 2,
          'A': 1,
          'None': 0
        };
        comparison = (wcagValue[a.wcagCompliance] || 0) - (wcagValue[b.wcagCompliance] || 0);
        break;
      case 'category':
        comparison = a.category.localeCompare(b.category);
        break;
      case 'lastUpdated':
        comparison = new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
        break;
      default:
        comparison = 0;
    }
    
    return direction === 'asc' ? comparison : -comparison;
  });
};

export const getAccessibilityColorClass = (score: number): string => {
  if (score >= 80) return 'bg-accessibility-high';
  if (score >= 70) return 'bg-accessibility-medium';
  return 'bg-accessibility-low';
};

export const getWCAGLevelDescription = (level: 'A' | 'AA' | 'AAA' | 'None'): string => {
  switch (level) {
    case 'AAA':
      return 'Highest level of accessibility compliance, exceeding standard requirements';
    case 'AA':
      return 'Good accessibility standard that meets most user needs';
    case 'A':
      return 'Basic accessibility standard with minimum compliance';
    default:
      return 'No significant WCAG compliance detected';
  }
};
