

export function Info({title, value, hasBorder}) {


    return <>
    <div className={hasBorder == true ? 'lg:border-r lg:border-slate-300' : ''}>
        <h2 className="uppercase text-sm font-bold text-slate-600 tracking-wider mb-3">{title}</h2>
        <p className="font-semibold lg:font-medium text-slate-900 text-lg md:text-xl lg:text-2xl">{value}</p>
    </div>
    
    </>
}