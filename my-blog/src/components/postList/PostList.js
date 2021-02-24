import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle, faEye } from '@fortawesome/free-solid-svg-icons';

import services from '../../services/public.services'
import Pagination from './Pagination'

function PostList(props) {
    let [data, setData] = useState("");
    let [currentPage, setCurrentPage] = useState(1);
    let [postPerPage] = useState(10);
    const Delete = (id) => {
        services.delete(id).then((data) => {
            window.location.reload();
        })
    }
    useEffect(() => {
        services.allPost()
        .then((res) => {
                setData(res.data);
                
            })
    }, [])
    

    //current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='activity-container mx-auto'>
            <h3 className='text-dark text-center my-5'> All Posts </h3>
            <Table striped borderless variant='dark' className='text-list table-Activity'>
                <thead className='h4'>
                    <tr>
                        <th className='text-center'>Title</th>
                        <th className='text-center'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPost ? (currentPost.map((post, id) => {
                        return (
                            <tr key={id}>
                                <td className='text-center'>
                                    {post.title}
                                </td>
                                <td className='text-center'>
                                    <div className="d-flex justify-content-around">
                                        <a className="text-list" href={`/operation/detail/${post.id}`}><FontAwesomeIcon icon={faEye} /></a>
                                        <a className="text-list" href={`/operation/edit/${post.id}`}><FontAwesomeIcon icon={faEdit} /></a>
                                        <a className="text-list" onClick={() => Delete(post.id)} href="/#"><FontAwesomeIcon icon={faTimesCircle} /></a>
                                    </div>
                                </td>
                            </tr>)
                    })) : <tr></tr>
                    }
                </tbody>
            </Table>

            <Pagination
                postPerPage={postPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />

        </div>

    );
}

export default PostList;