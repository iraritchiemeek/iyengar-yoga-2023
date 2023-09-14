import Image from 'next/image'
import StickyTopListSection from 'components/stickyTopListSection'
import ImageSection from './images/ImageSection';
import TextContentSection from './text/content';
import { Quote } from './text/quote';

const sectionHandlers = {
  'images.images': ImageSection,
  'text.quote': Quote,
  'text.title-content-content': TextContentSection,
  'list.class-level-list': StickyTopListSection,
  'list.retreats-list': StickyTopListSection,
  'list.teachers-list': StickyTopListSection,
};

const convertToSlug = string => string && string.toLowerCase().replace(/[^\w ]+/g, '') .replace(/ +/g, '-')

const DynamicContent = (props) => {
  const { section } = props;

  const SectionComponent = sectionHandlers[section.__component];
  
  if (!SectionComponent) return null;

  return (
    <div id={convertToSlug(section.title)} className={`grid grid-cols-1 md:grid-cols-6 pt-[7em] ${section.__component !== 'images.images' ? '[&>*]:px-3' : ''}`}>
        <SectionComponent section={section} />
    </div>
  );
};

export default DynamicContent;