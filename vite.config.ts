import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react-swc";  
import path from "path";  
import { componentTagger } from "lovable-tagger";  
import compress from 'vite-plugin-compression';  

export default defineConfig(({ mode }) => ({  
  server: {  
    host: "::",  
    port: 8080,  
  },  
  plugins: [  
    react(),  
    mode === 'development' && componentTagger(),  
    mode === 'production' && compress({  
      verbose: true,  
      disable: false,  
      threshold: 10240,  
      algorithm: 'gzip',  
      ext: '.gz',  
    }),  
  ].filter(Boolean),  
  resolve: {  
    alias: {  
      "@": path.resolve(__dirname, "./src"),  
    },  
  },  
  build: {  
    minify: 'terser',  
    terserOptions: {  
      compress: {
        drop_debugger: true,  
        collapse_vars: true,  
        reduce_vars: true,  
        keep_fnames: false  
      },
      mangle: {  
        toplevel: true,  
        safari10: false,  
        properties: {  
          regex: /^_/  // 只混淆以_开头的属性名  
        }  
      }, 
      format: {  
        comments: false,  
        wrap_iife: true  
      }  
    },  
    cssMinify: true,  
    cssCodeSplit: true,  
    rollupOptions: {  
      output: {  
        compact: true, 
        manualChunks: (id) => {  
          // React 相关依赖  
          if (id.includes('node_modules/react/') ||   
              id.includes('node_modules/react-dom/')) {  
            return 'react-vendor';  
          }  
          
          // 动画相关依赖  
          if (id.includes('node_modules/framer-motion')) {  
            return 'motion-vendor';  
          }  

          // Markdown 相关依赖  
          if (id.includes('react-markdown') ||   
              id.includes('rehype-raw') ||   
              id.includes('remark-gfm')) {  
            return 'markdown-vendor';  
          }  

          // 图标相关依赖  
          if (id.includes('lucide-react') ||   
              id.includes('@icons-pack/react-simple-icons')) {  
            return 'icons-vendor';  
          }  

          // shadcn 组件  
          if (id.includes('/components/ui/')) {  
            return 'ui-vendor';  
          }  
        },
        chunkFileNames: 'assets/[hash].js',  
        entryFileNames: 'assets/[hash].js',  
        assetFileNames: 'assets/[hash].[ext]'
      }  
    },  
    chunkSizeWarningLimit: 1000,  
  },  
  optimizeDeps: {  
    include: [  
      'react',  
      'react-dom',  
      'framer-motion',  
      'react-markdown',  
      'rehype-raw',  
      'remark-gfm'  
    ]  
  },  
  esbuild: {  
    legalComments: 'none',  
    drop: ['debugger'],  
    minifyIdentifiers: true  
  }  
}));