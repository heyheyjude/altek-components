import React, { ReactNode } from 'react'
import { Text as RawText, TextProps } from 'react-native'
import { textStyles } from './styles'

type ThemedTextProps = {
  medium?: boolean
  bold?: boolean
  extraBold?: boolean
  subline?: boolean
  children?: ReactNode
  label?: string | number
} & TextProps

export default function Text({
  medium,
  bold,
  extraBold,
  children,
  style,
  label,
  ...props
}: ThemedTextProps) {
  const fontStyle = [
    textStyles.regular,
    textStyles.defaults,
    medium ? textStyles.medium : null,
    bold ? textStyles.bold : null,
    extraBold ? textStyles.extraBold : null,
    style,
  ]

  return (
    <RawText style={fontStyle} {...props}>
      {label || children}
    </RawText>
  )
}

export { textStyles }
