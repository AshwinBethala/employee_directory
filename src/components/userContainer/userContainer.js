import React, {useEffect, useState, Component} from 'react'
import api from "../../utilities/api"

class UserContainer extends Component {
    //This is where we put in the API
    state = {
        users: [{}]
    }



    

   componentDidMount(){
        api.fetchUsers().then(res => {
            this.setState({users: res.data.results})
        })
        console.log(this.state.users)
      };

      render (){
    return (
        <div>
            <table>
                <th>

                </th>

                {/* {user.map(({name, width}) => {
                    return(
                        <tr>
                            <td>
                                {name.first}
                            </td>
                        </tr>
                    )
                })} */}
            </table>
        </div>
    )
}
}
export default UserContainer
