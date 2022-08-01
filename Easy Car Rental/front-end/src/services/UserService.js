import axios from "../axios";

class UserService {
    fetchUser = async () => {
        const promise = new Promise((resolve, reject)=>{
            axios.get('user')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise;
    }

    searchUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('user', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    postUser = async (data)=>{
        const promise = new Promise((resolve, reject)=>{
            axios.post('user', data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        });

        return await promise;
    }

  update = async (data)=>{
        const promise = new Promise((resolve, reject)=>{
            axios.put('user', data)
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        });

        return await promise;
    }


    /*updateApproval = async (params)=>{
        const promise = new Promise((resolve, reject)=>{
                axios.put('user', {username:{username:"sithum"}})
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        });

        return await promise;
    }*/

}
export default new UserService();
