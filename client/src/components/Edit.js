import React, { useEffect, useState, } from "react";
import { NavLink, useNavigate, useParams, } from "react-router-dom";



const Edit = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const navigate = useNavigate();


  const [inpval, setINP] = useState({
    title: "",
    description: "",
    startdate: "",
    enddate: "",
    priority: "",
    status: ""
    // status1: "",
    // status2: ""
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async(e) =>{
      e.preventDefault();

      const {title,description,startdate,enddate,priority,status} = inpval;

      const res2 = await fetch(`/updateuser/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
            title,description,startdate,enddate,priority,status
        })
      });

      const data2 = await res2.json();
      console.log(data2);

      if(res2.status === 422 || !data2){
          alert("fill the data")
      }else{
          alert("data added");
          navigate("/")
      }
  }

  return (
    <div className="container">
      <NavLink to="/">home2</NavLink>
      <form className="mt-5">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputTitle" class="form-label">
              Title
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inpval.title}
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
              name="description"
              onChange={setdata}
              value={inpval.description}
              class="form-control"
              id="exampleInputDescription"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="startDate&Time" class="form-label">
              StartDate & Time
            </label>
            <input
              type="date"
              name="startdate"
              onChange={setdata}
              value={inpval.startdate}
              class="form-control"
              id="exampleInputDate"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="endDate&Time" class="form-label">
              EndDate & Time
            </label>
            <input
              type="date"
              name="enddate"
              onChange={setdata}
              value={inpval.enddate}
              class="form-control"
              id="exampleInputDate"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="examplePriority" class="form-label">
              Priority
            </label>
            <input
              type="text"
              name="priority"
              onChange={setdata}
              value={inpval.priority}
              class="form-control"
              id="exampleInputPriority"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleStatus" class="form-label">
              Status
            </label>
            <input
              type="text"
              name="status"
              onChange={setdata}
              value={inpval.status}
              class="form-control"
              id="exampleInputStatus"
            />
          </div>
          <button type="submit" onClick={updateuser} class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
