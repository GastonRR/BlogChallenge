import React from "react";
 import FormEdition from '../../forms/EditForm'

function EditionPage(props) {
  
  return (
    <React.Fragment>
        <FormEdition id ={props.match.params.id !== undefined ? props.match.params.id : 0 }/>
    </React.Fragment>
  );
}

export default  EditionPage;
