import axios from "../axios";

class CarService {
    saveCar = async (data) => {
        const promise = new Promise((resolve, reject)=>{
            axios.post('car', data)
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
export default new CarService();
