export default class DarkModeButton {
    constructor({ $target }) {
        this.$toggleBtn = document.createElement('button');
        this.$toggleBtn.className = 'dark-mode-toggle-btn';

        this.$toggleBtn.addEventListener('click', () => { this.toggle(); });

        $target.appendChild(this.$toggleBtn);

        this.render();
    }

    render() {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.changeTheme(isDarkMode);
    }

    toggle() {
        const isDarkMode = getComputedStyle(document.documentElement).getPropertyValue('--background') === 'black';
        this.changeTheme(!isDarkMode);
    }
    
    changeTheme(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--background', 'black');
            document.documentElement.style.setProperty('--text-color', 'white');
            this.$toggleBtn.innerText = '밝은 테마로 변경';
        } else {
            document.documentElement.style.setProperty('--background', 'white');
            document.documentElement.style.setProperty('--text-color', 'black');
            this.$toggleBtn.innerText = '어두운 테마로 변경';
        }
    }
}