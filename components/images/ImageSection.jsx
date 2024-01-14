import Image from "next/image"

export default function ImageSection({section}) {
		const images = section.images.data
    const getImage = index => images[index].attributes.formats.large || images[index].attributes.formats.medium
    switch(images.length){
      case 1:
        return (
          <div>
            <Image
              className="left"
              alt=""
              style={{maxHeight: 'unset', objectFit: 'cover', objectPosition: 'center'}}
              src={images[0].attributes.url}
              width={images[0].attributes.width}
              height={images[0].attributes.height}
            />
          </div>
        )
        break
      case 2:
        return(
          <div className="grid grid-cols-1 md:grid-rows-6 md:grid-cols-6 md:col-span-6">
            <Image
              className='md:col-span-3 md:row-span-6 md:row-start-0 p-3 md:p-0'
              alt=""
              src={getImage(0).url}
              width={getImage(0).width}
              height={getImage(0).height}
            />
            <Image
              className='md:col-span-2 md:col-start-5 md:row-start-2 md:row-span-3 md:row-end-6 p-3 md:p-0'
              src={getImage(1).url}
              alt=""
              width={getImage(1).width}
              height={getImage(1).height}
            />
          </div>
        )
        break;
      case 3:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-rows-6 md:grid-cols-3 md:col-span-3">
              <Image
                className="md:row-span-4 md:col-span-3 md:row-span-3 p-3 md:p-0"
                alt=""
                src={getImage(0).url}
                width={getImage(0).width}
                height={getImage(0).height}
              />
              <Image
                className="md:col-span-2 md:col-start-2 md:row-start-5 md:row-span-2 p-3 md:p-0" 
                alt=""
                src={getImage(2).url}
                width={getImage(2).width}
                height={getImage(2).height}
              />
            </div>
            <div className="grid md:grid-rows-6 grid-cols-1 md:grid-cols-3 md:col-span-3 p-3 md:p-0">
              <Image
                alt=""
                className="md:col-span-2 md:col-start-2 md:row-start-3 md:row-span-6"
                src={getImage(1).url}
                width={getImage(1).width}
                height={getImage(1).height}
              />
            </div>
          </>
        )
        break;

      default:
        return null
    }
  }