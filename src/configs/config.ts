import zh_Hans from './i18n/zh_Hans';  
import en_Us from './i18n/en_Us';  

declare global {
    interface Navigator {  
        userLanguage?: string;  
    }  
}  

function i18n_config() {
    const language = navigator.language || navigator.userLanguage;
    if (language.startsWith('en')) {
        return en_Us;
    } else {
        return zh_Hans;
    }
}  

const configs = i18n_config();  

export default configs;