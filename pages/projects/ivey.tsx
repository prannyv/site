import SEO from '@/components/SEO/SEO';
import Hero from '@/components/sections/project/Hero';
import Description from '@/components/sections/project/Description';
import Mockups from '@/components/sections/project/Mockups';

import { PROJECTS } from '@/constants/projects';

export default function Ivey() {
  return (
    <div className='mx-container'>
      <SEO
        title='Ivey Sustainability | Pranav Varma'
        description={PROJECTS[2].description}
      />
      <Hero project={PROJECTS[2]} />
      <Description project={PROJECTS[2]} />
      <Mockups project={PROJECTS[2]} />
    </div>
  );
}
