export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        muted: '#64748B',
        brand: {
          50: '#DBEAFE',
          100: '#BFDBFE',
          500: '#2563EB',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A'
        },
        mint: { 50: '#eefcf6', 500: '#12b76a', 700: '#047857' },
        amber: { 50: '#fffaeb', 500: '#f79009' }
      },
      boxShadow: {
        soft: '0 18px 48px rgba(15, 23, 42, 0.08)',
        card: '0 10px 30px rgba(15, 23, 42, 0.06)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
