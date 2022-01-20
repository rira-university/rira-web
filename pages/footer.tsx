import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  return (
    <footer
      css={css`
        align-items: center;
        background-color: #869cdd;
        display: flex;
        flex-direction: column;
        padding: 22px 0;

        @media (min-width: 1024px) {
          flex-direction: row-reverse;
          justify-content: space-between;
          padding: 36px calc(100% * 192 / 1440);
        }
      `}
    >
      <div
        css={css`
          a {
            &:not(:first-of-type) {
              margin-left: 20px;
            }

            img {
              width: 24px;

              @media (min-width: 1024px) {
                width: 48px;
              }
            }
          }
        `}
      >
        <a
          href='https://twitter.com/KawaiiGirlNFT'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imagePrefix + '/icon-twitterjp.png'}
            alt='Twitter JP logo'
          />
        </a>
        <a
          href='https://twitter.com/RiraUniversity'
          target='_blank'
          rel='noreferrer'
        >
          <img src={imagePrefix + '/icon-twitter.png'} alt='Twitter logo' />
        </a>
        <a
          href='https://github.com/rira-university/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={imagePrefix + '/icon-github.png'} alt='GitHub logo' />
        </a>
        <a
          href='https://discord.com/invite/4mX3gBRDWt'
          target='_blank'
          rel='noreferrer'
        >
          <img src={imagePrefix + '/icon-discord.png'} alt='Discord logo' />
        </a>
        <a
          href='https://medium.com/rira-institute-of-technology'
          target='_blank'
          rel='noreferrer'
        >
          <img src={imagePrefix + '/icon-medium.png'} alt='Medium logo' />
        </a>
      </div>
      <span
        css={css`
          color: #000;
          font-family: BalooDa, sans-serif;
          font-size: 12px;
          letter-spacing: -0.38px;
          margin-top: 12px;
          text-align: center;

          @media (min-width: 1024px) {
            font-size: 24px;
            letter-spacing: -0.75px;
            margin-top: 0;
          }
        `}
      >
        © Copyright 2022 RIT
      </span>
    </footer>
  )
}
