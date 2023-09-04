function BgGrid() {

  return (
    <div className="fixed h-full w-full pointer-events-none invisible md:visible">
      <div className="container mx-auto h-full">
      	<div className="grid w-full h-full grid-cols-6 z-10">
          {Array.from({ length: 6 }, (_, index) => (
            <div 
              key={index}
              className={
                index === 0 
                  ? "border-x border-x-yoga-blue opacity-25" 
                  : "border-r border-r-yoga-blue opacity-25"
              }
            >
            </div>
          ))}    	
        </div>
      </div>
    </div>
  );
}

export default BgGrid;
