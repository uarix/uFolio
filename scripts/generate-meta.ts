import fs from 'node:fs';  
import path from 'node:path';  
import { fileURLToPath } from 'node:url';  
import { dirname } from 'node:path';  

const __filename = fileURLToPath(import.meta.url);  
const __dirname = dirname(__filename);  

import { Config } from '../src/configs/i18n/types';  
import defaultConfig from '../src/configs/i18n/en_Us';  

function generateOgImage(config: Config) {  
  console.log('Generating OG Image...');  
  
  const svg = `  
  <svg width="1200" height="630" viewBox="0 0 1280 630" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <style>  
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&amp;family=Inter:wght@400;500;600;700&amp;display=swap');  
      
      .title {  
        font-size: 76px;  
        font-weight: 600;  
        font-family: 'Inter', system-ui;  
        fill: #1F2937;  
      }  
      
      .description {  
        font-size: 45px;  
        font-family: 'Inter', system-ui;  
        inline-size: 700px;
        fill: #6B7280;  
        line-height: 1.6;  
      }  

      .stats {  
        font-family: 'Inter', system-ui;  
        font-size: 36px;  
        fill: #6B7280;  
      }  

      .accent {  
        fill: #3B82F6;  
      }  
    </style>  

    <!-- 主背景 -->  
    <rect width="1280" height="630" fill="#FFFFFF"/>  

    <!-- 左侧头像区域 -->  
    <g transform="translate(50, 100)">  
      <!-- 头像背景 -->  
      <rect width="360" height="360" rx="180" fill="#F3F4F6"/>  
      <!-- 头像图片 -->  
      <image  
        x="0"  
        y="0"  
        width="360"  
        height="360"  
        href="${config.home.picture || 'https://github.com/github.png'}"  
        preserveAspectRatio="xMidYMid slice"  
        clip-path="circle(180px at center)"  
      />  
    </g>  

    <!-- 右侧内容区域 -->  
    <g transform="translate(520, 180)">  
      <!-- 标题 -->  
      <text class="title" x="0" y="0">${config.basic.seo_title}</text>  
      
      <!-- 分割线 -->  
      <line x1="0" y1="30" x2="750" y2="30" stroke="#3B82F6" stroke-width="9"/>  

      <!-- 描述 -->  
      <text class="description">  
        <tspan x="0" dy="90">${config.basic.seo_description}</tspan>  
      </text>  

      <!-- 技术标签 -->  
      <g transform="translate(0, 160)">  
        <!-- TypeScript 标签 -->  
        <rect width="280" height="65" rx="32" fill="#EEF2FF"/>  
        <text x="140" y="43" text-anchor="middle" class="stats" fill="#4F46E5">TypeScript</text>  

        <!-- React 标签 -->  
        <g transform="translate(300, 0)">  
          <rect width="200" height="65" rx="32" fill="#F0F9FF"/>  
          <text x="100" y="43" text-anchor="middle" class="stats" fill="#0EA5E9">React</text>  
        </g>  

        <!-- Node.js 标签 -->  
        <g transform="translate(520, 0)">  
          <rect width="200" height="65" rx="32" fill="#ECFDF5"/>  
          <text x="100" y="43" text-anchor="middle" class="stats" fill="#059669">Node.js</text>  
        </g>  
      </g>  

      <g transform="translate(0, 260)" class="stats">  
        <g>  
          <circle cx="20" cy="20" r="20" fill="#3B82F6" opacity="0.1"/>  
          <text x="55" y="30"><tspan class="accent">${config.stats?.stars || 0}</tspan> stars</text>  
        </g>  
        
        <g transform="translate(200, 0)">  
          <circle cx="20" cy="20" r="20" fill="#3B82F6" opacity="0.1"/>  
          <text x="55" y="30"><tspan class="accent">${config.stats?.forks || 0}</tspan> forks</text>  
        </g>  
      </g>  
    </g>  

    <g transform="translate(30, 600)">  
      <text font-family="'Inter', system-ui" font-size="38" fill="#6B7280">  
        ${config.basic.seo_title}  
      </text>  
    </g>  

    <text x="1270" y="600"  
          font-family="'Inter', system-ui"  
          font-size="38"  
          text-anchor="end"  
          fill="#6B7280">  
      ${new Date().toLocaleDateString('en-US', {   
        year: 'numeric',  
        month: 'short'  
      })}  
    </text>  
  </svg>  
  `;  

  const publicDir = path.join(process.cwd(), 'public');
  const filePath = path.join(publicDir, 'og-image.svg');  
  fs.writeFileSync(filePath, svg, 'utf-8');  
  console.log(`OG Image generated at: ${filePath}`);  
}  

function updateHtmlMeta(config: Config) {  
  console.log('Updating HTML meta tags...');  

  const htmlPath = path.join(process.cwd(), 'index.html');  
  if (!fs.existsSync(htmlPath)) {  
    throw new Error(`HTML file not found at: ${htmlPath}`);  
  }  

  let htmlContent = fs.readFileSync(htmlPath, 'utf-8');  

  htmlContent = htmlContent.replace(  
    /<title>.*?<\/title>/,  
    `<title>${config.basic.seo_title}</title>`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta name="description" content=".*?"/,  
    `<meta name="description" content="${config.basic.seo_description}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta name="keywords" content=".*?"/,  
    `<meta name="keywords" content="${config.basic.seo_keywords}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta name="twitter:title" content=".*?"/,  
    `<meta name="twitter:title" content="${config.basic.seo_title}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta name="twitter:description" content=".*?"/,  
    `<meta name="twitter:description" content="${config.basic.seo_description}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta property="og:site_name" content=".*?"/,  
    `<meta property="og:site_name" content="${config.basic.seo_title}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta property="og:image:alt" content=".*?"/,  
    `<meta property="og:image:alt" content="${config.basic.seo_description} - ${config.basic.seo_title}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta property="og:title" content=".*?"/,  
    `<meta property="og:title" content="${config.basic.seo_title}"`  
  );  

  htmlContent = htmlContent.replace(  
    /<meta property="og:description" content=".*?"/,  
    `<meta property="og:description" content="${config.basic.seo_description}"`  
  );  

  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');  
  console.log('HTML meta tags updated successfully');  
}  

// 主函数  
async function main() {  
  try {  
    console.log('Starting meta generation process...');  
    console.log('Current working directory:', process.cwd());  
    
    // 验证配置文件  
    if (!defaultConfig || !defaultConfig.basic) {  
      throw new Error('Invalid configuration file');  
    }  
    console.log('Configuration loaded successfully');  

    generateOgImage(defaultConfig);  
    updateHtmlMeta(defaultConfig);  
    
    console.log('✅ Meta tags and OG image generated successfully');  
  } catch (error) {  
    console.error('❌ Error generating meta content:', error);  
    process.exit(1);  
  }  
}  

// 执行主函数  
main().catch((error) => {  
  console.error('Unhandled error:', error);  
  process.exit(1);  
});