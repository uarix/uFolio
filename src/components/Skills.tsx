import configs from "@/configs/config";  
import { delay, motion } from "framer-motion";  
import { useInView } from "react-intersection-observer";  


export const Skills = () => {  
  const [ref, inView] = useInView({  
    triggerOnce: true,  
    threshold: 0.1,  
  });  

  const containerVariants = {  
    hidden: {},  
    visible: {  
      transition: {  
        staggerChildren: 0.15,  
      },  
    },  
  };  

  const skillVariants = {  
    hidden: {  
      opacity: 0,
    },  
    visible: {  
      opacity: 1,
      transition: {  
        duration: 0.5,  
        ease: "easeOut",
      },  
    },  
  };  

  const progressVariants = {  
    hidden: { width: 0 },  
    visible: (level: number) => ({  
      width: `${level}%`,  
      transition: {  
        duration: 1.5,  
        ease: "easeInOut",  
        delay: 0.2,  
      },  
    }),  
  };  

  return (  
    <section className="w-full min-h-screen bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/50 backdrop-blur-sm">  
      <div className="max-w-7xl w-[80%] mx-auto py-12 pt-20 pb-16"> 
        <h2  
          className="text-4xl font-bold mb-12 gradient-text text-center leading-normal py-2"  
        >  
          {configs.skills.title}  
        </h2>  
  
        <motion.div  
          ref={ref}  
          variants={containerVariants}  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"   
        >  
          {configs.skills.content.map((skill) => (  
            <motion.div  
              key={skill.name}  
              variants={skillVariants}  
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 md:p-6 lg:p-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300"  
            >  
              <div className="flex flex-col space-y-4 md:space-y-6">  
                <div className="flex items-center gap-3 md:gap-4">  
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white">  
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6" />   
                  </div>  
                  
                  <div className="flex-grow flex justify-between items-center min-w-0"> {/* min-w-0 防止溢出 */}  
                    <h3 className="text-lg md:text-xl font-semibold gradient-text truncate mr-2">  
                      {skill.name}  
                    </h3>  
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-base md:text-lg whitespace-nowrap">  
                      {skill.level}%  
                    </span>  
                  </div>  
                </div>  
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3">  
                  <motion.div  
                    custom={skill.level}  
                    variants={progressVariants}  
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full"  
                    style={{   
                      willChange: 'width',  
                      transformOrigin: 'left'  
                    }}  
                  />  
                </div>  
              </div>  
            </motion.div>  
          ))}  
        </motion.div>  
      </div>  
    </section>  
  );    
};