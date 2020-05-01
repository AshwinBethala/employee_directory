import axios from "axios"
export default {
    fetchUsers: function (){return axios.get("https://randomuser.me/api/?results=10&nat=us")}
}