import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { adddata } from "./context/ContextProvider"

const Register = () => {

    // const {udata, setUdata} = useContext(adddata);

const navigate = useNavigate();

    const [inpval, setINP] = useState({
        title:"",
        description: "",
        startdate: "",
        enddate: "",
        priority: "",
        status: ""
        // status1: "",
        // status2: ""

    })

const setdata = (e) =>{
    console.log(e.target.value);
    const {name, value} = e.target;
    setINP((preval)=>{
        return {
            ...preval,
            [name]:value
        }
    })
}

const addinpdata = async(e) =>{
    e.preventDefault();

    const {title,description,startdate,enddate,priority,status} = inpval;

    const res = await fetch("/register", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({

            title,description,startdate,enddate,priority,status
        })
    })

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data) {
        alert("error");
        console.log("error");
    }else{
        alert("data added");
        navigate("/")
        // setUdata(data)
        console.log("data added");
    }
}

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-5">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputTitle" class="form-label">
                            Title
                        </label>
                        <input
                            type="text" onChange={setdata} value={inpval.title}
                            name="title"
                            class="form-control"
                            id="exampleInputTitle"
                            aria-describedby="titleHelp"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputDescription" class="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            name="description" onChange={setdata} value={inpval.description}
                            class="form-control"
                            id="exampleInputDescription"
                        />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="startDate&Time" class="form-label">
                            StartDate & Time
                        </label>
                        <input type="date" name="startdate" onChange={setdata} value={inpval.startdate} class="form-control" id="exampleInputDate" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="endDate&Time" class="form-label">
                            EndDate & Time
                        </label>
                        <input type="date" name="enddate" onChange={setdata} value={inpval.enddate} class="form-control" id="exampleInputDate" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="examplePriority" class="form-label">
                            Priority
                        </label>
                        <input type="text" name="priority" onChange={setdata} value={inpval.priority} class="form-control" id="exampleInputPriority" />
                    </div> 
                        <div class="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleStatus" class="form-label">Status</label>
                            <input
                                type="text"
                                name="status" onChange={setdata} value={inpval.status}                         
                                class="form-control"
                                id="exampleInputStatus"
                            />
                            
                        </div>
                       
                    
                    <button type="submit" onClick={addinpdata} class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
