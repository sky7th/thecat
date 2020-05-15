import SearchingSection from './component/SearchingSection.js';
import PostSection from './component/PostSection.js';
import DetailModal from './component/DetailModal.js';
import DarkModeButton from './component/DarkModeButton.js';

import { getItem } from './util/localStorage.js';

export default class App {
    constructor($target) {
        const recentPostState = getItem('postState');
        const recentBreeds = getItem('recentBreeds');

        const searchingSection = new SearchingSection({
            $target,
            recentBreeds,
            searchCatsByBreed: breedId => {
                postSection.searchCatsByBreed(breedId);
            }
        });

        const postSection = new PostSection({ 
            $target,
            recentPostState,
            showModal: data => {
                detailModal.setState(data);
            }
        });

        const detailModal = new DetailModal({
            $target
        });

        new DarkModeButton({ $target })
    }
}