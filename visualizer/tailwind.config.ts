import type { Config } from 'tailwindcss';
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

      daisyui: {
      themes: [
        {
        mytheme: {
          "primary": "#edbb00",
                    
          
          "primary-content": "#140d00",
                    
          
          "secondary": "#173380",
                    
          
          "secondary-content": "#ccd5e7",
                    
          
          "accent": "#9a181a",
                    
          
          "accent-content": "#f0d3cf",
                    
          
          "neutral": "#a50044",
                    
          
          "neutral-content": "#f3d2d7",
                    
          
          "base-100": "#edbb",
                    
          
          "base-200": "#cfc0a2",
                    
          
          "base-300": "#b1a48a",
                    
          
          "base-content": "#14110d",
                    
          
          "info": "#E5BC66",
                    
          
          "info-content": "#120d03",
                    
          
          "success": "#2D8829",
                    
          
          "success-content": "#010601",
                    
          
          "warning": "#3A1717",
                    
          
          "warning-content": "#d5cccb",
                    
          
          "error": "#a00000",
                    
          
          "error-content": "#ffd9d4",
            },
          },
        ],
      },
      plugins: [
        daisyui,
      ],
      //...
  } satisfies Config;
