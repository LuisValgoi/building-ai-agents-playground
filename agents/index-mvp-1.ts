import 'dotenv/config'
import { Pipe, getRunner } from '@baseai/core'
import pipeFaqsGenerator from './baseai/pipes/faqs-generator'

const pipe = new Pipe({
  ...pipeFaqsGenerator()
})

async function main() {
  const { stream } = await pipe.run({
    messages: [],
    variables: [
      { name: 'count', value: '3' },
      { name: 'topic', value: 'money' },
      { name: 'keywords', value: 'investment' },
      { name: 'tone', value: 'informative' }
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
