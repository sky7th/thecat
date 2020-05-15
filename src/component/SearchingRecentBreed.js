export default class SearchingRecentBreed {
    constructor({ $target }) {
        this.recentSearchBreeds = [];
        this.$container = document.createElement('ul');
        this.$container.className = 'search-recent-breed-container';
        $target.appendChild(this.$container);

        this.render();
    }

    render() {
        this.$container.innerHTML = '';

        this.recentSearchBreeds.forEach(breed => {
            const $item = document.createElement('li');
            $item.className = 'search-recent-breed-item';
            $item.dataset.id = breed.id;
            $item.innerText = breed.name;
            this.$container.appendChild($item);
        }) 
    }

    appendBreed(breedInfo) {
        if (this.recentSearchBreeds.find(breed => breed.id === breedInfo.id)) {
            return;
        }
        if (this.recentSearchBreeds.length === 5) {
            this.recentSearchBreeds.pop();
        }

        this.recentSearchBreeds.unshift(breedInfo);
        this.render();
    }
}