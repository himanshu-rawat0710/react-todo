import React, { Component } from 'react'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from'@fortawesome/free-solid-svg-icons';


export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className='btn mx-2 text-success' onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />

                    </span>


                    <span className='btn mx-2 text-danger' onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrashAlt} />

                    </span>
                </div>
            </li>
        )
    }
}
