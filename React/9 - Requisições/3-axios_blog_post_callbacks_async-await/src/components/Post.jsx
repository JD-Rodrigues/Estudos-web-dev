

function Post({post}) {

    return(
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <hr></hr>
        </>
    )
}

export default Post