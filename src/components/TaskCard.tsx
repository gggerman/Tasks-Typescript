import React, { MouseEvent } from 'react'
import { Task } from '../interfaces/Task';

interface Props {
    task: Task;
    deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: Props) => {
    return (
        <div className='card card-body bg-secondary rounded-0 text-dark'>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => task.id && deleteTask(task.id)} className='btn btn-danger'>
                Delete
            </button>
        </div>
    )
}
