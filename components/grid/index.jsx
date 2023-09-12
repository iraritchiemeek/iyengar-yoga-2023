export function StartContentGridItem({ props, children }) {
  return <div className='md:col-span-1 lg:col-start-2 font-bold text-xl'>{children}</div>
}

export function CenterContentGridItem({ props, children }) {
  return <div className='md:col-span-2 lg:col-span-1'>{children}</div>
}

export function EndContentGridItem({ props, children }) {
  return <div className='md:col-span-3 lg:col-span-2' {...props}>{children}</div>
}