import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import { Carousel, Image } from 'antd';

const Index = ({ courses }) => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get("/api/courses");
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);

  return (
    <>
      {/* <h1 className="jumbotron text-center bg-primary square">
        Online Education Marketplace
      </h1> */}
      <div className=".container-fluid">
      <div className="row">
      <div className="col-lg-12"> 
      <Carousel dotPosition="bottom" autoplay>
        <div>
          <img className="banner" src="https://www.studyingram.com/wp-content/uploads/2020/01/iStock-520374378.jpg" />
        </div>
        <div>
          <img className="banner" src="https://www.ringcentral.co.uk/gb/en/blog/wp-content/uploads/2020/09/most-popular-online-courses-on-udemy-4-5.png" />
        </div>
      
      </Carousel>
      </div>
      </div>

      </div>
      
      <div className="container-fluid mt-5">
      <h1>Course List : </h1>
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  return {
    props: {
      courses: data,
    },
  };
}

export default Index;
