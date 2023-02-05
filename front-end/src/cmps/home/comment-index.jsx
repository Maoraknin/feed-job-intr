import { CommentAdd } from "./comment-add.jsx";
import { CommentFilter } from "./comment-filter.jsx";
import { CommentList } from "./comment-list.jsx";


export function CommentIndex() {
    return (
        <section className='commend-index'>
            <CommentAdd />
            <CommentFilter />
            <CommentList />
        </section>
    )

}