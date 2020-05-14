import SearchingSection from './component/SearchingSection.js';
import PostSection from './component/PostSection.js';
import DetailModal from './component/DetailModal.js';

import { api } from './api/theCatAPI.js';
import { setItem, getItem } from './util/localStorage.js';

export default class App {
    constructor($target) {
        const recentPosts = getItem('posts');

        const searchingSection = new SearchingSection({
            $target,
            searchCatsByBreed: async (breedId, page) => {
                const response = await api.getCatsByBreed(breedId, page);
                if (!response.isError){
                    postSection.setBreedId(breedId);
                    postSection.resetPage();
                    postSection.setState(response.data);
                    setItem('posts', postSection.getData());
                } else {
                    /* TODO: 에러 페이지 */
                }
            }
        });

        const postSection = new PostSection({ 
            $target,
            recentPosts,
            searchCatsMoreScroll: async (breedId, page) => {
                const response = await api.getCatsByBreed(breedId, page);
                if (!response.isError){
                    postSection.setData([...postSection.getData(), ...response.data]);
                    postSection.appendCardToCardContainer(response.data);
                    postSection.plusPage();
                    setItem('posts', postSection.getData());
                }
            },
            showModal: data => {
                detailModal.setState(data);
            }
        });

        const detailModal = new DetailModal({
            $target
        });
    }


}