import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Detail = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const {id} = useParams("");
  console.log(id);

  const navigate = useNavigate();

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

  useEffect(()=>{
    getdata();
  },[])


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
      navigate("/")
    }
  }

  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Akash Kamble</h1>

      <Card sx={{ maxWidth: 700 }}>
        <CardContent>
            <div className="add_btn">
                <NavLink to={`/edit/${getuserdata._id}`}><button className="btn btn-primary mx-2"><CreateIcon/></button></NavLink>
                <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon/></button>
            </div>
          <div className="left_view col-lg-6 col-md-6 col-12">
            <h3 className="mt-3">
              Title: <span style={{ fontWeight: 400 }}>{getuserdata.title}</span>
            </h3>
            <p className="mt-3">
              Description:{" "}
              <span style={{ fontWeight: 400 }}>{getuserdata.description}
              </span>
            </p>
            <h3 className="mt-3">
              StratDate & Time: <span style={{ fontWeight: 400 }}>{getuserdata.startdate}</span>
            </h3>
          </div>
          {/* <div className="right_view"> */}
            <h3 className="mt-3">
              EndDate & Time: <span style={{ fontWeight: 400 }}>{getuserdata.enddate}</span>
            </h3>
            <h3 className="mt-3">
              Priority: <span style={{ fontWeight: 400 }}>{getuserdata.priority}</span>
            </h3>
            <h3 className="mt-3">
              Status: <span style={{ fontWeight: 400 }}>{getuserdata.status}</span>
            </h3>
          {/* </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
