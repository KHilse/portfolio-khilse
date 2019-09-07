import React from "react";

class Blog extends React.Component {

	render () {

		let posts = this.props.blogPosts.map((p,i) => {
			let [post, author, date] = p;
			return (
				<li className="post-item" key={i}>{post}<p className="post-subtext">{author} on {date}</p></li>
			)
		})


		return (
			<ul>
				{posts}
			</ul>
		)
	}
}

export default Blog;