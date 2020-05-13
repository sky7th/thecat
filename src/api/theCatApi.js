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
    getCatsByBreed: async breedId => {
        try {
            const result = await request(`${API_ENDPOINT}/images/search?limit=20&breed_id=${breedId}`);
            console.log(`${API_ENDPOINT}/images/search?limit=20&breed_id=${breedId}`, result);
            
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