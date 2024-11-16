import configs from "@/configs/config";  

export const SocialLinks = () => {  
  return (  
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 animate-fade-in px-4">  
      <div className="w-full max-w-3xl mx-auto space-y-8 text-center">  
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">  
          {configs.social.title}  
        </h2>  
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">  
          {configs.social.links.map(({ icon: Icon, href, label }) => (  
            <a  
              key={label}  
              href={href}  
              target="_blank"  
              rel="noopener noreferrer"  
              className="group relative p-3 md:p-4 hover:z-10"  
              aria-label={label}  
            >  
              <div className="absolute inset-0 rounded-lg bg-black/5 dark:bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100" />  
              <Icon className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:scale-110" />  
              <span className="sr-only">{label}</span>  

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">  
                <span className="text-sm bg-gray-500 dark:bg-gray-700 text-white px-2 py-1 rounded whitespace-nowrap">  
                  {label}  
                </span>  
              </div>  
            </a>  
          ))}  
        </div>  
      </div>  
    </section>  
  );  
};