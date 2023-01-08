import {useParams} from "react-router-dom";

const Article = () => {
	/** 여기서 id 는 App.js 에서 Route path 에 :id 임*/
	const {id} = useParams()

	return (
			<div>
				<h2>게시글 {id}</h2>
			</div>
	)
}
export default Article;