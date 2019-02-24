import React, { Component } from 'react'
import Faker from 'faker'
import Post from './postc'
 
class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
 
  componentWillMount() {
    for (let i = 0; i < 69; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.internet.avatar(),
        img : Faker.image.image(),
        likes : Math.ceil(Math.random() * 100),
        commentcount : Math.ceil(Math.random()*10),
        comments : [],
        desc : Faker.lorem.sentence(),
        ptime : Math.ceil(Math.random()*20),
      }
      for(let i=0;i < user.commentcount;i++){
        const comment = {
          user: Faker.internet.userName(),
          avatar: Faker.internet.avatar(),
          content: Faker.lorem.sentence(),
          ctime : user.ptime - (10-Math.ceil(Math.random()*10)),
        }
        user.comments = [...user.comments,comment]
      }
      
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
 
  renderUsers(user) {
    return <Post {...user} />
        
  }
 
  render() {
    return(
        <div className="container">
            
            <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div>{this.state.users.map(user => this.renderUsers(user))}</div>
            </div>
            </div>
        </div>
    )
  }
}
 
export default Posts