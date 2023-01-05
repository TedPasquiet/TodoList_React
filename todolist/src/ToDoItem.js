import React from "react";
import {MdDeleteOutline} from "react-icons/md"
import {AiOutlineCheckCircle} from "react-icons/ai"

export default function ToDoItem(props) {
  return (
    <div className="todoitem">
      <div>
        <h4 className={props.complete ? "complete" : "notcomplete"}>
          {props.text}
        </h4>
        <button onClick={() => props.handleDelete(props.id)}><MdDeleteOutline/></button>
        <button onClick={() => props.handleComplete(props.id)}><AiOutlineCheckCircle/></button>
      </div>
    </div>
  );
}
