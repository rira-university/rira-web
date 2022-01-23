import {css} from '@emotion/react'
import {LangCode, LocalePageProps} from '../../../common/lib/locales'
import {
  notoSansJp,
  oneMobilePop,
  oneMobileRegular,
} from '../../../common/utils/font-loader'
import contents from './teaching-assistant.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function TeachingAssistant({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode]

  return (
    <section
      id='teaching-assistant'
      css={css`
        background-color: #fff0d2;
        padding: 40px 0 80px;
        position: relative;

        @media (min-width: 900px) {
          padding: 100px 0 172px;
        }
      `}
    >
      <header
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        `}
      >
        <h2
          css={css`
            color: #000;
            font-family: ${oneMobilePop}, sans-serif;
            font-size: 24px;
            letter-spacing: -0.75px;
            line-height: 1.25;
            margin-top: 10px;
            position: absolute;
            text-align: center;

            @media (min-width: 900px) {
              font-size: 60px;
              letter-spacing: -1.88px;
              line-height: 1.2;
              margin-top: 20px;
            }
          `}
        >
          Teaching Assistant
        </h2>
        <img
          src={imagePrefix + '/img-header.png'}
          alt=''
          css={css`
            width: 300px;

            @media (min-width: 900px) {
              width: 780px;
            }
          `}
        />
      </header>
      <div
        css={css`
          column-gap: 20px;
          display: flex;
          margin-top: 20px;
          overflow-x: auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;

          @media (min-width: 900px) {
            column-gap: 40px;
            flex: 50%;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 60px;
            padding: 0 calc(100% * 150 / 1440);
            row-gap: 28px;
          }

          > div {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 392px;
            min-width: 220px;
            padding: 60px 24px 40px;
            position: relative;
            width: 220px;

            @media (min-width: 900px) {
              height: 620px;
              padding: 72px 24px 52px;
              width: 348px;
            }

            > img:first-of-type {
              background-color: pink;
              border-color: pink;
              border-radius: 100%;
              height: 172px;
              width: 172px;

              @media (min-width: 900px) {
                height: 240px;
                width: 240px;
              }
            }

            > h3 {
              color: #1e1e1e;
              font-family: ${oneMobilePop}, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              margin-top: 20px;
              text-align: center;

              @media (min-width: 900px) {
                font-size: 40px;
                letter-spacing: -1.25px;
                line-height: 1.5;
              }
            }

            > p {
              color: #000;
              font-family: ${currentLangCode === LangCode.Jp
                  ? notoSansJp
                  : oneMobileRegular},
                sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-top: 10px;
              text-align: center;

              @media (min-width: 900px) {
                font-size: 24px;
                letter-spacing: -0.75px;
              }
            }

            > img:last-of-type {
              position: absolute;
              top: 0;
              width: 100%;
              z-index: -1;

              @media (min-width: 900px) {
              }
            }
          }
        `}
      >
        <div css={css``}>
          <img src={imagePrefix + '/img-team1.png'} alt='' />
          <h3>{content.ta1.name}</h3>
          <p>{content.ta1.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team2.png'} alt='' />
          <h3>{content.ta2.name}</h3>
          <p>{content.ta2.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team3.png'} alt='' />
          <h3>{content.ta3.name}</h3>
          <p>{content.ta3.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team4.png'} alt='' />
          <h3>{content.ta4.name}</h3>
          <p>{content.ta4.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team5.png'} alt='' />
          <h3>{content.ta5.name}</h3>
          <p>{content.ta5.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team6.png'} alt='' />
          <h3>{content.ta6.name}</h3>
          <p>{content.ta6.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <img src={imagePrefix + '/img-team7.png'} alt='' />
          <h3>{content.ta7.name}</h3>
          <p>{content.ta7.description}</p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
      </div>
      <img
        src={imagePrefix + '/bg-section-05.png'}
        alt=''
        css={css`
          bottom: 0;
          object-fit: contain;
          position: absolute;
          width: 200%;

          @media (min-width: 900px) {
            width: 100%;
          }
        `}
      />
    </section>
  )
}