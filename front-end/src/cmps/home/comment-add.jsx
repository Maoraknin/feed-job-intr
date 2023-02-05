import { useState } from "react"
import { saveComment } from "../../store/comment.action" 
import { commentService } from "../../services/comment.service"

export function CommentAdd() {

const [comment, setComment] = useState(commentService.getEmptyComment())

// const comment = {
//     mail: 'maoraknin125@gmail.com',
//     imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1673817322/%D7%A7%D7%95%D7%A1%D7%98%D7%94_%D7%A8%D7%99%D7%A7%D7%94_%D7%9E%D7%A9%D7%A4%D7%97%D7%94_%D7%A8%D7%90%D7%A4%D7%98%D7%99%D7%A0%D7%92_jd8zk8.jpg',
//     txt: 'Checking the backend'
// }

    function onAddComment(ev){
        ev.preventDefault()
        // ev.stopPropagation()
        console.log('comment:',comment)
        saveComment(comment)

    }


    function handleChange({ target }) {
        let { value, name: field } = target
        setComment((prevState) => {
            return { ...prevState, [field]: value }
        })
    }




    return (
        <section className='comment-add'>
            <form onSubmit={onAddComment} className='add-comment-form'>
            <div className='add-input-container'>
                <label htmlFor='mail'>Email : </label>
                <input type='email'
                    name='mail'
                    id='mail'
                    placeholder='Enter email...'
                    value={comment.mail}
                    onChange={handleChange}
                />
            </div>
            <div className='add-input-container'>
                <label htmlFor='comment'>Comment : </label>
                <textarea
                    name='txt'
                    id='comment'
                    rows='4'
                    cols='50'
                    placeholder='Enter comment...'
                    value={comment.txt}
                    onChange={handleChange}
                />
            </div>
            <button className="secondary">Submit</button>
            </form>
        </section>
    )

}