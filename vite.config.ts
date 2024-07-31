import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src/',
            'types': '/src/types/',
            'components': '/src/components/',
            'assets': '/src/assets/',
            'services': '/src/services/',
            'store': '/src/store/',
            'utils': '/src/utils/'
        }
    }
})
