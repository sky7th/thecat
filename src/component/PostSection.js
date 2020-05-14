import Card from "./Card.js";
import { scrollFetch } from '../util/scrollFetch.js';

export default class PostSection {
    constructor({ $target, searchCatsMoreScroll }) {
        this.searchCatsMoreScroll = searchCatsMoreScroll;
        this.data = [];
        this.page = 0;
        this.breedId = '';
        this.section = document.createElement('section');

        $target.appendChild(this.section);

        this.render();
        scrollFetch(this.searchCatsMoreScroll, this.breedId, this.page);
    }

    setState(data) {
        this.data = data;
        this.render();
    }

    getData() {
        return this.data;
    }

    plusPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 0;
    }

    setBreedId(breedId) {
        this.breedId = breedId;
    }

    render() {
        if(!this.data) return;

        this.section.innerHTML = '';
        
        const cardContainer = document.createElement('ul');
        cardContainer.className = 'card-container';

        this.data.map(item => {
            new Card({
                $target: cardContainer,
                data: item
            });
        });

        this.section.appendChild(cardContainer);
    }
}