/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rich luxury brand palette
        brandGold: {
          50: '#FFFBF0',
          100: '#FEF7E6',
          200: '#FCEFCC',
          300: '#F9E7B2',
          400: '#F7DF98',
          500: '#F4D77E',
          600: '#D4B866',
          700: '#B4994E',
          800: '#947A36',
          900: '#745B1E',
          DEFAULT: '#E4BF7A', // Rich warm gold
        },
        brandGreen: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50', // Vibrant medium-dark green (like IPL)
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
          DEFAULT: '#4CAF50', // Vibrant medium-dark green
        },
        brandPink: {
          50: '#FFF5F8',
          100: '#FFE5EC',
          200: '#FFCBD9',
          300: '#FFB1C6',
          400: '#FF97B3',
          500: '#FF7DA0',
          600: '#E6678D',
          700: '#CC517A',
          800: '#B33B67',
          900: '#992554',
          DEFAULT: '#FFB6C1', // Soft elegant pink
        },
        brandBlue: {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#3F51B5', // Deep indigo/dark blue (like IPL)
          600: '#3949AB',
          700: '#303F9F',
          800: '#283593',
          900: '#1A237E',
          DEFAULT: '#3F51B5', // Deep indigo
        },
        brandCream: {
          50: '#F0F9F4',  // Very pale mint green background
          100: '#E6F5EB',
          200: '#CCEBD7',
          300: '#B3E1C3',
          400: '#99D7AF',
          500: '#80CD9B',
          600: '#66B387',
          700: '#4D9973',
          800: '#33805F',
          900: '#1A664B',
          DEFAULT: '#F0F9F4', // Very pale mint green
        },
        // New vibrant green (from "GAME")
        vibrantGreen: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',  // Vibrant medium-dark green
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
          DEFAULT: '#4CAF50',
        },
        // Deep indigo blue (from "E" and dark text)
        deepIndigo: {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#3F51B5',  // Deep indigo/dark blue
          600: '#3949AB',
          700: '#303F9F',
          800: '#283593',
          900: '#1A237E',
          DEFAULT: '#3F51B5',
        },

        // Primary scale (using vibrant green as base)
        primary: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'card-hover': 'cardHover 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(76, 175, 80, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(76, 175, 80, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000% 0' },
          '100%': { backgroundPosition: '1000% 0' },
        },
        magnetic: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        parallax: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        cardHover: {
          '0%': { transform: 'scale(1) translateY(0)' },
          '100%': { transform: 'scale(1.05) translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
