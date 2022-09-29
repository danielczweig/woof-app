import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#F1EDEE',
      900: '#DB5461'
    },
    gray: {
      100: '#dbd3d3',
      900: '#686963'
    },
    blue: {
      100: '#8AA29E',
      200: '#3D5467'
    }
  },
  fonts: {
    body: 'Graphik Font',
    heading: 'Graphik Font'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  components: {
    Progress: {
      baseStyle: {
        track: {
          bg: '#dbd3d3'
        },
        filledTrack: {
          bg: '#DB5461'
        }
      }
    }
  }
})

export default customTheme