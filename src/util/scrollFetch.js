import { throttling } from './throttling.js';

const throttler = throttling();

function scrollFetch(fetchData, state) {
    window.addEventListener('scroll', () => {
        throttler.throttle(() => {
            if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
            fetchData(state.breedId, state.page);
        }, 700);
    });
}

function getScrollTop() {
    if (window.pageYOffset === undefined) {
        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    return window.pageYOffset;
}

function getDocumentHeight() {
    const $body = document.body;
    const $html = document.documentElement;
    
    return Math.max(
        $body.scrollHeight, $body.offsetHeight,
        $html.clientHeight, $html.scrollHeight, $html.offsetHeight
    );
}

export { scrollFetch };