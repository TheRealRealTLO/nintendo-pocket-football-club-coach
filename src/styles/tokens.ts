
// Design tokens for the application
export const tokens = {
  // Font sizes
  fontSize: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  },

  // Font weights
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    pixel: 'font-pixel',
  },

  // Badge styling
  badge: {
    base: 'inline-flex items-center justify-center rounded-sm px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    selected: 'font-semibold border-2 border-black',
    unselected: 'bg-opacity-60 hover:bg-opacity-80 border-2 border-gray-300 text-gray-700',
    card: 'text-xs px-1.5 py-0.5 font-bold',
  },

  // Button styling
  button: {
    base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50',
    pixel: 'font-pixel border-2 border-black relative hover:translate-y-0 active:translate-y-1 active:shadow-none transition-all duration-100 shadow-[4px_4px_0_rgba(0,0,0,0.8)]',
    sizes: {
      sm: 'h-8 px-3 py-1 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 px-6 py-3 text-base',
    },
    variants: {
      primary: 'bg-npfc-green text-black hover:bg-npfc-green-dark',
      secondary: 'bg-npfc-blue text-black hover:bg-npfc-blue-dark',
      danger: 'bg-npfc-red text-black hover:bg-red-500',
      outline: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    }
  }
};
