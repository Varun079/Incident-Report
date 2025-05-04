import { Incident } from '../types/incident';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, leading to echo chambers and reinforcement of existing biases. Investigation showed training data had significant demographic skews that weren't properly addressed during model development.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information when queried about emergency protocols, potentially endangering users. The model confidently stated false information that contradicted established safety guidelines in industrial settings.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in its responses. While no PII was compromised, the incident revealed potential vulnerabilities in the data handling pipeline that could lead to more serious breaches.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Unfiltered Content Generation",
    description: "AI image generator created inappropriate content despite safety measures. The system bypassed existing content filters when presented with certain prompt structures, revealing gaps in the safety architecture.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z"
  },
  {
    id: 5,
    title: "Unexpected Model Behavior",
    description: "AI assistant began responding in unusual patterns after specific query sequences. While no harmful content was generated, the behavior demonstrated potential for manipulating the model's responses through carefully crafted inputs.",
    severity: "Medium",
    reported_at: "2025-04-05T11:20:00Z"
  }
];