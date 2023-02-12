'use client'

import { Noto_Sans_KR } from '@next/font/google'
import localFont from '@next/font/local'

export const Pretendard = localFont({
  src: './variable/PretendardVariable.woff2',
  variable: '--pretendard',
})
export const Pretendards = localFont({
  display: 'swap',
  variable: '--pretendards',
  preload: true,
  src: [
    {
      path: './woff2/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './woff2/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
})
const bold = Noto_Sans_KR({
  weight: '700',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: ['system-ui'],
})
const medium = Noto_Sans_KR({
  weight: '500',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: ['system-ui'],
})
const normal = Noto_Sans_KR({
  weight: '400',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-normal',
  fallback: ['system-ui'],
})
export const NotoSansKR = {
  normal,
  medium,
  bold,
}
