import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { toast as sooner } from "sonner"

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // const { toast } = useToast();

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
    // if (theme === "light") {
    //   sooner.info("Notification Title");
    // } else {
    //   toast({
    //     title: "Notification Title",
    //     description: "This is a notification message!"
    //   });
    // }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-blue-600" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  );
};