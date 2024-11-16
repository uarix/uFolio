interface ConsoleStyles {  
    [key: string]: string;  
  }  
  export const initConsole = () => {  
    const colors = {  
      primary: '#0066FF',      // 主要蓝色  
      secondary: '#00D1FF',    // 次要蓝色  
      accent: '#2DD4BF',       // 强调色  
      dark: '#1E293B',         // 深色背景  
      light: '#F8FAFC',        // 浅色  
      white: '#FFFFFF'         // 纯白  
    };  
    const styles: ConsoleStyles = {  
      header: `  
        background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});  
        color: ${colors.white};  
        padding: 12px 20px;  
        border-radius: 8px;  
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;  
        font-weight: bold;  
        text-shadow: 2px 2px 4px rgba(0,0,0,0.2);  
        letter-spacing: 1px;  
      `,  
      
      sectionTitle: `  
        background: ${colors.dark};  
        color: ${colors.white};  
        padding: 8px 12px;  
        border-radius: 4px;  
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;  
        font-weight: 500;  
        border-left: 3px solid ${colors.primary};  
      `,  
      
      info: `  
        color: ${colors.primary};  
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;  
        padding: 4px 0;  
        font-weight: 500;  
        letter-spacing: 0.5px;  
      `,  
      
      highlight: `  
        background: ${colors.accent}22;  
        color: ${colors.accent};  
        padding: 6px 10px;  
        border-radius: 4px;  
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;  
        font-weight: 500;  
      `,  
      
      dev: `  
        background: ${colors.accent};  
        color: ${colors.white};  
        padding: 6px 12px;  
        border-radius: 4px;  
        font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;  
        font-weight: bold;  
        text-transform: uppercase;  
      `  
    };  
    
    console.log('%c🚀 Welcome to uFolio', styles.header);  
    
    console.group('%c📦 Version', styles.sectionTitle);  
    console.log('%c• Version: 1.0.0 (Stable Release)', styles.info);  
    console.log('%c• Environment: ' + process.env.NODE_ENV, styles.info); 
    console.groupEnd();  

    // uFolio is an open-source project, thanks for your support!
    console.group('%c💫 About uFolio', styles.sectionTitle);  
    console.log('%c• Repository: https://github.com/uarix/uFolio', styles.info); 
    console.log('%c• Created with ❤️ by Quarix', styles.info);  
    console.groupEnd();  
  
    if (process.env.NODE_ENV === 'development') {  
      console.time('🔄 Initial Render Time');  
      window.addEventListener('load', () => {  
        console.timeEnd('🔄 Initial Render Time');  
      });  
    }  
  };