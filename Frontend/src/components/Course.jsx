import React from "react";
import list from '../../public/list.json';
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-16  items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl pt-12">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero in accusantium soluta veniam voluptas temporibus laboriosam minus facilis ad commodi sed similique porro optio cum esse perferendis quam dolore ipsam neque quas libero incidunt, praesentium et? Ipsum voluptas non, harum quia ipsa suscipit aut quisquam magni maxime eveniet laudantium, in quod aspernatur explicabo quaerat molestiae? Tempore veritatis doloribus in minima! Maiores obcaecati dolor amet praesentium odio quia eius voluptate, id perferendis non, qui eveniet?</p>
          <Link to="/">
          <button className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                list.map((data)=>(
                    <Cards item={data} key={data.id}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
