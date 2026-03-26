import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '16px' }}>
      <img
        src="https://infile.com/hubfs/fav%20icon%201%20infile.png"
        alt="Infile"
        width={28}
        height={28}
      />
      Infile Docs
    </span>
  ),
  project: {
    link: 'https://infile.com',
  },
  docsRepositoryBase: 'https://github.com/TU_USUARIO/infile-docs',
  footer: {
    text: `© ${new Date().getFullYear()} Infile, S.A. — Todos los derechos reservados.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Documentación técnica de los Web Services de INFILE para FEL Guatemala" />
      <link rel="icon" href="https://infile.com/hubfs/fav%20icon%201%20infile.png" />
      <title>Infile Docs</title>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Infile Docs',
    }
  },
  sidebar: {
    titleComponent({ title }) {
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
  },
  navigation: true,
  darkMode: true,
}

export default config
