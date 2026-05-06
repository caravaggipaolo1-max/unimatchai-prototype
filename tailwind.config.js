export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        muted: '#667085',
        brand: {
          50: '#eef8ff',
          100: '#d9f0ff',
          500: '#2477ff',
          600: '#155eef',
          700: '#004eeb',
          900: '#102a56'
        },
        mint: { 50: '#eefcf6', 500: '#12b76a', 700: '#047857' },
        amber: { 50: '#fffaeb', 500: '#f79009' }
      },
      boxShadow: {
        soft: '0 18px 48px rgba(16, 24, 40, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
