import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Home = () => {


    const navigate=useNavigate();


    const  handlesubmit=(e)=>{
      
        e.preventDefault();

        const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post",formData)
        .then((resp)=>{
            // console.log(resp);
            // alert("Post created successfully!");
            e.target.reset();
          navigate("/feed");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
  <div className="w-full min-h-screen flex items-center justify-center bg-base-300 p-4">
  <section className="w-full max-w-md bg-base-200 border border-base-300 rounded-2xl shadow-xl p-6">
    
    <h1 className="text-3xl font-bold text-center mb-6">
      Create Post
    </h1>

     <form onSubmit={handlesubmit}>

                    {/* Name */}
                    <div className="mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Name
                            </span>
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                        />

                    </div>

                    {/* Upload Image */}
                    <div className="mb-4">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Upload Image
                            </span>
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="file-input file-input-bordered w-full"
                        />

                    </div>

                    {/* Caption */}
                    <div className="mb-6">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Caption
                            </span>
                        </label>

                        <textarea
                            name="caption"
                            placeholder="Write a caption..."
                            className="textarea textarea-bordered w-full h-24 resize-none"
                        ></textarea>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full text-white text-lg"
                    >
                        Submit Post
                    </button>

                </form>
  </section>
</div>
  )
}

export default Home
