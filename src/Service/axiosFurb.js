import axios from "axios"

const AXIOS_BASE_REST_API_URL = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro"

class AxiosFurb {
    getById(id) { 
        return axios.get(AXIOS_BASE_REST_API_URL + "/" + id)
    }

    deleteById(id) { 
        return axios.delete(AXIOS_BASE_REST_API_URL + "/" + id)
    }

    putById(data) { 
        return axios.put(AXIOS_BASE_REST_API_URL, data);
    }
}

export default new AxiosFurb();