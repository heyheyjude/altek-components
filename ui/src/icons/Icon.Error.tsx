import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './_types'
import { RED } from '../colors'

export default function ErrorIcon({
  size = 14,
  color = RED.BORDER,
  style,
}: IconProps) {
  return (
    <Svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        d="M7 9.595a.727.727 0 00-.72.72c0 .39.328.719.72.719.377 0 .72-.328.702-.703A.703.703 0 007 9.595z"
        fill={color}
      />
      <Path
        d="M13.66 12.145c.451-.78.454-1.71.005-2.487L9.158 1.853A2.449 2.449 0 007.003.602c-.904 0-1.71.469-2.156 1.249L.335 9.664a2.476 2.476 0 00.008 2.501 2.463 2.463 0 002.15 1.235h9.002c.9 0 1.71-.47 2.164-1.255zm-.98-.564a1.36 1.36 0 01-1.188.688H2.49c-.49 0-.93-.25-1.174-.674a1.362 1.362 0 01-.003-1.373l4.513-7.81a1.335 1.335 0 011.177-.682c.492 0 .932.256 1.177.685l4.51 7.81c.241.42.238.927-.01 1.356z"
        fill={color}
      />
      <Path
        d="M6.821 4.545c-.342.098-.555.408-.555.785.017.228.031.458.049.685.048.867.097 1.716.146 2.582A.527.527 0 007 9.103a.538.538 0 00.539-.523c0-.179 0-.343.017-.524l.098-1.667c.017-.36.049-.719.066-1.079a.889.889 0 00-.066-.36.721.721 0 00-.832-.405z"
        fill={color}
      />
    </Svg>
  )
}
