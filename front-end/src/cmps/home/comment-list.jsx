import { useEffect } from "react"
import { loadComments } from "../../store/comment.action" 

export function CommentList() {

    useEffect(() => {
        getComments()
    }, [])

    async function getComments(){
        try{
            const comments = await loadComments()
            console.log('comments:',comments)
        }
        catch(err){
            console.dir('err:',err)
        }
    }

    return (
        <section className='comment-list'>
            <CommentPreview />
        </section>
    )

}