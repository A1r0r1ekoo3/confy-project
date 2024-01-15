import React from "react";

function About() {
  return (
    <div className="dark:bg-[#222831] ">
      <div className="max-container h-screen  flex flex-col items-center py-20  gap-6">
        <div className="flex items-center gap-5">
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl text-[#213363] dark:text-white">
            We love
          </h1>
          <h2 className="stat-title text-primary-content text-4xl font-bold tracking-widest bg-[#0174BE] py-4 px-3 rounded-md dark:text-black">
            comfy
          </h2>
        </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl text-[#213363] dark:text-white mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem
          autem maiores enim doloremque, adipisci nostrum rerum quisquam numquam
          dignissimos voluptatibus similique, eos qui neque quod officia eius
          deserunt illo modi placeat repellat, itaque nesciunt soluta magni? Ad
          tempore quidem explicabo non ratione beatae animi tenetur nobis, unde,
          odio modi.
        </p>
      </div>
    </div>
  );
}

export default About;
