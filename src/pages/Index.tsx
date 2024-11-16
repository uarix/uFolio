import { ThemeToggle } from "@/components/ThemeToggle";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { SocialLinks } from "@/components/SocialLinks";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  useEffect(() => {  
    let isScrolling = false;  
    let touchStartX = 0;  
    let touchEndX = 0;  
    
    const handleWheel = (e: WheelEvent) => {  
      const currentElement = document.elementFromPoint(  
        window.innerWidth / 2,  
        window.innerHeight / 2  
      )?.closest('.page-content');  

      if (!currentElement) return;  

      const isScrollable = currentElement.scrollHeight > currentElement.clientHeight;  
      const isAtTop = currentElement.scrollTop <= 0;  
      const isAtBottom =   
        Math.abs(  
          currentElement.scrollHeight - currentElement.scrollTop - currentElement.clientHeight  
        ) <= 1;  

      // 只有在不能垂直滚动，或者在顶部向上滚动，或者在底部向下滚动时才触发页面切换  
      if (!isScrollable || (isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {  
        e.preventDefault();  
        
        if (isScrolling) return;  
        if (Math.abs(e.deltaY) < 30) return;  
        
        isScrolling = true;  
        const direction = e.deltaY > 0 ? 1 : -1;  
        const newPage = Math.max(0, Math.min(currentPage + direction, totalPages - 1));  
        
        if (newPage !== currentPage) {  
          setCurrentPage(newPage);  
          const container = document.querySelector('.scroll-container');  
          container?.scrollTo({  
            left: window.innerWidth * newPage,  
            behavior: 'smooth'  
          });  
        }  
        
        setTimeout(() => {  
          isScrolling = false;  
        }, 1000);  
      }  
    };  

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      const touchDiff = touchStartX - touchEndX;

      if (Math.abs(touchDiff) > 50) {
        const direction = touchDiff > 0 ? 1 : -1;
        const newPage = Math.max(0, Math.min(currentPage + direction, totalPages - 1));
        
        if (newPage !== currentPage) {
          setCurrentPage(newPage);
          const container = document.querySelector('.scroll-container');
          container?.scrollTo({
            left: window.innerWidth * newPage,
            behavior: 'smooth'
          });
        }
      }
    };

    const container = document.querySelector('.scroll-container');
    container?.addEventListener('wheel', handleWheel, { passive: false });
    container?.addEventListener('touchstart', handleTouchStart, { passive: true });
    container?.addEventListener('touchend', handleTouchEnd, { passive: true });


    return () => {
      container?.removeEventListener('wheel', handleWheel);
      container?.removeEventListener('touchstart', handleTouchStart);
      container?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage]);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
    const container = document.querySelector('.scroll-container');
    container?.scrollTo({
      left: window.innerWidth * index,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector('.scroll-container');  
      container?.scrollTo({  
        left: window.innerWidth * currentPage,  
        behavior: 'auto'
      });  
    };
  
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage]);

  return (
    <main className="relative h-screen overflow-hidden">  
      <div className="fixed top-6 right-6 z-50">  
        <ThemeToggle />  
      </div>  
      <div className="scroll-container flex h-screen overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide">  
        <div className="flex">  
          {/* 修改每个页面的容器样式 */}  
          <div className={`w-screen shrink-0 transition-opacity duration-700 ease-in-out ${  
            currentPage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-85'  
          }`}>  
            <div className="page-content h-screen overflow-y-auto custom-scrollbar">  
              <Home handlePageChange={handlePageChange}/>  
            </div>  
          </div>  
          <div className={`w-screen shrink-0 transition-opacity duration-700 ease-in-out ${  
            currentPage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-85'  
          }`}>  
            <div className="page-content h-screen overflow-y-auto custom-scrollbar">  
              <About />  
            </div>  
          </div>  
          <div className={`w-screen shrink-0 transition-opacity duration-700 ease-in-out ${  
            currentPage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-85'  
          }`}>  
            <div className="page-content h-screen overflow-y-auto custom-scrollbar">  
              <Skills />  
            </div>  
          </div>  
          <div className={`w-screen shrink-0 transition-opacity duration-700 ease-in-out ${  
            currentPage === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-85'  
          }`}>  
            <div className="page-content h-screen overflow-y-auto custom-scrollbar">  
              <Projects />  
            </div>  
          </div>  
          <div className={`w-screen shrink-0 transition-opacity duration-700 ease-in-out ${  
            currentPage === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-85'  
          }`}>  
            <div className="page-content h-screen overflow-y-auto custom-scrollbar">  
              <SocialLinks />  
            </div>  
          </div>  
        </div>  
      </div>  
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentPage === index 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Index;