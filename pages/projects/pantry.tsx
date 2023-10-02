import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Pantry() {
  return (
    <div className='mx-container'>
      <SEO
        title='Pantry Pal | Pranav Varma'
        description={PROJECTS[3].description}
      />
      <Hero project={PROJECTS[3]} />
      <Description project={PROJECTS[3]} />
      <Mockups project={PROJECTS[3]} />
    </div>
  );
}
