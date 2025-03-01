import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.15)_0,_transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(147,51,234,0.15)_0,_transparent_70%)] pointer-events-none"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <span className="text-white text-xl font-bold">BC</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                ByteCode
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Where innovation ignites bold visions. Dive into a cosmos of cutting-edge tech insights.
            </p>
            <div className="mt-6 flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="group relative rounded-full bg-gray-200/50 dark:bg-gray-800/50 hover:bg-blue-300/30 dark:hover:bg-purple-300/30 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-blue-600 dark:text-purple-400 group-hover:text-blue-700 dark:group-hover:text-purple-300 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 dark:from-purple-500/0 dark:via-purple-500/30 dark:to-purple-500/0 scale-0 group-hover:scale-125 transition-transform duration-300"></div>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Explore</h3>
            <ul className="space-y-3">
              {["All Articles", "Topics", "Authors", "Podcasts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <form className="flex flex-col gap-4">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 pr-4 py-6 bg-gray-100/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-blue-200/50 dark:focus:ring-purple-200/50 transition-all duration-300 rounded-xl shadow-sm"
                />
                <Mail className="h-5 w-5 text-blue-500 dark:text-purple-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-blue-600 dark:group-focus-within:text-purple-300 transition-all duration-300 group-hover:scale-110" />
                <div className=" rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-blue-500/0 dark:from-purple-500/0 dark:via-purple-500/15 dark:to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-xl py-6 transition-all duration-300 group relative overflow-hidden shadow-lg"
              >
                <span className="relative z-10 font-semibold">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/50 to-blue-500/30 dark:from-blue-400/30 dark:via-purple-400/50 dark:to-blue-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center relative">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/60 dark:via-purple-500/60 to-transparent mb-4"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ByteCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}