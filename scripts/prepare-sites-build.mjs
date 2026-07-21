import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const serverDirectory = resolve('dist/server')
const workerEntry = resolve(serverDirectory, 'index.js')

const workerSource = `export default {
  async fetch(request, env) {
    if (!env.ASSETS || typeof env.ASSETS.fetch !== 'function') {
      return new Response('Static asset binding is unavailable.', { status: 500 })
    }

    const response = await env.ASSETS.fetch(request)
    const acceptsHtml = request.headers.get('accept')?.includes('text/html')

    if (response.status !== 404 || request.method !== 'GET' || !acceptsHtml) {
      return response
    }

    const indexUrl = new URL('/index.html', request.url)
    return env.ASSETS.fetch(new Request(indexUrl, request))
  },
}
`

await mkdir(serverDirectory, { recursive: true })
await writeFile(workerEntry, workerSource, 'utf8')
