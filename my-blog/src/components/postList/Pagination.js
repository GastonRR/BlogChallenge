import React from 'react'

export const pagination = ({postPerPage, totalPosts, paginate}) => {
    const PageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
       PageNumbers.push(i);
    }
    return (
        <nav className='container'>
            <ul className="pagination mx-auto">
            {PageNumbers.map(page =>(
                <li key={page} className="page-item">
                    <a onClick={()=>paginate(page)} href="/#"className="page-link">
                        {page}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    )
}
export default pagination
