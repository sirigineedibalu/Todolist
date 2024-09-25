import React from 'react'
import { useState } from 'react'
import "./todo.css"
import Somewhere from './somewhere'
function Todolist() {
    const [task, settask] = useState([])
    const [newtask, setnewtask] = useState("")
    const [phonenunber, setphonenumber] = useState("")
    const [idnumber, setidnumber] = useState("")
    const [email, setemail] = useState("")
    const [image, setimage] = useState("")
    function Handlechange(event) {
        setnewtask(event.target.value)
    }
    function onnumberchange(event) {////////////// function for phonenumbre change event
        setphonenumber(event.target.value)
    }
    function Idnumber(event) {
        setidnumber(event.target.value)
    }
    function emailof(event) {
        setemail(event.target.value)
    }
    // function imageof(event) {
    //     let file = (event.target.files[0])
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setimage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // }
    function imageof(event) {
        let file = event.target.files[0]
        if (file) {

            const reader = new FileReader()
            reader.onloadend = () => {

                setimage(reader.result)
            }
            reader.readAsDataURL(file)

        }
    }

    function Add() {
        if (newtask.trim() !== "") {
            settask(previous => [...previous, { name: newtask, phone: phonenunber, id: idnumber, email: email, photo: image }])
            setnewtask("")
            setemail("")
            setidnumber("")
            setphonenumber("")
            setimage("")
        }
    }
    function Deletebutton(index) {
        const updateTask = task.filter((_, i) => (i !== index))
        settask(updateTask)
    }
    function Moveup(index) {
        if (index > 0) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]]
            settask(updateTask)
        }
    }
    function Movedown(index) {
        if (index < task.length - 1) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
            settask(updateTask)
        }
    }
    return (
        <div className=' bgdar d-flex flex-column '><div className="Maincontaier  flex-column d-flex justify-content-center align-content-center gap-3 bg-dark"  >
            <div className=" card d-flex flex-column justify-content-center  align-items-center  " style={{ width: "100%" }}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={Handlechange} style={{ width: "59%" }} />
                <label htmlFor="" >Phonenumber</label>
                <input type="Number" onChange={onnumberchange} style={{ width: "59%" }} />
                <label htmlFor="">Id number</label>
                <input type="text" onChange={Idnumber} style={{ width: "59%" }} />
                <label htmlFor="">Gmail</label>
                <input type="email" onChange={emailof} style={{ width: "59%" }} />
                <input type="file" alt='image' onChange={imageof} />
                <button><i className=' bi-bi-plus' onClick={Add}>Add</i></button>
            </div><div className="smallcontainer d-flex flex-column">
                <div className="w-100 d-flex justify-content-center">
                    <ol style={{}} className='text-white  '>{task.map((tasks, index) => (<li key={index}><img src="https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180" alt="" className='header' />
                        <span>Name:{tasks.name}</span><span>PhoneNumber:{tasks.phone}</span><span>Email:{tasks.email}</span> <span>Employeeid:{tasks.idnumber}</span><div className="footer"> <button onClick={() => { Deletebutton(index) }}>Deletebutton</button><button onClick={() => { Moveup(index) }}>moveup</button><button onClick={() => { Movedown(index) }}>Movedown</button>{tasks.photo && (<img src={tasks.photo} alt='ima' width={100} height={100}></img>)}</div>
                    </li>))}</ol>
                </div>
                {/* <Something />
                <
                <Present /> */}
                <Somewhere />
            </div></div></div>
    )
}
export default Todolist