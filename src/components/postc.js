
import React,{Component} from 'react';
class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:this.props.comments,
            ccount:this.props.commentcount,
            lcount:this.props.likes,
            userComment:'',
            visible:false,
            liked:false,
        }
    }
    LikeB = e => {
        
            let lval = 1;
            let ll = true;
            if(this.state.liked){
                lval=-1;
                ll=false;
            }
            this.setState(prevState => ({
                lcount:prevState.lcount+lval,
                liked:ll
            }))
        
    }

    render(){
        

return(


			
			<div className="cardbox shadow-lg bg-white">
			 
			 <div className="cardbox-heading">
			  
			  
			  <div className="media m-0">
			   <div className="d-flex mr-3">
				<a href=""><img className="img-fluid rounded-circle" src={this.props.avatar} alt="User" />{this.props.name}</a>
                     
			   </div>
			   <div className="media-body">
			    <p className="m-0"></p>
				<small><span><i className="icon ion-md-time"></i>{this.props.ptime} hrs ago</span></small>
			   </div>
			  </div>
			 </div>
			  
			 <div className="cardbox-item">
			  <img className="img-fluid" src={this.props.img} alt="Image"/>
			 </div>
			 <div className="cardbox-base">
			  <ul className="float-right">
			   <li><a><i className="fa fa-comments"></i></a></li>
			   <li><a><em className="mr-5">{this.props.commentcount}</em></a></li>
			  </ul>
			  <ul>
			   <li><a><i onClick={this.LikeB} className="fa fa-thumbs-up"></i></a></li>
			   <li><a><span>{this.state.lcount} Likes</span></a></li>
			  </ul>			   
			 </div>
			 <div className="cardbox-comments">
			  
              
			 </div>		  
					
			</div>

           
)
    }

}

export default Post;