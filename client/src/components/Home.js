import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  

  const getdata = async (e) => {
    const res = await fetch("/getdata", {
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
  }, [])

  const deleteuser = async (id) =>{

    const res2 = await fetch(`/deleteuser/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      getdata();
    }
  }

  return (
<>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> User added succesfully.!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            Add Data
          </NavLink>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">StartDate & Time</th>
              <th scope="col">EndDate & Time</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((element, id) => {
              return (
                <>
                  <tr>
                    <th scope="row">{id + 1}</th>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.startdate}</td>
                    <td>{element.enddate}</td>
                    <td>{element.priority}</td>
                    <td>{element.status}</td>
                    <td className="d-flex justify-content-between">
                     <NavLink to={`view/${element._id}`}><button className="btn btn-success">
                        <RemoveRedEyeIcon />
                      </button></NavLink> 
                      <NavLink to={`edit/${element._id}`}><button className="btn btn-primary">
                        <CreateIcon />
                      </button></NavLink>
                      <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}>
                        <DeleteOutlineIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Home;
