import { motion } from "framer-motion";  
import { Card } from "@/components/ui/card";  
import { Badge } from "@/components/ui/badge";
import configs from "@/configs/config";  
import ReactMarkdown from 'react-markdown';  
import remarkGfm from 'remark-gfm';  
import rehypeRaw from 'rehype-raw';  
import { Calendar, Heart } from "lucide-react";  

export const About = () => {  

  const formattedContent = configs.about.content.trim().split('\n').map(line => line.trim()).join('\n'); 

  const timelineItems = configs.about.timelineItems;  
  const interests = configs.about.interests;  

  const containerVariants = {  
    hidden: { opacity: 0 },  
    visible: {  
      opacity: 1,  
      transition: {  
        staggerChildren: 0.2  
      }  
    }  
  };  

  const itemVariants = {  
    hidden: { y: 20, opacity: 0 },  
    visible: {  
      y: 0,  
      opacity: 1,  
      transition: {  
        duration: 0.5  
      }  
    }  
  };  

  return (  
    <section className="w-full min-h-screen bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/50 backdrop-blur-sm">  
      <motion.div
        className="max-w-5xl mx-auto px-6 py-12 pt-20 pb-16"  
        variants={containerVariants}  
        initial="hidden"  
        animate="visible"  
      > 
        <motion.h2   
          variants={itemVariants}  
          className="text-4xl font-bold mb-8 gradient-text text-center"  
        >  
          {configs.about.title}  
        </motion.h2>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          {/* 左侧个人简介 */}  
          <motion.div variants={itemVariants}>
            <Card className="p-6 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl transition-shadow">  
              <div className="space-y-4">  
                <div className="flex items-center gap-2 mb-4">  
                  <Heart className="w-5 h-5 text-red-500" />  
                  <h3 className="text-xl font-semibold gradient-text">About Me</h3>  
                </div>  
                <div className="prose dark:prose-invert max-w-none prose-headings:mt-1 prose-p:mt-1">
                  <ReactMarkdown  
                    remarkPlugins={[remarkGfm]}  
                    rehypePlugins={[rehypeRaw]}  
                    className="markdown-content"  
                  >  
                    {formattedContent}  
                  </ReactMarkdown>  
                </div>  
                <div className="pt-4">  
                  <Badge variant="outline" className="mr-2">Frontend</Badge>  
                  <Badge variant="outline" className="mr-2">UI/UX</Badge>  
                  <Badge variant="outline">Open Source</Badge>  
                </div>  
              </div>  
            </Card>  
          </motion.div>  

          {/* 右侧信息卡片 */}  
          <motion.div variants={itemVariants} className="space-y-6">  
            {/* 统计卡片 */}  
            <Card className="p-6 bg-white/90 dark:bg-gray-800/90 shadow-lg">  
              <div className="grid grid-cols-2 gap-4">  
                <div className="text-center">  
                  <div className="text-3xl font-bold gradient-text">2+</div>  
                  <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>  
                </div>  
                <div className="text-center">  
                  <div className="text-3xl font-bold gradient-text">50+</div>  
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>  
                </div>  
              </div>  
            </Card>  

            {/* 兴趣爱好 */}  
            <Card className="p-6 bg-white/90 dark:bg-gray-800/90 shadow-lg">  
              <div className="flex items-center gap-2 mb-4">  
                <Heart className="w-5 h-5 text-red-500" />  
                <h3 className="text-lg font-semibold">Interests</h3>  
              </div>  
              <div className="grid grid-cols-3 gap-3">  
                {interests.map((item, index) => (  
                  <motion.div  
                    key={index}  
                    whileHover={{ scale: 1.05 }}  
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/50 dark:bg-gray-700/50"  
                  >  
                    <div className={`p-2 rounded-full ${item.color} text-white`}>  
                      <item.icon className="w-4 h-4" />  
                    </div>  
                    <span className="text-sm">{item.label}</span>  
                  </motion.div>  
                ))}  
              </div>  
            </Card>  

            {/* 时间线卡片 */}  
            <Card className="p-6 bg-white/90 dark:bg-gray-800/90 shadow-lg">  
              <div className="flex items-center gap-2 mb-4">  
                <Calendar className="w-5 h-5 text-blue-500" />  
                <h3 className="text-lg font-semibold">Timeline</h3>  
              </div>  
              
              <div className="space-y-4">  
                {timelineItems.map((item, index) => (  
                  <motion.div  
                    key={index}  
                    whileHover={{ x: 5 }}  
                    className="flex items-start gap-3 relative group"  
                  >  
                    {index !== timelineItems.length - 1 && (  
                      <div className="absolute left-[14px] top-8 w-0.5 h-7 bg-gray-200 dark:bg-gray-700" />  
                    )}  
                    
                    <div className={`${item.color} bg-opacity-10 p-2 rounded-full shrink-0`}>  
                      <item.icon className="w-4 h-4" />  
                    </div>  
                    
                    <div className="absolute inset-0 bg-gray-50 dark:bg-gray-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />  

                    <div className="flex-1">  
                      <div className="flex items-center justify-between">  
                        <span className="font-medium">{item.title}</span>  
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>  
                      </div>  
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">  
                        {item.description}  
                      </p>  
                    </div>  
                  </motion.div>  
                ))}  
              </div>  
            </Card>  
            
          </motion.div>  
        </div>  
      </motion.div>  
    </section>  
  );  
};