# Axion Minds: RAG-as-a-Service Backend Architecture

This document outlines the high-level architecture for the Axion Minds Retrieval-Augmented Generation (RAG) pipeline, focusing on enterprise security and the "Glass Fortress" design principles.

## 1. Core Stack
- **Orchestration**: LangChain (Python) for modularity.
- **LLM**: Gemini 1.5 Pro (Vertex AI) for reasoning and multi-modal support.
- **Vector Database**: Vertex AI Search or Vector Search (Matching Engine).
- **API Framework**: FastAPI (High performance, async support).

## 2. RAG Pipeline Flow
1. **Ingestion**: Documents (PDF, Docx, SQL) are processed via Vertex AI document loaders.
2. **Chunking**: Semantic chunking to preserve context.
3. **Embeddings**: `textembedding-gecko@latest` (or `multimodalembedding` for images).
4. **Storage**: Vectors indexed in Vertex AI Vector Search.
5. **Retrieval**: Hybrid Search (Keywords + Semantic) to maximize speed and accuracy.
6. **Generation**: Gemini 1.5 Pro with Grounding in the retrieved context.

## 3. Enterprise Security & Governance
To maintain the "Glass Fortress" standard for Canadian enterprises:
- **Data Residency**: All storage and processing restricted to `northamerica-northeast1` (Montreal).
- **VPC Service Controls (VPC SC)**: Isolation of the Vertex AI environment from the public internet.
- **IAM-based Security**: Principle of Least Privilege for all service accounts.
- **Private Service Connect**: Secure communication between the frontend (on GCE/GKE) and the Vertex AI API.

## 4. Scalability
- **The Fortress Mode**: Prioritize strict VPC isolation and encryption at rest/transit with CMEK (Customer-Managed Encryption Keys).
- **The Accelerator Mode**: Optimize for low-latency retrieval using cached versions of indices and Gemini 1.5 Flash for faster initial responses.

---
*Senior Cloud Architect @ Axion Minds*
