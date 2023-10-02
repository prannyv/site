import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Miso() {
  return (
    <div className='mx-container'>
      <SEO
        title='Miso | Pranav Varma'
        description={PROJECTS[0].description}
      />
      <Hero project={PROJECTS[0]} />
      <Description project={PROJECTS[0]} />
      <Mockups project={PROJECTS[0]} />
    </div>
  );
}
