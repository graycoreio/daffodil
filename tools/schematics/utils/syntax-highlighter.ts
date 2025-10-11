// src/utils/syntax-highlighter.ts
import { getHighlighter, Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

async function getCachedHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = getHighlighter({ theme: 'vitesse-dark' })
  }
  return highlighterPromise
}

export async function highlightCode(code: string, lang: string = 'typescript'): Promise<string> {
  const highlighter = await getCachedHighlighter()
  return highlighter.codeToHtml(code, { lang })
}
