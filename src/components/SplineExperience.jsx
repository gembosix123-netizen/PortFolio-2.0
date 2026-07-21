import { lazy, Suspense } from 'react'
import MotionScene from './MotionScene'

const Spline = lazy(() => import('@splinetool/react-spline'))
const splineSceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL

function SplineLoader() {
  return <div className="spline-loader" aria-label="Loading interactive 3D scene"><span /></div>
}

export default function SplineExperience() {
  if (!splineSceneUrl) {
    return (
      <div className="spline-fallback" data-spline-ready="add-vite-spline-scene-url">
        <MotionScene />
      </div>
    )
  }

  return (
    <div className="spline-experience" aria-label="Interactive 3D artwork">
      <Suspense fallback={<SplineLoader />}>
        <Spline scene={splineSceneUrl} />
      </Suspense>
    </div>
  )
}
