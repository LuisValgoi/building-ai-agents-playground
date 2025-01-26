import { PipeI } from '@baseai/core'

const pipeFaqsGenerator = (): PipeI => ({
  apiKey: process.env.LANGBASE_API_KEY!,
  name: 'faqs-generator',
  description: 'A webpage FAQs generator',
  status: 'private',
  model: 'openai:gpt-4o-mini',
  stream: false,
  json: false,
  store: true,
  moderate: true,
  top_p: 1,
  max_tokens: 1000,
  temperature: 0.7,
  presence_penalty: 1,
  frequency_penalty: 1,
  stop: [],
  tool_choice: 'auto',
  parallel_tool_calls: true,
  messages: [
    {
      role: 'system',
      content: `You're a helpful AI assistant. Generate {{count}} frequently asked questions (FAQs) about {{topic}} using the keywords {{keywords}}. 
Each FAQ should consist of a question followed by a concise answer. Ensure the answers are clear, accurate, and helpful for someone who is unfamiliar with the topic. Keep the tone {{tone}}.
`
    }
  ],
  variables: [
    { name: 'count', value: '' },
    { name: 'topic', value: '' },
    { name: 'keywords', value: '' },
    { name: 'tone', value: '' }
  ],
  memory: [],
  tools: []
})

export default pipeFaqsGenerator
