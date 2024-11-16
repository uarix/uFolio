import { motion } from "framer-motion";  
import { ExternalLink, Github } from "lucide-react";  
import configs from "@/configs/config";

export const Projects = () => {  
  const containerVariants = {  
    hidden: { opacity: 0 },  
    visible: {  
      opacity: 1,  
      transition: {  
        staggerChildren: 0.1  
      }  
    }  
  };  

  const cardVariants = {  
    hidden: { y: 20, opacity: 0 },  
    visible: {  
      y: 0,  
      opacity: 1,  
      transition: {  
        type: "spring",  
        stiffness: 100,  
        damping: 15  
      }  
    }  
  };  

  return (  
    <section className="w-full min-h-screen bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/50 backdrop-blur-sm">  
      <motion.div  
        initial="hidden"  
        animate="visible"  
        variants={containerVariants}  
        className="max-w-6xl mx-auto px-6 py-12 pt-20 pb-16"  
      >  
        <motion.div  
          variants={cardVariants}  
          className="text-center mb-16"  
        >  
          <h2 className="text-4xl font-bold gradient-text inline-block mb-4">  
            {configs.project.title}  
          </h2>  
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">  
            Explore my latest works and side projects  
          </p>  
        </motion.div>  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {configs.project.content.map((project, index) => (  
            <motion.div  
              key={project.title}  
              variants={cardVariants}  
              whileHover={{ y: -5, transition: { duration: 0.2 } }}  
              className="group relative bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden"  
            >  
              {/* 项目预览图 */}  
              <div className="relative h-48 overflow-hidden">  
                {project.image && (  
                  <img  
                    src={project.image}  
                    alt={project.title}  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"  
                  />  
                )}  
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
              </div>  

              {/* 项目内容 */}  
              <div className="p-6">  
                <h3 className="text-xl font-semibold mb-2 gradient-text">  
                  {project.title}  
                </h3>  
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">  
                  {project.description}  
                </p>  

                {/* 技术标签 */}  
                <div className="flex flex-wrap gap-2 mb-4">  
                  {project.tags.map((tag) => (  
                    <span  
                      key={tag}  
                      className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80   
                               text-blue-600 dark:text-blue-300 rounded-full text-xs  
                               hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"  
                    >  
                      {tag}  
                    </span>  
                  ))}  
                </div>  

                {/* 链接按钮 */}  
                <div className="flex gap-3 mt-4">  
                  {project.github && (  
                    <a  
                      href={project.github}  
                      target="_blank"  
                      rel="noopener noreferrer"  
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300  
                               hover:text-blue-500 dark:hover:text-blue-400 transition-colors"  
                    >  
                      <Github className="w-4 h-4" />  
                      <span>Source</span>  
                    </a>  
                  )}  
                  {project.demo && (  
                    <a  
                      href={project.demo}  
                      target="_blank"  
                      rel="noopener noreferrer"  
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300  
                               hover:text-blue-500 dark:hover:text-blue-400 transition-colors"  
                    >  
                      <ExternalLink className="w-4 h-4" />  
                      <span>Live Demo</span>  
                    </a>  
                  )}  
                </div>  
              </div>  
            </motion.div>  
          ))}  
        </div>  
      </motion.div>  
    </section>  
  );  
};