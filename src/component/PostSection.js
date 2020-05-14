import Card from "./Card.js";
import { scrollFetch } from '../util/scrollFetch.js';
import { lazyLoad } from '../util/lazyLoad.js';

export default class PostSection {
    constructor({ $target, searchCatsMoreScroll, showModal }) {
        this.searchCatsMoreScroll = searchCatsMoreScroll;
        this.showModal = showModal;
        this.state = {
            data: [],
            page: 1,
            breedId: ''
        }
        this.section = document.createElement('section');
        this.section.className = 'post-section';

        $target.appendChild(this.section);

        this.render();
        lazyLoad();
        scrollFetch(this.searchCatsMoreScroll, this.state);
    }

    setState(data) {
        this.state.data = data;
        this.render();
        lazyLoad();
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
        
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        this.appendCardToCardContainer(this.state.data, cardContainer);

        cardContainer.addEventListener('click', e => {
            const path = e.path;
            const card = path.find(comp => comp.className == 'cat-card');
            
            if(card){
                const id = card.dataset.id;
                const catInfo = this.findCatById(id);
                
                this.showModal(catInfo);
            }
        });

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
        lazyLoad();
    }

    findCatById(id) {
        const result = this.state.data.find(cat => cat.id == id);
        return result;
    }
}