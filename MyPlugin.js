import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
            	<div className='min-h-[800px] bg-white rounded-lg shadow-lg'>
    	  <header className='bg-neutral-200 p-6'>
    	    <h1 className='text-4xl font-title text-primary-950 text-center sm:text-left'>
    	      Software Engineer Portfolio
    	    </h1>
    	    <p className='mt-2 text-neutral-700 text-center sm:text-left'>
    	      Showcasing my projects, experiences, and journey in tech.
    	    </p>
    	  </header>
    	  <div className='flex flex-col sm:flex-row gap-6 p-6'>
    	    <aside className='sm:w-1/4'>
    	      <section className='flex flex-col gap-4 items-center sm:items-start'>
    	        <div
    	          className='mx-auto rounded-full w-[150px] h-[150px] perspective-1000'
    	          style={{ position: 'relative' }}
    	        >
    	          <div
    	            className='relative group transition-transform'
    	            style={{
    	              width: '150px',
    	              height: '150px',
    	              perspective: '800px',
    	            }}
    	          >
    	            <div
    	              className='transition-transform duration-500 group-hover:transition-none'
    	              style={{
    	                width: '100%',
    	                height: '100%',
    	                backgroundImage:
    	                  'url(https://tools-api.webcrumbs.org/image-placeholder/300/300/avatars/1)',
    	                backgroundSize: 'contain',
    	                backgroundPosition: 'center',
    	                backgroundRepeat: 'no-repeat',
    	                borderRadius: '50%',
    	                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    	                transformStyle: 'preserve-3d',
    	              }}
    	              onMouseMove={e => {
    	                const rect = e.currentTarget.getBoundingClientRect();
    	                const x = e.clientX - rect.left - rect.width / 2;
    	                const y = e.clientY - rect.top - rect.height / 2;
    	                e.currentTarget.style.transform = `rotateX(${-y / 15}deg) rotateY(${x / 15}deg)`;
    	              }}
    	              onMouseLeave={e => {
    	                e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
    	              }}
    	            >
    	              <div
    	                className='absolute inset-0 pointer-events-none rounded-full transition-opacity opacity-0 group-hover:opacity-100'
    	                style={{
    	                  boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)',
    	                }}
    	              ></div>
    	            </div>
    	          </div>
    	        </div>
    	        <h2 className='text-2xl font-semibold text-center text-neutral-950'>
    	          John Doe
    	        </h2>
    	        
    	        <ul className='flex justify-center mt-4 gap-3'>
    	          <i className='fa-brands fa-github text-neutral-950 text-xl'></i>
    	          <i className='fa-brands fa-linkedin text-neutral-950 text-xl'></i>
    	          <i className='material-symbols-outlined text-neutral-950 text-xl'>
    	            email
    	          </i>
    	        </ul>
    	      </section>
    	<p className='text-center text-neutral-600'>
    	          Passionate about creating elegant and efficient solutions.
    	        </p>
    	    </aside>
    	    <main className='flex-1'>
    	      <section className='mb-6'>
    	        <h3 className='text-2xl font-title text-primary-950'>About Me</h3>
    	        <p className='mt-4 text-neutral-700 leading-relaxed'>
    	          I am a software engineer with a focus on building scalable web
    	          applications. I thrive on solving complex problems and turning ideas
    	          into reality.
    	        </p>
    	      </section>
    	      <section className='mb-6'>
    	        <h3 className='text-2xl font-title text-primary-950'>Projects</h3>
    	        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
    	          <div className='bg-neutral-100 rounded-md p-4 transition-transform duration-300 hover:scale-[1.05] hover:translate-y-[-5px] hover:shadow-xl'>
    	            <img
    	              src='https://tools-api.webcrumbs.org/image-placeholder/300/200/shapes/1'
    	              alt='Project A'
    	              className='w-full h-[120px] rounded-md object-cover mb-2'
    	            />
    	            <h4 className='text-lg font-medium text-neutral-950'>Project A</h4>
    	            <p className='mt-2 text-neutral-600'>
    	              A web application for managing tasks efficiently.
    	            </p>
    	          </div>
    	          <div className='bg-neutral-100 rounded-md p-4 transition-transform duration-300 hover:scale-[1.05] hover:translate-y-[-5px] hover:shadow-xl'>
    	            <img
    	              src='https://tools-api.webcrumbs.org/image-placeholder/300/200/shapes/2'
    	              alt='Project B'
    	              className='w-full h-[120px] rounded-md object-cover mb-2'
    	            />
    	            <h4 className='text-lg font-medium text-neutral-950'>Project B</h4>
    	            <p className='mt-2 text-neutral-600'>
    	              An innovative platform for online learning.
    	            </p>
    	          </div>
    	          <div className='bg-neutral-100 rounded-md p-4 transition-transform duration-300 hover:scale-[1.05] hover:translate-y-[-5px] hover:shadow-xl'>
    	            <img
    	              src='https://tools-api.webcrumbs.org/image-placeholder/300/200/shapes/3'
    	              alt='Project C'
    	              className='w-full h-[120px] rounded-md object-cover mb-2'
    	            />
    	            <h4 className='text-lg font-medium text-neutral-950'>Project C</h4>
    	            <p className='mt-2 text-neutral-600'>
    	              A mobile app for tracking fitness goals.
    	            </p>
    	          </div>
    	        </div>
    	      </section>
    	      <section className='mb-6'>
    	        <h3 className='text-2xl font-title text-primary-950'>Skills</h3>
    	        <div className='flex flex-wrap gap-4 mt-4'>
    	          {[
    	            'HTML',
    	            'CSS',
    	            'JavaScript',
    	            'React',
    	            'Node.js',
    	            'Python',
    	            'Django',
    	          ].map((skill, index) => (
    	            <div
    	              key={index}
    	              className='bg-primary-100 text-primary-950 font-medium py-2 px-4 rounded-full shadow-md transition-transform duration-300 hover:scale-[1.1] hover:bg-primary-200'
    	            >
    	              {skill}
    	            </div>
    	          ))}
    	        </div>
    	      </section>
    	      <section>
    	        <h3 className='text-2xl font-title text-primary-950'>Experiences</h3>
    	        <ul className='mt-4 space-y-4'>
    	          <li className='bg-neutral-100 rounded-md p-4'>
    	            <p className='font-bold text-neutral-950'>Software Engineer</p>
    	            <p className='text-neutral-600'>XYZ Company | Jan 2020 - Present</p>
    	            <p className='mt-2 text-neutral-700'>
    	              Leading the development of a high-performing team.
    	            </p>
    	          </li>
    	          <li className='bg-neutral-100 rounded-md p-4'>
    	            <p className='font-bold text-neutral-950'>Junior Developer</p>
    	            <p className='text-neutral-600'>ABC Corp | May 2018 - Dec 2019</p>
    	            <p className='mt-2 text-neutral-700'>
    	              Contributed to frontend optimizations and design.
    	            </p>
    	          </li>
    	        </ul>
    	      </section>
    	    </main>
    	  </div>
    	  <footer className='bg-neutral-200 p-6 text-center'>
    	    <p className='text-neutral-600'>© 2023 John Doe. All rights reserved.</p>
    	  </footer>
    	</div> 
            </div>
  )
}

