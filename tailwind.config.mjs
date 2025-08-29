/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: '#157f71',
				secondary: '#db1d00'
			},
			backgroundImage:{
				'hero-pattern': 'url(/hero-pattern.webp)'
			} 
		},
	},
	plugins: [],
}