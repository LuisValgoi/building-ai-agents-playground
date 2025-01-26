'use server'

export async function generateCompletion(
  count: string,
  topic: string,
  keywords: string,
  tone: string
) {
  const url = 'https://api.langbase.com/v1/pipes/run'
  const apiKey = process.env.PIPE_API_KEY

  const data = {
    messages: [],
    variables: [
      { name: 'count', value: count },
      { name: 'topic', value: topic },
      { name: 'keywords', value: keywords },
      { name: 'tone', value: tone }
    ]
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify(data)
  })

  console.log('resText', response)
  const resText = await response.json()
  return resText
}
