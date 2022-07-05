import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	tyepscript: {
		shim: false,
	},
	modules: ['@nuxtjs/tailwindcss'],
	tailwindcss: {
		config: {
			theme: {
				fontFamily: {
					sans: ['Lato', 'sans-serif'],
					serif: ['Flamenco', 'serif'],
				},
			},
			plugins: [],
			content: [
				`components/**/*.{vue,js}`,
				`layouts/**/*.vue`,
				`pages/**/*.vue`,
				`composables/**/*.{js,ts}`,
				`plugins/**/*.{js,ts}`,
				`App.{js,ts,vue}`,
				`app.{js,ts,vue}`,
			],
		},
	},
});
