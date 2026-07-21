import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const lines = ['I build', 'systems', '& identities.']

export default function AnimeHeroTitle() {
  const titleRef = useRef(null)

  useEffect(() => {
    const elements = titleRef.current?.querySelectorAll('.anime-hero-line')
    if (!elements?.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const entrance = animate(elements, {
      y: { from: '115%' },
      opacity: { from: 0 },
      duration: 950,
      delay: stagger(120, { start: 140 }),
      ease: 'outExpo',
    })

    return () => entrance.revert()
  }, [])

  return (
    <h1 ref={titleRef} aria-label="I build systems and identities">
      {lines.map((line, index) => (
        <span className={index === 1 ? 'hero-accent-line' : ''} key={line}>
          <span className="anime-hero-line">{line}</span>
        </span>
      ))}
    </h1>
  )
}
