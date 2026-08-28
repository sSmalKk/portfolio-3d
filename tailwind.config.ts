import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'heartbeat': {
					'0%, 50%, 100%': {
						transform: 'scale(1)',
						opacity: '0.7'
					},
					'25%': {
						transform: 'scale(1.02)',
						opacity: '0.9'
					},
					'75%': {
						transform: 'scale(1.01)',
						opacity: '0.8'
					}
				},
				'wandering-light': {
					'0%': {
						transform: 'translateX(0) translateY(0) scale(1)',
						opacity: '0.4'
					},
					'12.5%': {
						transform: 'translateX(40px) translateY(-25px) scale(1.3)',
						opacity: '0.7'
					},
					'25%': {
						transform: 'translateX(15px) translateY(35px) scale(0.7)',
						opacity: '0.5'
					},
					'37.5%': {
						transform: 'translateX(-30px) translateY(10px) scale(1.1)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateX(-10px) translateY(-40px) scale(0.9)',
						opacity: '0.6'
					},
					'62.5%': {
						transform: 'translateX(25px) translateY(20px) scale(1.2)',
						opacity: '0.9'
					},
					'75%': {
						transform: 'translateX(-5px) translateY(-15px) scale(0.8)',
						opacity: '0.4'
					},
					'87.5%': {
						transform: 'translateX(35px) translateY(5px) scale(1.05)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateX(0) translateY(0) scale(1)',
						opacity: '0.4'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'33.33%': {
						backgroundPosition: '100% 25%'
					},
					'66.66%': {
						backgroundPosition: '50% 100%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.7'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heartbeat': 'heartbeat 8s ease-in-out infinite',
				'wandering-light': 'wandering-light 20s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 25s ease infinite',
				'pulse-slow': 'pulse-slow 8s ease-in-out infinite'
			},
			backgroundSize: {
				'300%': '300% 300%',
				'400%': '400% 400%'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
