import AppHeader from './components/app_header/AppHeader.jsx'
import FooterBlock from './components/footer/FooterBlock.jsx'
import MainBlock from './components/main/MainBlock.jsx'

function App() {
  return (
    <div className="App" style={{ color: 'white' }}>
      <div className="purple_decor_block"></div>
      <div className="red_decor_block"></div>
      <div className="balls_block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="117"
          height="117"
          viewBox="0 0 117 117"
          fill="none"
          className="mainBall"
        >
          <g filter="url(#filter0_bd_0_13)">
            <circle
              cx="55.5"
              cy="52.5"
              r="41.5"
              fill="url(#paint0_radial_0_13)"
              fillOpacity="0.8"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_0_13"
              x="0"
              y="0"
              width="117"
              height="117"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_13"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="10"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_0_13"
              />
              <feOffset dx="3" dy="6" />
              <feGaussianBlur stdDeviation="13.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_0_13"
                result="effect2_dropShadow_0_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_13"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_13"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(36.6175 32.995) rotate(51.0412) scale(68.3129)"
            >
              <stop stopColor="#FFD0D0" stopOpacity="0.67" />
              <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.33" />
              <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.31" />
              <stop offset="1" stopColor="#821919" stopOpacity="0.31" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="81"
          viewBox="0 0 94 81"
          fill="none"
          className="averageBall"
        >
          <g filter="url(#filter0_bdf_0_14)">
            <circle
              cx="44"
              cy="28"
              r="30"
              fill="url(#paint0_radial_0_14)"
              fillOpacity="0.8"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bdf_0_14"
              x="0"
              y="-13"
              width="94"
              height="94"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_14"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="10"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_0_14"
              />
              <feOffset dx="3" dy="6" />
              <feGaussianBlur stdDeviation="13.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.694118 0 0 0 0 0.462745 0 0 0 0 0.85098 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_0_14"
                result="effect2_dropShadow_0_14"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_14"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="5"
                result="effect3_foregroundBlur_0_14"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_14"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(30.35 13.9) rotate(51.0412) scale(49.3828)"
            >
              <stop stopColor="#ECD0FF" stopOpacity="0.8" />
              <stop offset="0.596678" stopColor="#A15DCF" stopOpacity="0.3" />
              <stop offset="0.785899" stopColor="#7631A4" stopOpacity="0.26" />
              <stop offset="1" stopColor="#561880" stopOpacity="0.29" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          className="tinyBall"
        >
          <g filter="url(#filter0_bdf_0_12)">
            <circle
              cx="28"
              cy="25"
              r="14"
              fill="url(#paint0_radial_0_12)"
              fillOpacity="0.8"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_bdf_0_12"
              x="0"
              y="0"
              width="62"
              height="62"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_0_12"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="10"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_0_12"
              />
              <feOffset dx="3" dy="6" />
              <feGaussianBlur stdDeviation="13.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_0_12"
                result="effect2_dropShadow_0_12"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_12"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2.5"
                result="effect3_foregroundBlur_0_12"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_12"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(21.63 18.42) rotate(51.0412) scale(23.0453)"
            >
              <stop stopColor="#FFD0D0" stopOpacity="0.6" />
              <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.31" />
              <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.33" />
              <stop offset="1" stopColor="#821919" stopOpacity="0.29" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <AppHeader />
      <MainBlock />
      <FooterBlock />
    </div>
  )
}

export default App
