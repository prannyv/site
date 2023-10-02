import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/home/Hero';
import Projects from '@/components/sections/home/Projects';
import Experience from '@/components/sections/home/Experience';
import About from '@/components/sections/home/About';
import Contact from '@/components/sections/home/Contact';

export default function Home() {
  return (
    <>
      <SEO
        title='Pranav Varma'
        description="Hi, I'm Pranav Varma, a CS student @ Western. Welcome to my personal website."
      />
      <Hero />
      <Projects />
      <Experience />
      <About />
      {/* <Contact /> */}
    </>
  );
}
