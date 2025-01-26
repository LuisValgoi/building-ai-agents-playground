'use client'

import { useState } from 'react'
import { generateCompletion } from './actions'

export default function Home() {
  const [count, setCount] = useState('')
  const [topic, setTopic] = useState('')
  const [keywords, setKeywords] = useState('')
  const [tone, setTone] = useState('')
  const [completion, setCompletion] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerateCompletion = async () => {
    setLoading(true)
    const { completion } = await generateCompletion(count, topic, keywords, tone)
    setCompletion(completion)
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Generate FAQs</h1>
        <p className="mt-4 text-lg">
          Enter a topic and click the button to generate FAQs using LLM
        </p>
        <input
          type="text"
          placeholder="Enter a topic"
          className="w-1/2 m-3 rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter keywords"
          className="w-1/2 m-3 rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a tone"
          className="w-1/2 m-3 rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a count"
          className="w-1/2 m-3 rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          onClick={handleGenerateCompletion}
          className="inline-flex items-center gap-x-2 m-3 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Generate FAQs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
        </button>
        {loading && <p className="mt-4">Loading...</p>}
        {completion && (
          <textarea
            readOnly
            value={completion}
            cols={100}
            rows={20}
            className="w-full bg-slate-50 p-10 text-base text-slate-900 focus:outline-none dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400"
          />
        )}
      </div>
    </main>
  )
}
