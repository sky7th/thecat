import SearchingBreed from './SearchingBreed.js';
import { debouncing } from '../util/debouncing.js';

export default class SearchingSection {
    constructor({ $target, searchCatsByBreed }) {
        this.searchCatsByBreed = searchCatsByBreed;
        this.page = 0;
        this.$section = document.createElement('section');
        this.$section.className = 'searching-section';

        $target.appendChild(this.$section);

        this.render();
    }

    render() {
        this.$section.innerHTML = '';

        const $wrapper = document.createElement('div');
        $wrapper.className = 'search-box-wrapper';

        const $searchBox = document.createElement('input');
        $searchBox.className = 'search-box';
        $searchBox.placeholder = '검색할 고양이 품종을 입력해주세요...';

        const $breedContainer = document.createElement('div');
        $breedContainer.className = 'search-breed';

        $searchBox.addEventListener('keyup', debouncing().debounce(() => {
            $breedContainer.innerHTML = '';
            if (!$searchBox.value) {
                return;
            }
            new SearchingBreed({
                $target: $breedContainer,
                searchCatsByBreed: this.searchCatsByBreed,
                page: this.page,
                data: $searchBox.value
            });
        }, 500));
        let isEnterCusor = true;
        $searchBox.addEventListener('blur', () => {
            if (!isEnterCusor) {
                $breedContainer.classList.add('hidden');
            }
        });
        $searchBox.addEventListener('focus', () => $breedContainer.classList.remove('hidden'));
        $breedContainer.addEventListener('mouseenter', () => isEnterCusor = true);
        $breedContainer.addEventListener('mouseleave', () => isEnterCusor = false);

        $wrapper.appendChild($searchBox);
        this.$section.appendChild($wrapper);
        this.$section.appendChild($breedContainer);
    }
}