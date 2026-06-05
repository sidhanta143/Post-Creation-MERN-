import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { image } from 'framer-motion/client'
const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            name: "Sidhanta",
            URL: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&w=1000&q=80",
            caption: "This is a sidhanta"
        }
    ])

 

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
        .then((response) => {
            setPosts(response.data.posts);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);




    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-base-300 p-4">

            {
                posts.length > 0 ? (

                    posts.map((post) => {
                        return (
                            <div
                                key={post._id}
                                className="w-full max-w-md bg-base-200 border border-base-300 rounded-2xl shadow-xl p-6 mb-6"
                            >
                                <h1 className="text-2xl font-bold mb-4">
                                    {post.name}
                                </h1>

                                <img
                                    src={post.URL}
                                    alt="Post"
                                    className="w-full h-72 object-cover rounded-lg mb-4"
                                />

                                <p className="text-gray-700">
                                    {post.caption}
                                </p>
                            </div>
                        )
                    })

                ) : (
                    <p>No Posts Found</p>
                )
            }

        </div>
    )
}

export default Feed