export const theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#667eea',
      600: '#764ba2',
      900: '#1e293b'
    },
    secondary: {
      500: '#f59e0b',
      600: '#d97706'
    },
    success: {
      500: '#10b981',
      600: '#059669'
    },
    danger: {
      500: '#ef4444',
      600: '#dc2626'
    },
    warning: {
      500: '#f59e0b',
      600: '#d97706'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    },
    white: '#ffffff',
    black: '#000000'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    danger: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    delete: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    vector1: 'linear-gradient(135deg, #EECE13 0%, #B210FF 100%)',
    vector2: 'linear-gradient(135deg, rgba(255, 111, 216, 0.6) 0%, rgba(56, 19, 194, 0.6) 100%)'
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '0.75rem',   // 12px
    lg: '1rem',      // 16px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    '4xl': '2.5rem', // 40px
    '5xl': '3rem'    // 48px
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '50%'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  boxShadow: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 25px rgba(0, 0, 0, 0.1)',
    xl: '0 10px 30px rgba(0, 0, 0, 0.1)',
    '2xl': '0 20px 60px rgba(0, 0, 0, 0.3)'
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1920px'
  }
};

// Responsive utility functions
export const media = {
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  xl: `@media (max-width: ${theme.breakpoints.xl})`,
  '2xl': `@media (max-width: ${theme.breakpoints['2xl']})`,
  
  // Min-width breakpoints
  smUp: `@media (min-width: ${theme.breakpoints.sm})`,
  mdUp: `@media (min-width: ${theme.breakpoints.md})`,
  lgUp: `@media (min-width: ${theme.breakpoints.lg})`,
  xlUp: `@media (min-width: ${theme.breakpoints.xl})`,
  '2xlUp': `@media (min-width: ${theme.breakpoints['2xl']})`
};

// Common responsive patterns
export const responsivePatterns = {
  // Common padding responsive pattern
  containerPadding: `
    padding: 2rem 4rem;
    
    @media (max-width: 1200px) {
      padding: 2rem 2rem;
    }
    
    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
    
    @media (max-width: 480px) {
      padding: 1rem 0.5rem;
    }
  `,
  
  // Grid responsive pattern
  responsiveGrid: `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  `,
  
  // Flex navigation pattern
  responsiveNav: `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 0 1rem;
    }
    
    @media (max-width: 480px) {
      padding: 1rem;
    }
  `,
  
  // Card hover effects
  cardHover: `
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }
  `
};

export type Theme = typeof theme; 