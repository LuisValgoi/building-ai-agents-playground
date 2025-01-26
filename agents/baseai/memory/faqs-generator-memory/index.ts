import { MemoryI } from '@baseai/core'

const faqGeneratorMemory = (): MemoryI => ({
  name: 'faqs-generator-memory',
  description: 'Memory for the FAQs generator',
  git: {
    enabled: false,
    include: ['documents/**/*'],
    gitignore: false,
    deployedAt: '',
    embeddedAt: ''
  }
})

export default faqGeneratorMemory
