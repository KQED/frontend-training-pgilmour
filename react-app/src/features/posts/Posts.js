import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'

export function Posts () {

  const { posts, loading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {posts.loading && <p>Loading...</p>}
      {!posts.loading && posts.error ? <p> Error: {posts.error}</p> : null }
      {!posts.loading && posts.length ? (
        <ul>
          {
            posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))
          }
        </ul>
      ) : null }
    </div>
  )
}
