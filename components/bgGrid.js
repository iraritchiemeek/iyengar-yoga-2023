function BgGrid() {

  return (
    <div className="container mx-auto">
    	<div className="grid fixed w-full h-full grid-cols-6 z-10">
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
      ))}    	</div>
    </div>
  );
}

export default BgGrid;
