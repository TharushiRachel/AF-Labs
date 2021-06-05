import React from "react";
import Posts from "./components/Posts";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import PostHolder from './components/PostHolder';
import AddPost from "./components/AddPost";
import UserContext from "./components/UserContext";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user:null
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                user:{
                    name:'admin'
                }
            });
        },5000);
    }

    render() {
        //return <h1>Hello to React</h1>
        // return <div>
        //     <table>
        //         <thead>
        //         <tr>
        //             <th>ID</th>
        //             <th>Name</th>
        //             <th>Description</th>
        //         </tr>
        //         </thead>
        //         <tbody>
        //         {posts.map(post => {
        //             return <tr key={post.id.toString()}>
        //                 <td>{post.id}</td>
        //                 <td>{post.name}</td>
        //                 <td>{post.description}</td>
        //             </tr>
        //         })}
        //         </tbody>
        //     </table>
        // </div>
        return <Router>
            <Switch>
                <Route path='/posts'>
                    <UserContext.Provider value={this.state.user}>
                        <PostHolder/>
                    </UserContext.Provider>


                </Route>
                <Redirect to='/posts'/>

            </Switch>

        </Router> ;
                };

}


// const posts = [
//     { id: 1, name: 'React',
//         description: 'Best UI library'
//     }, {
//     id: 2,
//         name: 'Node',
//         description: 'Server side JS'
//     }
// ];