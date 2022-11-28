import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from '../Content/Content'
import axios from "../../axios";
import './NewTask.css'

const NewTask = (props) =>{
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    const onTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const addNewTask = () =>{
        axios.post('/task', {title}).then((res)=>{
            navigate("/");
        }).catch((err)=>{
            console.log(err)
        })
    }

    return(
        <Content>
            <div className='NewTask'>
                <div className='NewTask_Content'>
                    <label>New Task Title:<input type="text" value={title} onChange={onTitleChange}/></label>
                    <button onClick={addNewTask}>Add</button>
                </div>
            </div>
        </Content>
    )
}

export default NewTask;