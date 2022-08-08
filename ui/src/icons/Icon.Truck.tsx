import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './_types'
import { GRAY } from '../colors'

export default function TruckIcon({
  size = 38,
  color = GRAY.COMMON,
  style,
}: IconProps) {
  return (
    <Svg
      style={style}
      width={size}
      height={size}
      viewBox="-5 -10 35 35"
      fill={color}
    >
      <Path d="M26.04 7.65302L25.315 4.75201C25.513 4.71001 25.662 4.53401 25.662 4.32401V3.85599C25.662 2.84099 24.836 2.01501 23.82 2.01501H20.518V1.04999C20.518 0.549988 20.111 0.144012 19.612 0.144012H2.77699C2.27699 0.144012 1.871 0.549988 1.871 1.04999V9C1.871 9.242 2.06701 9.43799 2.30901 9.43799C2.55101 9.43799 2.74699 9.242 2.74699 9V1.04999C2.74699 1.03399 2.75999 1.021 2.77699 1.021H19.612C19.628 1.021 19.641 1.03399 19.641 1.04999V9C19.641 9.242 19.837 9.439 20.079 9.439C20.321 9.439 20.518 9.242 20.518 9V8.50299H25.689H25.691C26.327 8.50399 26.869 8.92101 27.054 9.49701H25.691C25.449 9.49701 25.252 9.693 25.252 9.935V10.871C25.252 11.628 25.869 12.244 26.626 12.244H27.123V14.173H25.977C25.6 13.086 24.566 12.303 23.353 12.303C22.139 12.303 21.105 13.086 20.729 14.173H20.518V10.871C20.518 10.628 20.321 10.432 20.079 10.432C19.837 10.432 19.641 10.628 19.641 10.871V14.173H10.545C10.168 13.086 9.13399 12.303 7.92099 12.303C6.70699 12.303 5.673 13.086 5.297 14.173H2.77699C2.75999 14.173 2.74699 14.16 2.74699 14.144V13.179H4.647C4.889 13.179 5.086 12.983 5.086 12.741C5.086 12.499 4.889 12.303 4.647 12.303H0.438004C0.196004 12.303 0 12.499 0 12.741C0 12.983 0.196004 13.179 0.438004 13.179H1.871V14.144C1.871 14.644 2.27699 15.05 2.77699 15.05H5.14499C5.14499 15.06 5.14401 15.069 5.14401 15.079C5.14401 16.61 6.38999 17.856 7.92099 17.856C9.45199 17.856 10.697 16.61 10.697 15.079C10.697 15.069 10.697 15.06 10.696 15.05H20.577C20.577 15.06 20.576 15.069 20.576 15.079C20.576 16.61 21.822 17.856 23.353 17.856C24.884 17.856 26.129 16.61 26.129 15.079C26.129 15.069 26.129 15.06 26.129 15.05H27.562C27.804 15.05 28 14.854 28 14.612V9.935C28 8.781 27.148 7.82102 26.04 7.65302ZM20.518 2.89099H23.82C24.352 2.89099 24.785 3.32399 24.785 3.85599V3.88501H20.518V2.89099ZM20.518 7.62601V4.76199H24.413L25.13 7.62601H20.518ZM7.92099 16.979C6.87299 16.979 6.021 16.127 6.021 15.079C6.021 14.032 6.87299 13.18 7.92099 13.18C8.96799 13.18 9.82001 14.032 9.82001 15.079C9.82001 16.127 8.96799 16.979 7.92099 16.979ZM23.353 16.979C22.305 16.979 21.453 16.127 21.453 15.079C21.453 14.032 22.305 13.18 23.353 13.18C24.4 13.18 25.253 14.032 25.253 15.079C25.253 16.127 24.4 16.979 23.353 16.979ZM27.123 11.367H26.626C26.352 11.367 26.129 11.145 26.129 10.871V10.374H27.123V11.367Z" />
    </Svg>
  )
}
