import SearchingBreed from './SearchingBreed.js';
import SearchingRecentBreed from './SearchingRecentBreed.js';
import { debouncing } from '../util/debouncing.js';

export default class SearchingSection {
    constructor({ $target, recentBreeds, searchCatsByBreed }) {
        this.searchCatsByBreed = searchCatsByBreed;
        this.recentBreeds = recentBreeds;
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

        const $recentSearchBreedContainer = document.createElement('div');
        $recentSearchBreedContainer.className = 'search-recent-breed';

        const searchingRecentBreed = new SearchingRecentBreed({
            $target: $recentSearchBreedContainer,
            recentBreeds: this.recentBreeds
        });

        $searchBox.addEventListener('keyup', debouncing().debounce(() => {
            $breedContainer.innerHTML = '';
            if (!$searchBox.value) {
                return;
            }
            new SearchingBreed({
                $target: $breedContainer,
                data: $searchBox.value,
                searchCatsByBreed: this.searchCatsByBreed,
                appendRecentBreed: breedInfo => { searchingRecentBreed.appendBreed(breedInfo); }
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
        $recentSearchBreedContainer.addEventListener('click', () => { 
            const recentBreedItem = event.path.find(comp => comp.className == 'search-recent-breed-item');
            if (recentBreedItem) {
                this.searchCatsByBreed(recentBreedItem.dataset.id);
            }
        })

        $wrapper.appendChild($searchBox);
        this.$section.appendChild($wrapper);
        this.$section.appendChild($recentSearchBreedContainer);
        this.$section.appendChild($breedContainer);
    }
}