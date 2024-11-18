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
        seo_description: "I'm uFolio, a NULL stack developer",  
        seo_keywords: "personal,website,portfolio",  
    },  
    home: {  
        title_1: "Hello,",  
        title_2: "I'm uFolio",  
        name: "uFolio",  
        label: "Null Stack Developer",  
        picture: "/logo.svg",  
    },  
    about: {  
        title: "About Me",  
        content: `
        <div align="center">   
          <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">  
            <img src="/logo.svg" alt="uFolio Logo" width="120px" />  
            <h1 style="font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; margin: 0; font-size: 3.5rem; font-weight: 700;">  
              uFolio  
            </h1>  
          </div>  
        
          <p align="center" style="font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">  
            <span style="font-size: 1.2rem; font-weight: 600;">🚀 The Modern Developer Portfolio Template</span><br/>  
        </p>  
          <br/>  
        </div>
        
        ## ✨ Features
        
        - 🌓 Dark mode support
        - 🎨 Highly customizable with Tailwind CSS
        - 🌍 Multiple language support
        - 💫 Smooth animations
        - 📱 Fully responsive
        - ⚡ Lightning fast
        `,
        timelineItems: [  
            {  
              year: "2023",  
              title: "Senior Developer",  
              description: "Leading frontend development projects",  
              icon: Code2,  
              color: "text-blue-500",
            },  
            {  
              year: "2022",  
              title: "Full Stack Journey",  
              description: "Expanded into backend development",  
              icon: Coffee,  
              color: "text-green-500",
            },  
            {  
              year: "2021",  
              title: "Started Coding",  
              description: "Began learning web development",  
              icon: Heart,  
              color: "text-red-500", 
            }  
          ],
          interests: [  
            { icon: Code2, label: "Coding", color: "bg-blue-500" },  
            { icon: Music, label: "Music", color: "bg-purple-500" },  
            { icon: Book, label: "Reading", color: "bg-green-500" },  
            { icon: Camera, label: "Photography", color: "bg-pink-500" },  
            { icon: Coffee, label: "Coffee", color: "bg-amber-500" },  
            { icon: Gamepad2, label: "Gaming", color: "bg-red-500" }  
          ]
    },  
    skills: {
        title: "Skills",
        content: [  
            { icon: SiReact, name: "React", level: 80 },  
            { icon: SiTailwindcss, name: "Tailwindcss", level: 75 },  
            { icon: SiEasyeda, name: "EasyEDA", level: 90 },  
            { icon: SiPython, name: "Python", level: 75 },  
            { icon: SiTypescript, name: "TypeScript", level: 80 },  
            { icon: SiStmicroelectronics, name: "STM32", level: 70 },  
            { icon: SiProxmox, name: "PVE", level: 75 },  
            { icon: SiDassaultsystemes, name: "Solidworks", level: 80 },
        ]
    },  
    project: {  
        title: "Projects",  
        content: [  
            {  
                title: "Project One",  
                image: "/projects/project_1.jpeg",
                description: "A beautiful web application built with React and TailwindCSS.", 
                tags: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],  
                github: "https://github.com/uarix/uFolio",  
                demo: "https://ufolio.gnd.vin",
            }
        ],  
    },  
    social: {  
        title: "Social Links",  
        links: [  
            { icon: SiGithub, href: "https://github.com/uarix", label: "GitHub" },  
            { icon: SiMastodon, href: "https://linkedin.com", label: "Mastodon" },  
            { icon: SiX, href: "https://x.com", label: "Twitter/X" },  
            { icon: SiMaildotru, href: "mailto:your@email.com", label: "Email" },  
            { icon: SiBilibili, href: "https://bilibili.com", label: "Bilibili" },  
            { icon: SiMatrix, href: "https://matrix.org", label: "Matrix" },
        ],  
    },  
};  

export default config;