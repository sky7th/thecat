import Card from "./Card.js";
import { scrollFetch } from '../util/scrollFetch.js';
import { lazyLoad } from '../util/lazyLoad.js';
import { api } from '../api/theCatAPI.js';
import { setItem } from '../util/localStorage.js';

export default class PostSection {
    constructor({ $target, recentPosts, showModal }) {
        this.showModal = showModal;
        this.state = {
            posts: recentPosts || [],
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
        const response = await api.getCatsByBreed(breedId, 0);
        if (!response.isError) {
            const newPosts = response.data;
            this.state.breedId = breedId;
            this.state.page = 1;
            this.setPosts(newPosts);
            setItem('posts', this.state.posts);
        } else {
            /* TODO: 에러 페이지 */
        }
    }

    async searchCatsMoreScroll(breedId, page) {
        const response = await api.getCatsByBreed(breedId, page);
        if (!response.isError) {
            const newPosts = response.data;
            this.state.posts = [...this.state.posts, ...newPosts];
            this.appendCardToCardContainer(newPosts);
            this.state.page += 1;
            setItem('posts', this.state.posts);
        }
    }

    setPosts(posts) {
        this.state.posts = posts;
        this.render();
        lazyLoad();
    }
}