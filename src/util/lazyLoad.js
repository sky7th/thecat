export function lazyLoad() {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
        const options = {
            root: null,
            rootMargin: '0px 0px 200px 0px',
            threshold: 0
        }
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        }, options);
    
        lazyImages.forEach((lazyImage) => {
            lazyImageObserver.observe(lazyImage);
        });
    }
}