import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/arete-internship',
  },
  page: {
    title: {
      base: '亞瑞特實習'                // --> the base title of your doc pages
    },
    fonts: {                             // --> font settings
      text: {                            // --> font used for texts
        url:                             // --> URL of font used for texts
          'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap',
        name: 'Noto Sans TC',                    // --> name of font used for texts
        fallback: 'sans-serif'           // --> the fallback font for texts
      },
      code: {                            // --> font used for codes
        url:                             // --> URL of font used for codes
          'https://fonts.googleapis.com/css?family=Fira+Code:300,400&display=swap',
        name: 'Fira Code',         // --> name of the font used for codes
        fallback:                        // --> fallback font for codes
          `'Courier New', Courier, monospace`
      }
    }
  },
  
});
