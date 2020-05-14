import SearchingBreed from './SearchingBreed.js';
import { debouncing } from '../util/debouncing.js';

export default class SearchingSection {
    constructor({ $target, searchCatsByBreed }) {
        this.searchCatsByBreed = searchCatsByBreed;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();
    }

    render() {
        this.section.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.className = '검색할 고양이 품종을 입력해주세요...';

        const searchBtn = document.createElement('button');
        searchBtn.className = 'search-btn';
        searchBtn.innerText = '검색';

        const breedContainer = document.createElement('div');
        breedContainer.className = 'search-breed';

        searchBox.addEventListener('keyup', debouncing().debounce(() => {
            breedContainer.innerHTML = '';
            if (!searchBox.value) {
                return;
            }
            new SearchingBreed({
                $target: breedContainer,
                data: searchBox.value
            });
        }, 500));
        searchBtn.addEventListener('click', () => this.searchByKeyword(searchBox.value));

        wrapper.appendChild(searchBox);
        wrapper.appendChild(searchBtn);
        this.section.appendChild(wrapper);
        this.section.appendChild(breedContainer);
    }

    searchByKeyword(breedId) {
        if(breedId.length == 0) return;
        
        this.searchCatsByBreed(breedId);
    }
}