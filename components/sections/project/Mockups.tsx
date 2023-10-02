import Image from 'next/image';
import { useSelector } from 'react-redux';

import GradientBorder from '@/components/UI/GradientBorder';

import { RootState } from '@/store/store';
import { Project } from '@/types/types';

type MockupsProps = {
  project: Project;
};

export default function Mockups({ project }: MockupsProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  const mockups =
    project.mockups.length === 6
      ? [
          { dark: project.mockups[2], light: project.mockups[3] },
          { dark: project.mockups[4], light: project.mockups[5] },
        ]
      : [
          { dark: project.mockups[1], light: project.mockups[1] },
          { dark: project.mockups[2], light: project.mockups[2] },
        ];

  return (
    <section className='mb-20 grid gap-9 lg:mb-36 lg:grid-cols-2'>
      {mockups.map((mockup, i) => (
        <GradientBorder
          borderColor='dark-main-gradient dark:light-main-gradient'
          borderRadius='rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'
          classes='block group'
          key={`mockup-${i}`}
        >
          <div className='light-project-gradient dark:dark-project-gradient relative aspect-[8/7] overflow-hidden rounded-xl 3xs:rounded-2xl 2xs:rounded-3xl 2xl:rounded-4xl'>
            <Image
              src={theme === 'light' ? mockup.light : mockup.dark}
              alt={project.title}
              className={`transition-300 absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 xl:group-hover:scale-[1.02] 
                ${
                  i === 0 && project.id === 'miso'
                    ? 'top-[52%] w-[90%] '
                    : ''
                }
                ${i === 1 && project.id === 'miso' ? 'w-[120%] ' : ''}
                ${i === 0 && project.id === 'sightful' ? 'w-[120%] ' : ''}
                ${
                  i === 1 && project.id === 'sightful'
                    ? 'left-[48%] w-[105%] '
                    : ''
                }
                ${i === 0 && project.id === 'ivey' ? 'w-[80%] ' : ''}
                ${i === 1 && project.id === 'ivey' ? 'w-[100%] ' : ''}
                ${i === 0 && project.id === 'pantry' ? 'w-[120%] ' : ''}
                ${i === 1 && project.id === 'pantry' ? 'w-[110%] ' : ''}
              `}
            />
          </div>
        </GradientBorder>
      ))}
    </section>
  );
}
