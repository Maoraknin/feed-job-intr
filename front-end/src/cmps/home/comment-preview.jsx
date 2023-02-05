export function CommentPreview({ comment }) {
    console.log('here')

    return (
        <section className='comment-preview'>
            <img className="preview-img" src={`https://www.gravatar.com/avatar/${comment.imgUrl}`} />
            <div className="comment-container">
                <h3 className="preview-mail">{comment.mail}</h3>
                <p>{comment.txt}</p>
            </div>
        </section>
    )

}