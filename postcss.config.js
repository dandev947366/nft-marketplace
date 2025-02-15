module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', '> 1%'],
    },
    'postcss-print-media-query': {}, // Optional plugin if needed for print media queries
    tailwindcss: {}, // Ensure TailwindCSS is included
    'postcss-nested': {}, // For better nesting of CSS rules (optional)
  },
};
