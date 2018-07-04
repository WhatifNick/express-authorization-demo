import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Bookmark from './Bookmark';




class Bookmarks extends Component {
    state = {
        bookmarks: [],
        loading: true
      }

      remove = (id) => {
        const index = this.state.bookmarks.findIndex(bookmark => bookmark._id === id )
        if (index >= 0){
        const bookmarks = [...this.state.bookmarks]
        bookmarks.splice(index, 1)
        this.setState({ bookmarks })
        axios.delete(`http://localhost:3000/bookmarks/${id}`)
        }
      }
    render() {
        const { bookmarks } = this.state
        return(
        <div>
        { this.state.loading ?
            <div>
            <h2>LOADING....</h2>
            <img src = "https://metrouk2.files.wordpress.com/2018/02/giphy16.gif" />
            </div>
            :
            <div>
            <h1>Bookmarks</h1>
            
            <ul>
            {
                bookmarks.map(
                bookmark => <Bookmark key={bookmark._id} _id={bookmark._id} title={bookmark.title} url={bookmark.url} remove={this.remove} />
                )
            }
            </ul>
            </div>
            }
       </div>
     )
  }


  async componentDidMount() {
    try {
      const bookmarks = await axios.get(
        'http://localhost:3000/bookmarks'
      )
      this.setState({ bookmarks: bookmarks.data, loading: false })
    }
    catch(error) {
      alert('Can\'t get bookmarks!', error)
    }
  }
}

export default Bookmarks;