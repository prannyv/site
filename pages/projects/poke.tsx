import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Poke() {
  return (
    <div className='mx-container'>
      <SEO
        title='Poke | Pranav Varma'
        description={PROJECTS[4].description}
      />
      <Hero project={PROJECTS[4]} />
      <Description project={PROJECTS[4]} />
      <Mockups project={PROJECTS[4]} />
    </div>
  );
}
