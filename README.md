# React Revision

# Steps to create new app every time for new task practice

* Step 1: Create vite app 
-----------------------------------------------------------
    npm create vite@latest
-----------------------------------------------------------

Step 2: Move to that directory 
        [ cd `app name` ]

Step 3: Install dependencies 
        [ npm i ]

Step 4.1: Install Tailwind 
        [ npm install -D tailwindcss postcss autoprefixer ]
        [ npx tailwindcss init -p ]

Step 4.2: Configure Template path in tailwind.config.ts (Note: Replace below code)
---------------------------------------------------------
        /** @type {import('tailwindcss').Config} */
        export default {
            content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }
----------------------------------------------------------

Step 4.3: Add the Tailwind directives to your CSS (Note: Replace below code in index.css)
---------------------------------------------------------
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
----------------------------------------------------------

