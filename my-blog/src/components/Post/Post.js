import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


import services from '../../services/public.services'


export default function Post({ id }) {

    const [exist, setExist] = useState(true);
    const [message, setMessage] = useState("");

    const [post, setPost] = useState("");
    useEffect(() => {
        services.postById(id)
            .then((res) => {
                setPost(res.data);
            }).catch((err) => {
                setMessage("POST NOT FOUND");
                setExist(false);
            })
        // eslint-disable-next-line
    }, [])
    return (
        <Card bg='dark' className="text-center text-list rounded w-75">

            <React.Fragment>
                <Card.Header>
                    <strong className="text-uppercase h1">{`POST #${id}`}</strong>
                </Card.Header>
                {exist && (
                    <Card.Body>
                        <Card.Title>
                            <strong className="text-uppercase h6">{post.title}</strong>
                        </Card.Title>
                        <Card.Text className="mt-2">
                            "{post.body}"
                        </Card.Text>
                    </Card.Body>
                )}
                {!exist && (
                    <Card.Body>
                        <div
                            className="text-center alert alert-danger mt"
                            role="alert"
                        >
                            <img
                                src="https://www.freeiconspng.com/uploads/error-icon-4.png"
                                alt="profile-img"
                                className="profile-img-card"
                            />
                            {message} <br />
                        </div>
                    </Card.Body>
                )}

                <Link to="/"><Button className="mt-3 btncard font-weight-bold" >GO HOME</Button></Link>
            </React.Fragment>


        </Card>
    )
}
