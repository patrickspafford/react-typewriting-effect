import React, { useEffect, useState } from 'react'

export interface TypewriterProps {
  children: string
  delay?: number
  stopBlinkinOnComplete?: any
  className?: string
  onComplete: () => void
  cursor?: string
  cursorClassName?: string
  TextWrapper: any
}

export function Typewriter({
  TextWrapper,
  delay = 100,
  children,
  stopBlinkinOnComplete = false,
  className,
  onComplete = () => {},
  cursor = '|',
  cursorClassName = undefined
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [pointer, setPointer] = useState(-1)
  const [isBlinking, setBlinking] = useState(true)

  useEffect(() => {
    if (pointer < children.length) {
      setTimeout(() => {
        setText(text + children.charAt(pointer))
        setPointer(pointer + 1)
      }, delay)
    } else {
      if (stopBlinkinOnComplete) setBlinking(false)
      onComplete()
    }
  }, [pointer])

  return (
    <span className={className}>
      {TextWrapper
        ? (props: any) => <TextWrapper {...props}>{text}</TextWrapper>
        : text}
      {isBlinking ? (
        <span className={cursorClassName || 'blinkingCursor'}>{cursor}</span>
      ) : null}
    </span>
  )
}
