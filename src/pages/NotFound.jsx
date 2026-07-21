import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <main id="page-content" className="not-found"><span>404</span><h1>This page hasn&apos;t been built.</h1><Link to="/"><ArrowLeft /> Return home</Link></main>
}
