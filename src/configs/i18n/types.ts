import { IconType } from '@icons-pack/react-simple-icons';  
import { LucideIcon } from "lucide-react";  

interface TimelineItem {  
    year: string;  
    title: string;  
    description: string;  
    icon: LucideIcon;  
    color: string;  
}  

interface Interest {  
    icon: LucideIcon;  
    label: string;  
    color: string;  
}  

export interface SocialLink {  
    icon: IconType;  
    href: string;  
    label: string;  
}  

export interface Basic {  
    seo_title: string;  
    seo_description: string;  
    seo_keywords: string;  
}  

export interface Home {  
    title_1: string;  
    title_2: string;  
    name: string;  
    label: string;  
    picture: string;  
}  

export interface About {  
    title: string;  
    content: string;  
    timelineItems: TimelineItem[];
    interests: Interest[];
}  

export interface ProjectDetail {  
    title: string;  
    description: string;  
    image: string;  
    github: string;  
    demo?: string;  
    featured?: boolean;  
    tags: string[];  
}  

export interface Project {  
    title: string;  
    content: ProjectDetail[];  
}  

export interface SkillDetail {  
    icon: IconType;   
    name: string;  
    level: number;  
}  

export interface Skills {  
    title: string;  
    content: SkillDetail[];  
}  

export interface Social {  
    title: string;  
    links: SocialLink[];  
}  

export interface Config {  
    basic: Basic;  
    home: Home;  
    about: About;  
    skills: Skills;  
    project: Project;  
    social: Social;  
}