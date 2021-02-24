import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import TextArea from "react-validation/build/textarea"
import CheckButton from "react-validation/build/button";

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

const FormCreation = (props) =>{
    const form = useRef();
    const checkbtn = useRef();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");


    const onChangeTitle = (e) =>{
        const title = e.target.value
        setTitle(title);
    }
    const onChangeContent = (e) =>{
        const content = e.target.value
        setContent(content);
    }

    const handleCreation = (e)=>{

        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkbtn.current.context._errors.length === 0) {
            services.create(title, content).then((data)=>{
                console.log(data);
                setSuccessful(true);
                setMessage("post created successfully");
            }, (error)=>{
                setMessage("No lo logramos");
                setSuccessful(false);
            });
        }

    }
    return(
        <div className="col-md-12">
      
        <div className="card card-container bg-form">
        <h2 className="text-center mb-5 alert">Creation post</h2>
        
          <Form onSubmit={handleCreation} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <Input
                    type="textarea"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={onChangeTitle}
                    validations={[required]}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <TextArea
                    className="form-control"
                    name="content"
                    value={content}
                    onChange={onChangeContent}
                    validations={[required]}
                  />
                </div>
  
                <div className="form-group">
                  <button className="btn btn-warning btn-block">Sign Up</button>
                </div>
              </div>
            )}
  
            {message && (
              <div className="form-group">
                <div
                  className={successful ? "text-center alert alert-success mt-2" : "alert alert-danger mt-2"}
                  role="alert"
                >
                  {message} <br />
                  <a href='/home'>Volver al Inicio</a>
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkbtn} />
          </Form>
        </div>
      </div>
    );
}

export default FormCreation