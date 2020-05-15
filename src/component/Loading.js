export default class Loading {
    constructor({ $target, className }) {
        this.className = className;
        this.spinnerWrapper = document.createElement('div');
        this.spinnerWrapper.className = 'spinner-wrapper';
        this.spinnerWrapper.classList.add(this.className);
        this.spinnerWrapper.classList.add('hidden');

        $target.appendChild(this.spinnerWrapper);

        this.render();
    }

    render() {
        const spinnerImage = document.createElement('img');
        spinnerImage.className = 'spinner-image';
        spinnerImage.src = 'src/img/spinner.gif';
        this.spinnerWrapper.appendChild(spinnerImage);
    }

    toggleSpinner() {
        const spinner = document.querySelector(`.${this.className}`);
        spinner.classList.toggle('hidden');
    }
}