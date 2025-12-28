"""
Axion Minds: AI Readiness Assessment Logic
This module defines the survey structure, scoring, and branching logic for the platform.
It supports two personas: 'The Fortress' (Security Focus) and 'The Accelerator' (Speed Focus).
"""

from typing import List, Dict, Any

class AIReadinessSurvey:
    def __init__(self, mode: str = "security"):
        self.mode = mode  # "security" (The Fortress) or "speed" (The Accelerator)
        self.responses = {}
        self.current_step = 0
        
    def get_questions(self) -> List[Dict[str, Any]]:
        base_questions = [
            {
                "id": "data_volume",
                "text": "What is the approximate size of your internal knowledge base?",
                "options": ["< 1GB", "1GB - 50GB", "50GB - 1TB", "1TB+"],
                "category": "scale"
            },
            {
                "id": "data_type",
                "text": "Primary data formats you intend to index?",
                "options": ["Structured (SQL, CSV)", "Unstructured (PDF, Docs)", "Mixed (Multimodal)", "Legacy (Scanned)"],
                "category": "complexity"
            }
        ]
        
        # Branching logic based on mode
        if self.mode == "security":
            mode_questions = [
                {
                    "id": "compliance",
                    "text": "What are your primary compliance requirements?",
                    "options": ["PIPEDA/PHI", "SOC2 Type II", "Internal Governance Only", "None specific"],
                    "category": "governance"
                },
                {
                    "id": "residency",
                    "text": "Is Data Residency in Canada a strict requirement?",
                    "options": ["Yes, mandatory", "Preferred", "Not required"],
                    "category": "governance"
                }
            ]
        else: # speed
            mode_questions = [
                {
                    "id": "latency",
                    "text": "What is your target query response time?",
                    "options": ["Sub-second", "1-3 seconds", "Human-paced (streamed)", "Asynchronous"],
                    "category": "performance"
                },
                {
                    "id": "realtime",
                    "text": "How often does your source data change?",
                    "options": ["Real-time/Continuous", "Hourly", "Daily", "Occasionally"],
                    "category": "performance"
                }
            ]
            
        return base_questions + mode_questions

    def calculate_readiness(self, responses: Dict[str, str]) -> Dict[str, Any]:
        score = 0
        total_weight = len(responses)
        
        # Simple scoring logic
        for q_id, answer in responses.items():
            if answer in ["1TB+", "Mixed (Multimodal)", "PIPEDA/PHI", "Yes, mandatory", "Sub-second", "Real-time/Continuous"]:
                score += 3
            elif answer in ["50GB - 1TB", "Unstructured (PDF, Docs)", "SOC2 Type II", "Preferred", "1-3 seconds", "Hourly"]:
                score += 2
            else:
                score += 1
                
        level = "High Complexity" if score > (total_weight * 2) else "Moderate" if score > total_weight else "Entry Level"
        
        return {
            "score": score,
            "level": level,
            "recommendation": self.get_recommendation(level)
        }
        
    def get_recommendation(self, level: str) -> str:
        if self.mode == "security":
            if level == "High Complexity":
                return "Architecture: Dedicated VPC SC, Matching Engine (Vector Search) with VPC Peering, and Gemini 1.5 Pro with Grounding."
            return "Architecture: Vertex AI Search with Private Service Connect and strict Northamerica-northeast1 residency."
        else:
            if level == "High Complexity":
                return "Architecture: Distributed Matching Engine with high-concurrency Gemini 1.5 Flash pods for sub-second latency."
            return "Architecture: Vertex AI Search with aggressive caching and Stream mode enabled."

# Example usage (Mental test):
# survey = AIReadinessSurvey(mode="security")
# print(survey.get_questions()[2]["text"]) 
