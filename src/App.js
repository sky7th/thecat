import SearchingSection from './component/SearchingSection.js';
import PostSection from './component/PostSection.js';

import { api } from './api/theCatAPI.js';

export default class App {
    constructor($target) {
        const searchingSection = new SearchingSection({
            $target,
            searchCatsByBreed: async breedId => {
                const response = await api.getCatsByBreed(breedId);
                if(!response.isError){
                    postSection.setState(response.data);
                } else {
                    /* TODO: 에러 페이지 */
                }
            }
        });

        const postSection = new PostSection({ $target });
    }


}