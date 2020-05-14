const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async url => {
    try {
        const response = await fetch(url);
        const resultData = await response.json();
        if (response.ok) {
            return resultData;
        } else {
            throw resultData;
        }
    } catch(e) {
        throw {
            message: e.message,
            status: e.status
        }
    }
}

const api = {
    getCatBreedsByName: async keyword => {
        try {
            const result = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
            
            return {
                isError: false,
                data: result
            };
        } catch(e) {
            return {
                isError: true,
                data: e
            };
        }
    },
    getCatsByBreed: async (breedId, page) => {
        try {
            let url = `${API_ENDPOINT}/images/search?limit=5&breed_id=${breedId}`
            if (page) {
                result += `&page=${page}`;
            }
            const result = await request(url);
            
            return {
                isError: false,
                data: result
            };
        } catch(e) {
            return {
                isError: true,
                data: e
            };
        }
    }
};

export { api };