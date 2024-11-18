import { Config } from './types';  
import { 
    SiGithub, 
    SiMastodon, 
    SiBilibili, 
    SiX, 
    SiMaildotru,
    SiMatrix,

    SiReact, 
    SiTailwindcss, 
    SiPython, 
    SiTypescript, 
    SiStmicroelectronics, 
    SiEasyeda, 
    SiProxmox, 
    SiDassaultsystemes, 
    
} from '@icons-pack/react-simple-icons';  
import { Calendar, Code2, Coffee, Heart, Music, Book, Camera, Gamepad2 } from "lucide-react";  

const config: Config = {  
    basic: {  
        seo_title: "uFolio",  
        seo_description: "你好,我是一名空栈开发工程师",  
        seo_keywords: "个人网站,作品集,开发者",  
    },  
    home: {  
        title_1: "你好,",  
        title_2: "我是uFolio",  
        name: "uFolio",  
        label: "空栈开发工程师",  
        picture: "/logo.svg",  
    },  
    about: {  
        title: "关于我",  
        content: `  
        <div align="center">   
          <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">  
            <img src="/logo.svg" alt="个人Logo" width="120px" />  
            <h1 style="font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; margin: 0; font-size: 3.5rem; font-weight: 700;">  
                uFolio  
            </h1>  
          </div>  
        
          <p align="center" style="font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">  
            <span style="font-size: 1.2rem; font-weight: 600;">🚀 现代个人作品集展示模板</span><br/>  
          </p>  
          <br/>  
        </div>  
        
        ## ✨ 特色功能  
        
        - 🌓 深色模式支持  
        - 🎨 基于Tailwind CSS的高度自定义  
        - 🌍 多语言支持   
        - 💫 流畅动画效果  
        - 📱 完全响应式设计  
        - ⚡ 极致性能优化  
        `,  
        timelineItems: [  
            {  
                year: "2023",  
                title: "高级开发工程师",  
                description: "负责前端开发项目管理工作",  
                icon: Code2,  
                color: "text-blue-500",  
            },  
            {  
                year: "2022",  
                title: "全栈开发之旅",  
                description: "开始系统学习后端开发",  
                icon: Coffee,  
                color: "text-green-500",  
            },  
            {  
                year: "2021",   
                title: "踏上编程之路",  
                description: "开始学习Web开发基础",  
                icon: Heart,  
                color: "text-red-500",  
            }  
        ],  
        interests: [  
            { icon: Code2, label: "编程", color: "bg-blue-500" },  
            { icon: Music, label: "音乐", color: "bg-purple-500" },  
            { icon: Book, label: "阅读", color: "bg-green-500" },  
            { icon: Camera, label: "摄影", color: "bg-pink-500" },  
            { icon: Coffee, label: "咖啡", color: "bg-amber-500" },  
            { icon: Gamepad2, label: "游戏", color: "bg-red-500" }  
        ]  
    },  
    skills: {  
        title: "技能特长",  
        content: [  
            { icon: SiReact, name: "React框架", level: 80 },  
            { icon: SiTailwindcss, name: "Tailwind CSS", level: 75 },  
            { icon: SiEasyeda, name: "电路设计", level: 90 },  
            { icon: SiPython, name: "Python开发", level: 75 },  
            { icon: SiTypescript, name: "TypeScript", level: 80 },  
            { icon: SiStmicroelectronics, name: "单片机开发", level: 70 },  
            { icon: SiProxmox, name: "虚拟化部署", level: 75 },  
            { icon: SiDassaultsystemes, name: "三维建模", level: 80 },  
        ]  
    },  
    project: {  
        title: "项目作品",  
        content: [  
            {  
                title: "个人主页",  
                image: "/projects/project_1.jpeg",  
                description: "基于React和TailwindCSS打造的现代化个人网站",  
                tags: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],  
                github: "https://github.com/uarix/uFolio",  
                demo: "https://ufolio.gnd.vin",  
            }  
        ],  
    },  
    social: {  
        title: "社交账号",  
        links: [  
            { icon: SiGithub, href: "https://github.com/uarix", label: "GitHub" },  
            { icon: SiMastodon, href: "https://linkedin.com", label: "Mastodon" },  
            { icon: SiX, href: "https://x.com", label: "推特" },  
            { icon: SiMaildotru, href: "mailto:your@email.com", label: "邮箱" },  
            { icon: SiBilibili, href: "https://bilibili.com", label: "哔哩哔哩" },  
            { icon: SiMatrix, href: "https://matrix.org", label: "Matrix" },  
        ],  
    },  
};   

export default config;