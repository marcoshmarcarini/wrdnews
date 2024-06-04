"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        const handlePosts = async () => {
            const apiKey = `66a42198c70047a5b009097faab4643f`
            const lang = `br`
            const url = `https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=${apiKey}`
            const postFetch = await fetch(url)
            const postsResponse = await postFetch.json()

            setPosts(postsResponse.articles)

        }

        handlePosts()

    }, [])

    console.log(posts)


    return (
        <>
            <div>
                Posts:
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div className="flex justify-center items-center h-screen">
                        <a href={post.url}>
                            <h1>{post.title}</h1>
                            <p>{post.author}</p>
                            {post.urlToImage && <img src={post.urlToImage} alt={post.title} style={{ width: '200px', height: 'auto' }} />}
                        </a>
                        </div>
                    ))
                ) : (<p>Carregando posts...</p>)}
            </div>
        </>
    )

}