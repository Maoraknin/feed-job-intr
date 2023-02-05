

export function CommentAdd() {

    function onAddComment(ev){
        ev.preventDefault()
        // ev.stopPropagation()
        console.log('Submited')

    }

    function handleChange(value){
        console.log('value', value)
    }


    return (
        <section className='comment-add'>
            <form onSubmit={onAddComment} className='add-comment-form'>
            <div className='add-input-container'>
                <label htmlFor='name'>Email : </label>
                <input type='email'
                    name='email'
                    id='email'
                    placeholder='Enter email...'
                    // value={comment.email}
                    onChange={() => handleChange('email')}
                />
            </div>
            <div className='add-input-container'>
                <label htmlFor='comment'>Email : </label>
                <textarea
                    name='comment'
                    id='comment'
                    rows='4'
                    cols='50'
                    placeholder='Enter comment...'
                    // value={comment.comment}
                    onChange={() => handleChange('textarea')}
                />
            </div>
            <button className="secondary">Submit</button>
            </form>
        </section>
    )

}