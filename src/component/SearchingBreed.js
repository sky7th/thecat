import { api } from '../api/theCatAPI.js';

export default class SearchingBreed {
    constructor({ $target, data }) {
        this.searchedBreeds = [];
        this.data = data;
        this.container = document.createElement('ul');
        this.container.className = 'search-breed-container';

        $target.appendChild(this.container);

        this.render();
    }

    render() {
        if (!this.searchedBreeds) {
            this.container.classList.add('hidden');
            return;
        }
        this.searchCatBreedsByName(this.data);
    }

    async searchCatBreedsByName(keyword) {
        if (!keyword) {
            return;
        }
        const response = await api.getCatBreedsByName(keyword);
        console.log(response);
        
        if(response.isError || response.data.length === 0){
            return;
        }
        const breeds = response.data;

        for (let i = 0; i < 5; i++) {
            const breed = breeds[i];
            const row = document.createElement('li');
            row.className = 'search-breed-item';
            row.dataset.id = breed['id'];
            row.innerText = breed['name'];
            this.container.appendChild(row);
        }
    }
}