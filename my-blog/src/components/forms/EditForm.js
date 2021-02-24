import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextArea from "react-validation/build/textarea"
import CheckButton from "react-validation/build/button";

// Services
import services from '../../services/public.services'
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger mt-2" role="alert">
                This field is required!
            </div>
        );
    }
};


export default function EditForm({id}) {
    const form = useRef();
    const checkbtn = useRef();
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [exist, setExist] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        services.postById(id)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((err)=>{
                setMessage("POST NOT FOUND");
                setExist(false);
            })
            // eslint-disable-next-line
    }, [])

    const handleCreation = (e) => {

        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkbtn.current.context._errors.length === 0) {
            services.edit(title, content,id).then((data) => {
                console.log(data);
                setSuccessful(true);
                setMessage("post edit successfully");
            }, (error) => {
                setMessage("not successfully ");
                setSuccessful(false);
            });
        }

    }
    const onChangeTitle = (e) => {
        const title = e.target.value
        setTitle(title);
    }
    const onChangeContent = (e) => {
        const content = e.target.value
        setContent(content);
    }

    return (
        <div className="col-md-12">

            <div className="card card-container bg-form">
                <h2 className="text-center mb-2 alert">{`Edition post: ${id}`}</h2>
                <Form onSubmit={handleCreation} ref={form}>
                    {!successful && exist && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Input
                                    type="textarea"
                                    className="form-control"
                                    name="title"
                                    value={title}
                                    placeholder={data.title}
                                    onChange={onChangeTitle}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <TextArea
                                    className="form-control"
                                    rows = "7"
                                    name="content"
                                    value={content}
                                    placeholder={data.body}
                                    onChange={onChangeContent}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-bg btn-block font-weight-bold">EDIT POST</button>
                            </div>
                        </div>
                    )}

                    {message && successful && (
                        <div className="form-group">
                            <div
                                className="text-center alert alert-success mt"
                                role="alert"
                            >
                                <img
                                    src="https://icon-library.com/images/successful-icon/successful-icon-10.jpg"
                                    alt="profile-img"
                                    className="profile-img-card"
                                />
                                {message} <br />
                                <a href='/'>Volver al Inicio</a>
                            </div>
                        </div>
                    )}
                    {message && !successful && !exist && (
                        <div className="form-group">
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
                                <a href='/'>Volver al Inicio</a>
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkbtn} />
                </Form>
            </div>
        </div>
    )
}
