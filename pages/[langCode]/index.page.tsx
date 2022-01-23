import Head from 'next/head'
import {css} from '@emotion/react'
import Cover from './sections/cover'
import Introduction from './sections/introduction'
import Activity from './sections/activity'
import Department from './sections/department'
import TeachingAssistant from './sections/teaching-assistant'
import Roadmap from './sections/roadmap'
import {LangCode, LocalePageProps} from '../../common/lib/locales'
import Partners from '@/pages/[langCode]/sections/partners'
import {useEffect} from 'react'

export default function IndexPage(localePageProps: LocalePageProps) {
  const {currentLangCode} = localePageProps

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const targetSelector = target.getAttribute('href') || '#'
        // @ts-ignore
        document
          .querySelector(targetSelector === '#' ? 'body' : targetSelector)
          .scrollIntoView({
            behavior: 'smooth',
          })
      })
    })
  }, [])

  return (
    <>
      <Head>
        {Object.values(LangCode)
          .filter((langCode) => langCode !== currentLangCode)
          .map((langCode) => (
            <link
              key={langCode}
              rel='alternate'
              hrefLang={langCode}
              href={`https://rira.university/${langCode}`}
            />
          ))}
      </Head>

      <main
        css={css`
          overflow: hidden;
          ${currentLangCode === LangCode.Kr && 'word-break: keep-all'}
        `}
      >
        <Cover {...localePageProps} />
        <Introduction {...localePageProps} />
        <Activity />
        <Department {...localePageProps} />
        <TeachingAssistant {...localePageProps} />
        <Roadmap {...localePageProps} />
        <Partners {...localePageProps} />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.values(LangCode).map((langCode: LangCode) => {
    return {
      params: {
        langCode: langCode,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: {langCode: LangCode}}) {
  return {
    props: {
      currentLangCode: params.langCode,
    },
  }
}
