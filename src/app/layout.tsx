'use client'

import { Nav } from '@/components/NavComponent/Nav'
import ReactQuery from '@/components/ReactQuery'
import Recoil from '@/components/Recoil'
import StyledJsxRegistry from '@/components/Registry'
import StyledComponentsRegistry from '@/components/Styled'
import { Pretendards } from '@/fonts/Font'
import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-kr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Recoil>
          <ReactQuery>
            <StyledJsxRegistry>
              <StyledComponentsRegistry>
                <div className="fr">
                  <style jsx global>{`
                    html,
                    * {
                      font-family: ${Pretendards.style.fontFamily};
                    }
                  `}</style>
                  <Nav />
                  <div className="contents">{children}</div>
                </div>
              </StyledComponentsRegistry>
            </StyledJsxRegistry>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  )
}
