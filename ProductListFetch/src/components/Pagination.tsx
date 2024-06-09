export default function Pagination({currentPage,itemsPerPage,totalItems,paginate}:{currentPage:number,itemsPerPage:number,totalItems:number,paginate:(pageNumber:number)=>void}){
    const pageNumbers=[]
    for (let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className="flex justify-center">
            <ul className="flex space-x-2">
                {pageNumbers.map(number=>(
                    <li key={number}>
                        <a onClick={()=>paginate(number)} 
                        className={`px-3 py-1 rounded-md cursor-pointer ${
                        currentPage === number ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'
                        }`}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}