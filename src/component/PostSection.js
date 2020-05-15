import Card from "./Card.js";
import { scrollFetch } from '../util/scrollFetch.js';
import { lazyLoad } from '../util/lazyLoad.js';
import { api } from '../api/theCatAPI.js';
import { setItem } from '../util/localStorage.js';
import Loading from './Loading.js';

export default class PostSection {
    constructor({ $target, recentPostState, showModal }) {
        this.showModal = showModal;
        this.state = recentPostState || {
            posts: [],
            page: 1,
            breedId: ''
        }
        this.section = document.createElement('section');
        this.section.className = 'post-section';

        $target.appendChild(this.section);

        const loading = new Loading({
            $target,
            className: 'body-spinner'
        });
        this.loading = loading;

        this.render();
        lazyLoad();
        scrollFetch((breedId, page) => { this.searchCatsMoreScroll(breedId, page) }, this.state);
    }

    render() {
        if(!this.state.posts) return;

        this.section.innerHTML = '';
        
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        this.appendCardToCardContainer(this.state.posts, cardContainer);

        cardContainer.addEventListener('click', event => {
            const card = event.path.find(comp => comp.className == 'cat-card');
            if (card) {
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
        const result = this.state.posts.find(cat => cat.id == id);
        return result;
    }

    async searchCatsByBreed(breedId) {
        this.loading.toggleSpinner();
        const response = await api.getCatsByBreed(breedId, 0);
        if (!response.isError) {
            const newPosts = response.data;
            this.state.breedId = breedId;
            this.state.page = 1;
            this.setPosts(newPosts);
            setItem('postState', this.state);
            this.loading.toggleSpinner();
        } else {
            /* TODO: 에러 페이지 */
        }
    }

    async searchCatsMoreScroll(breedId, page) {
        this.loading.toggleSpinner();
        const response = await api.getCatsByBreed(breedId, page);
        if (!response.isError) {
            const newPosts = response.data;
            this.state.posts = [...this.state.posts, ...newPosts];
            this.appendCardToCardContainer(newPosts);
            this.state.page += 1;
            setItem('postState', this.state);
            this.loading.toggleSpinner();
        }
    }

    setPosts(posts) {
        this.state.posts = posts;
        this.render();
        lazyLoad();
    }
}