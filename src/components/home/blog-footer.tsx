import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gradient-to-t dark:from-gray-900/95 dark:to-indigo-950/95">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Branding Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-pink-500 bg-clip-text text-transparent">
                Byte
              </span>
              <span className="text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300">
                Code
              </span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Where ideas meet innovation. Dive into a world of insightful 
              articles written by passionate thinkers and industry experts.
            </p>
            
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <a href={href}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Explore</h3>
            <ul className="space-y-3">
              {["All Articles", "Topics", "Authors", "Podcasts"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-6 bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus-visible:ring-1 focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
                />
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-cyan-400 dark:to-pink-500 dark:hover:from-cyan-500 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} YogeshCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}