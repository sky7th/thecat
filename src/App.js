import SearchingSection from './component/SearchingSection.js';
import PostSection from './component/PostSection.js';
import DetailModal from './component/DetailModal.js';

import { getItem } from './util/localStorage.js';

export default class App {
    constructor($target) {
        const recentPosts = getItem('posts');

        const searchingSection = new SearchingSection({
            $target,
            searchCatsByBreed: breedId => {
                postSection.searchCatsByBreed(breedId);
            }
        });

        const postSection = new PostSection({ 
            $target,
            recentPosts,
            showModal: data => {
                detailModal.setState(data);
            }
        });

        const detailModal = new DetailModal({
            $target
        });
    }


}