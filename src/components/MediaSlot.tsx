import { useState, type CSSProperties, type ReactNode } from 'react'

// =================================================================
//  MediaSlot — gracefully shows real media OR an illustrated fallback.
//
//  TO ADD REAL MEDIA: pass `src` (and `type`/`poster`) to any MediaSlot.
//  Leave `src` empty/undefined to show the `fallback` (the SVG illustration
//  or gradient). A fixed `aspect` ratio pins layout, so swapping media in
//  never causes layout shift. Real media fades in over a shimmer placeholder.
//
//  Video guidance: short (8–15s), MUTED, looping, compressed MP4 (H.264)
//  or WebM, ~2–6 MB. ALWAYS supply a `poster` image.
// =================================================================

export type MediaSlotProps = {
  id: string
  src?: string
  type?: 'image' | 'video'
  poster?: string
  alt?: string
  fallback: ReactNode
  className?: string
  /** Dark overlay (~35%) over real media so foreground text stays legible. */
  overlay?: boolean
  /** A fixed aspect ratio like '4 / 3' — pin layout regardless of media. */
  aspect?: string
  /** Pass-through inline style for parallax wrappers etc. */
  style?: CSSProperties
  /** Above-the-fold media (the hero) loads eagerly; everything else lazy-loads. */
  priority?: boolean
}

export function MediaSlot({
  src,
  type = 'image',
  poster,
  alt = '',
  fallback,
  className = '',
  overlay = false,
  aspect,
  style,
  priority = false,
}: MediaSlotProps) {
  const [loaded, setLoaded] = useState(false)
  const containerStyle: CSSProperties = {
    ...(aspect ? { aspectRatio: aspect } : null),
    ...style,
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={containerStyle}>
      {/* shimmer underlay only while real media is loading */}
      {src && !loaded && <div className="absolute inset-0 shimmer" aria-hidden="true" />}

      {!src && <div className="absolute inset-0">{fallback}</div>}

      {src && type === 'image' && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover media-fade ${loaded ? 'is-loaded' : ''}`}
        />
      )}

      {src && type === 'video' && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          onLoadedData={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover media-fade ${loaded ? 'is-loaded' : ''}`}
        />
      )}

      {overlay && <div className="absolute inset-0 bg-[rgba(27,42,51,0.35)]" aria-hidden="true" />}
    </div>
  )
}
