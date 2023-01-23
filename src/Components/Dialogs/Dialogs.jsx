import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    
    let DialogsElements = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} /> )
    
    let MessagesElements = props.messages.map( m => <Message message={m.message} /> )
    
    let newMessagesElement = React.createRef();

    let addMessage = () => {
        let text = newMessagesElement.current.value;
        alert(text)
    }

    
    return (
        <div className="dialogs">
            <div className="dialog-item">
                { DialogsElements }
            </div>
            <div className="messages">
                { MessagesElements }
                <div>
                    <div> <textarea ref={newMessagesElement}></textarea> </div>
                    <div> <button onClick={ addMessage }>Add post</button> </div>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;