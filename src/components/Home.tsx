import { ArrowRight } from "lucide-react";  
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";  
import { motion } from "framer-motion"; // 引入 framer-motion  
import configs from "@/configs/config";  

export const Home = ({ handlePageChange }) => {  
  // 定义动画变体  
  const containerVariants = {  
    hidden: { opacity: 0 },  
    visible: {  
      opacity: 1,  
      transition: {  
        staggerChildren: 0.2, // 子元素依次动画的间隔  
        delayChildren: 0.3,   // 子元素开始动画的延迟  
      }  
    }  
  };  

  const itemVariants = {  
    hidden: { opacity: 0, y: 20 },  
    visible: {  
      opacity: 1,  
      y: 0,  
      transition: {  
        duration: 0.6,  
        ease: "easeOut"  
      }  
    }  
  };  

  const avatarVariants = {  
    hidden: { scale: 0.8, opacity: 0 },  
    visible: {  
      scale: 1,  
      opacity: 1,  
      transition: {  
        type: "spring",  
        stiffness: 100,  
        damping: 15,  
        duration: 0.8  
      }  
    }  
  };  

  const backgroundVariants = {  
    hidden: { opacity: 0 },  
    visible: {  
      opacity: 1,  
      transition: {  
        duration: 1.5  
      }  
    }  
  };  

  return (  
    <section className="min-w-screen flex h-screen items-center justify-center relative overflow-hidden">  
      <motion.div  
        variants={backgroundVariants}  
        initial="hidden"  
        animate="visible"  
        className="absolute inset-0"  
      >  
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 -z-10" />  
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 dark:opacity-20 -z-10 animate-pulse" />  
      </motion.div>  

      <motion.div  
        variants={containerVariants}  
        initial="hidden"  
        animate="visible"  
        className="text-center px-4 relative z-10"  
      >  
        <motion.div   
          variants={avatarVariants}  
          className="mb-8 flex justify-center"  
        >  
          <Avatar className="w-32 h-32 border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">  
            <AvatarImage src={configs.home.picture} alt={configs.home.name} />  
            <AvatarFallback>{configs.home.name}</AvatarFallback>  
          </Avatar>  
        </motion.div>  

        <motion.h1   
          variants={itemVariants}  
          className="text-5xl md:text-7xl font-bold mb-6"  
        >  
          <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">  
            {configs.home.title_1}  
          </span>  
          <br />  
          {configs.home.title_2}  
        </motion.h1>  

        <motion.p   
          variants={itemVariants}  
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"  
        >  
          {configs.home.label}  
        </motion.p>  

        <motion.button  
          variants={itemVariants}  
          whileHover={{ scale: 1.1 }}  
          whileTap={{ scale: 0.95 }}  
          onClick={() => handlePageChange(1)}  
          className="group mt-12 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"  
          aria-label="Scroll to next section"  
        >  
          <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />  
        </motion.button>  
      </motion.div>  
    </section>  
  );  
};