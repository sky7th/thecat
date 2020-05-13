import Card from "./Card.js";

export default class PostSection {
    constructor({ $target }) {
        this.data = [];
        this.section = document.createElement('section');

        $target.appendChild(this.section);

        this.render();
    }

    setState(data) {
        this.data = data;
        this.render();
    }

    render() {
        if(!this.data) return;

        this.section.innerHTML = '';
        
        const cardContainer = document.createElement('ul');
        cardContainer.className = 'card-container';

        this.data.map(item => {
            new Card({
                $target: cardContainer,
                data: item
            });
        });

        this.section.appendChild(cardContainer);
    }
}