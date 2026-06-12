import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Viewcourse = () => {
  const [courses, setCourses] = useState([]);

  //get all courses
  const getcourses = async () => {
    const res = await axios.get("http://localhost:5600/api/courses");
    setCourses(res.data);
  };

  useEffect(() => {
    getcourses();
  }, []);

  const deletecourse = async (id) => {
    const confirmdelete = window.confirm("are you sure you want delete?");

    if (confirmdelete) {
      await axios.delete(`http://localhost:5600/api/courses/${id}`);
      alert("course deleted successfully");
      getcourses();
    } else {
      alert("course deleted failed");
    }
  };

  return (
    <>
      <div>
        <div>
          <h2>All Courses</h2>
          {courses.length === 0 ? (
            <p>No courses found</p>
          ) : (
            <div>
              {courses.map((x) => (
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.price}</p>
                  <Link to={`/editcourse/${x._id}`}>Edit</Link>
                  <Link to={`/cd/${x._id}`}>View</Link>
                  <button onClick={() => deletecourse(x._id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Viewcourse;
