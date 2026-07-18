---
title: "Shri AI"
summary: "A local-first, citation-grounded spiritual reflection assistant built with Ollama, PostgreSQL/pgvector, and private voice transcription."
category: "GenAI / RAG"
problem: "Generic AI assistants can produce unsupported spiritual claims, hide source uncertainty, and depend on hosted model APIs."
built: "A Next.js application with authenticated workspaces, reviewed scripture ingestion, hybrid retrieval, citation validation, abstention, local Ollama chat and embeddings, and faster-whisper voice input."
features:
  - Local Ollama chat and embeddings
  - Authenticated workspace conversations
  - Reviewed scripture with source provenance
  - Full-text and pgvector hybrid retrieval
  - Citation validation and safe abstention
  - Private faster-whisper voice input
outcome: "A portfolio-grade local-first MVP with evaluation tooling and release gates. Production validation and broader source review remain in progress."
role: "Product strategy, AI architecture, full-stack engineering, RAG evaluation, and local inference integration."
stack:
  - Next.js 16
  - TypeScript
  - React 19
  - Prisma 7
  - PostgreSQL
  - pgvector
  - Ollama
  - Qwen3
  - faster-whisper
  - Docker
  - Playwright
  - Vitest
labels:
  - Local-first AI
  - Retrieval-augmented generation
  - Full-stack engineering
statusLabels:
  - No AI API keys
  - Source-grounded answers
  - In active development
repository: "https://github.com/manishsoni-dev/ShriAI"
repoUrl: "https://github.com/manishsoni-dev/ShriAI"
status: "in-progress"
featured: true
draft: false
order: 1
published: 2026-07-10
---

## Overview

Shri AI is a local-first spiritual reflection assistant designed to produce source-grounded answers rather than unsupported religious claims. The application runs model inference and embeddings through a local Ollama gateway, stores retrieval data in PostgreSQL with pgvector, and uses a private faster-whisper service for optional voice input.

## Core engineering work

- Built a server-only Ollama provider for local chat and embedding generation.
- Implemented authenticated, workspace-scoped conversations and document retrieval.
- Added a reviewed scripture corpus with provenance, rights metadata, verse boundaries, and reviewer-controlled publication gates.
- Combined PostgreSQL full-text search with pgvector similarity retrieval.
- Added citation validation, confidence handling, and abstention when evidence is insufficient.
- Routed voice uploads through authenticated backend controls to a private faster-whisper service.
- Used browser SpeechSynthesis for keyless text-to-speech fallback.
- Added local release checks covering database readiness, source validation, retrieval evaluation, secret containment, and voice QA evidence.

## Product boundaries

Shri AI is not presented as a deity, religious authority, therapist, medical service, legal service, or crisis service. Model-generated interpretation is separated from retrieved source evidence, and the system is designed to abstain rather than fabricate a citation.

## Current status

The project is in active MVP development. The local-first runtime, RAG foundation, authentication, review workflow, and voice architecture are implemented in the repository. Broader corpus review, real-user validation, production capacity testing, and public-beta operations remain future work.
