import React from "react";
 import FormEdition from '../../forms/EditForm'

function EditionPage(props) {
  return (
    <React.Fragment>
        <FormEdition id ={props.match.params.id}/>
    </React.Fragment>
  );
}

export default  EditionPage;
