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

        searchBox.addEventListener('keyup', event => {
            if(event.keyCode == 13){
                this.searchByKeyword(searchBox.value);
            }
        });
        searchBtn.addEventListener('click', () => this.searchByKeyword(searchBox.value));

        wrapper.appendChild(searchBox);
        wrapper.appendChild(searchBtn);
        this.section.appendChild(wrapper);
    }

    searchByKeyword(breedId) {
        if(breedId.length == 0) return;
        
        this.searchCatsByBreed(breedId);
    }
}