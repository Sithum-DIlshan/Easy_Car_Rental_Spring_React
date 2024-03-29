import axios from "../axios";

class AdminService {
    fetchAdmin = async () => {
        const promise = new Promise((resolve, reject)=>{
            axios.get('admin')
                .then((res)=>{
                    return resolve(res)
                })
                .catch((err)=>{
                    return resolve(err)
                })
        })

        return await promise;
    }

}
export default new AdminService();
