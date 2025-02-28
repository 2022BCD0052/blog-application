import { BlogFooter } from "@/components/home/blog-footer";
import { Navbar } from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
export default function Home() {
  return (
    <div className="">
   <Navbar />
   <HeroSection/>
   <TopArticles/>
   <BlogFooter/>
      </div>
  );
}
