import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: ""
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: "error retreiving data" })
      })
  }

  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        List of Posts and Images
        {
          posts.length ?
            posts.map(post => <div key={post.id}>{post.title}<div style={{marginLeft: "100px"}}><img src={post.url} width="100px" height="100px"></img></div></div>) : null
        }
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default PostList;