import { useWindowDimensions } from 'react-native';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

export function useMediaQuery() {
  const { width } = useWindowDimensions();
  return { 
    isSm: width >= parseInt(fullConfig.theme.screens.sm, 10), 
    isMd: width >= parseInt(fullConfig.theme.screens.md, 10), 
    isLg: width >= parseInt(fullConfig.theme.screens.lg, 10), 
    isXl: width >= parseInt(fullConfig.theme.screens.xl, 10) 
  };
}