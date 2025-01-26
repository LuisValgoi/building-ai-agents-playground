import 'dotenv/config'
import { Pipe, getRunner } from '@baseai/core'
import pipeFaqGeneratorMemory from './baseai/pipes/faqs-generator-memory'

const pipe = new Pipe({
  ...pipeFaqGeneratorMemory()
})

async function main() {
  const { stream } = await pipe.run({
    messages: [
      {
        role: 'user',
        content: 'Which Tailwind CSS component library provides the most components?'
      }
    ],
    stream: true
  })

  const runner = getRunner(stream)
  runner.on('connect', () => {
    console.log('Stream started.\n')
  })
  runner.on('content', (content) => {
    process.stdout.write(content)
  })
  runner.on('end', () => {
    console.log('\nStream ended.')
  })
  runner.on('error', (error) => {
    console.error('Error:', error)
  })
}

main()
