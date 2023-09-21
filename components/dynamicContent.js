import Image from 'next/image'
import StickyTopListSection from 'components/stickyTopListSection'
import ImageSection from './images/ImageSection';
import TextContentSection from './text/content';
import { Quote } from './text/quote';

const sectionHandlers = {
  'images.images': { component: ImageSection },
  'text.quote': { component: Quote },
  'text.title-content-content': { component: TextContentSection },
  'list.class-level-list': { component: StickyTopListSection },
  'list.retreats-list': { component: StickyTopListSection, sectionProps: { withLink: true, slug: 'retreats' } },
  'list.teachers-list': { component: StickyTopListSection },
};

const convertToSlug = string => string && string.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g, '-');

const DynamicContent = (props) => {
  const { section } = props;
  const handler = sectionHandlers[section.__component];

  if (!handler || !handler.component) return null;
  
  const { component: SectionComponent, sectionProps } = handler;

  return (
    <div id={section.slug || convertToSlug(section.title)} className={`grid grid-cols-1 md:grid-cols-6 mt-[7em] ${section.__component !== 'images.images' ? '[&>*]:px-3' : ''}`}>
      <SectionComponent section={section} {...sectionProps} />
    </div>
  );
};

export default DynamicContent;
