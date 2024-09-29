import { useState } from "react";
import { useEffect } from "react";


const Main = () =>{

    const [subject, setSubject] = useState('');
    const [hours, setHours] = useState('');

    const onClickButton = () => {
        alert("Please check!!");
        console.log("Subject: " + subject + ", Hours: " + hours);
    }

    useEffect(()=>{
        console.log("Subject: " + subject + ", Hours: " + hours);
    },[subject, hours]);
    
    const SubjectInput = (e) => {
        setSubject(e.target.value);
    }
    
    const HoursInput = (e) => {
        setHours(e.target.value);
    }
    
    const AddButton = () => {
        onClickButton();
        setSubject('');
        setHours('');
    }
    

    const ResetButton = () =>{
        setSubject('');
        setHours('');
        alert("Reset Successfully!!");
        console.log("Reset Successful!!");
    }
    
    return (
        <>
        <div className="container">
        <div className="header">
        <h3>Geekster Education Planner</h3>
        </div>
        <div className="sub">
        <input type="text" name="name" placeholder="Subject" id="subject"/>
        <input type="number" name="number" placeholder="Hou"/>
        </div>
        <div className="btn">
        <button onClick={onClickButton} >Add</button>
        <button onClick={ResetButton}>RESET</button>
        </div>

        <div>
            <h3>Added Subjects:</h3>
            <div>
                {subject? <p>{subject} - {hours} Hours</p> : <p>No Subjects added yet</p>}
            </div>
           
        </div>

        </div>
        </>
    );
}
export default Main;