import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
                <nav className="sticky top-0 z-10 p-2 h-100 md:h-48 lg:h-36 space-y-2">
                        <div className="border-2 border-white rounded-md text-center text-base mx-4  bg-opacity-80">
                            <Link className="internal_link" to="./Aim">
                                <img className=" lg:h-14 lg:w-14 h-10 w-10 rounded mt-2 mx-4"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmpbB3jSjMF-FDgIL1E-eRN6eeCDLSsvoAQ&usqp=CAU" alt='/' />
                                <span className='text-sm lg:text-lg  md:text-lg '>Aim</span> </Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4 bg-opacity-80">
                            <Link className="internal_link" to="./Theory">
                                <img className="lg:h-14 lg:w-14 h-10 w-10 rounded mt-2 mx-4 " src="https://cdn-icons-png.flaticon.com/512/1648/1648697.png"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>Theory</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./Procedure">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded mt-2 mx-4"
                                    src="https://cdn4.iconfinder.com/data/icons/project-management-1-11/65/23-512.png"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>Procedure</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./Simulation">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded-full mt-2 mx-4"
                                    src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo-animation/editable-minimal.png?v=6"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>Simulation</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./Code">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded-full mt-2 mx-4"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>Code</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./Quiz1">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded-full overflow-hidden mt-2 mx-4"
                                    src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"alt='/'/>
                                <span className=' text-sm lg:text-lg md:text-lg'>Quiz</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./Results">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded mt-2 mx-4"
                                    src="https://cdn4.iconfinder.com/data/icons/collection-of-online-business-icons/64/Board_Chart_Results_Business-512.png"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>Result</span></Link>
                        </div>
                        <div className="border-2 border-white rounded-md text-center text-base mx-4">
                            <Link className="internal_link" to="./References">
                                <img className="md:h-14 lg:h-14 lg:w-14 h-8 w-10 rounded mt-2 mx-4" 
                                src="https://image.pngaaa.com/134/5592134-middle.png"alt='/'/>
                                <span className='text-sm lg:text-lg md:text-lg'>References</span></Link>
                        </div>
            </nav>
    </>
  )
}
