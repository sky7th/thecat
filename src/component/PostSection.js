import Card from "./Card.js";
import { scrollFetch } from '../util/scrollFetch.js';

export default class PostSection {
    constructor({ $target, searchCatsMoreScroll }) {
        this.searchCatsMoreScroll = searchCatsMoreScroll;
        this.state = {
            data: [],
            page: 1,
            breedId: ''
        }
        this.section = document.createElement('section');

        $target.appendChild(this.section);

        this.render();
        scrollFetch(this.searchCatsMoreScroll, this.state);
    }

    setState(data) {
        this.state.data = data;
        this.render();
    }

    getData() {
        return this.state.data;
    }

    plusPage() {
        this.state.page += 1;
    }

    resetPage() {
        this.state.page = 1;
    }

    setBreedId(breedId) {
        this.state.breedId = breedId;
    }

    render() {
        if(!this.state.data) return;

        this.section.innerHTML = '';
        
        const cardContainer = document.createElement('ul');
        cardContainer.className = 'card-container';

        this.appendCardToCardContainer(this.state.data, cardContainer);

        this.section.appendChild(cardContainer);
    }

    appendCardToCardContainer(items, container) {
        const cardContainer = container || document.querySelector('.card-container');
        items.map(item => {
            new Card({
                $target: cardContainer,
                data: item
            });
        });
    }
}