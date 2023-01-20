import React, { useCallback, useEffect, useRef } from 'react'

export const InfiniteScroll = () => {
    const ref = useRef()
    const handleScroll = useCallback(() => {
        console.log("scrolling")
    }, [])
    useEffect(() => {
        const div = ref.current
        div.addEventListener("scroll", handleScroll)
    }, [handleScroll])

  return (
    <div className="scrollableContainer" ref={ref}>
    <div className="content">
      When this content is taller than the parent, it scrolls.
    </div>
  </div>
  )
}
