# Helpful Link

https://blog.logrocket.com/building-ai-agent-frontend-project/?ref=dailydev

https://baseai.dev/docs/guides/using-ollama-models

https://langbase.com/settings/keys

https://langbase.com/luisvalgoi/faqs-generator

# Explaining BaseAi Commands

- `npx baseai@latest auth`: Authenticate using BaseAI.

- `npx baseai@latest init`: Initializing a BaseAI project.

- `npx baseai@latest pipe`: Creating a Pipeline for the project using BaseAI.

- `npx baseai@latest memory`: Creating a Memory for the project using BaseAI.

- `npx baseai@latest embed -m <memory_name>`: Creating a Memory Embedding

- `npx baseai@latest dev`: Running the Server Agents.

- `npx baseai@latest deploy`: Deplying into BaseAI Studio.

# Running the Server

- `npx tsx index.ts`: Running the Server Agents with a minimal example.

- `npx tsx index-rag.ts`: Running the Server Agents with a minimal RAG example.

# Running Models Locally with Ollama

- `ollama run deepseek-r1:7b`: Running DeepSeekR1 Model

- `http://localhost:11434`: Any model once is ran with Ollama, will be pushed into this port

# Configuring Model

- `/set temperature`: Defining the model's criativity level (0 = factual. 1 = creative)

- `/set system`: Defining the base instructions.

# Running App Flow

- `npx baseai@latest dev`: Spinning up the Server Agents.

- `npx tsx index-rag.ts`: Running the Server Agents with a minimal RAG example.

- `npm run dev`: Running the client pointing to the deployed langbase pipe.

- `ollama run deepseek-r1:7b`: Run Ollama Model: If you want to bind the Server Agents with a local model.
