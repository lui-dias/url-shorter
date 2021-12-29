function onVisible(element: HTMLElement, callback: () => void) {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    }

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback()
                obs.unobserve(element)
            }
        })
    }, options)

    obs.observe(element)
}

function addAnimation(e: HTMLElement) {
    e.style.opacity = '0'

    onVisible(e, () => {
        e.classList.add('animation-appear')
        e.style.opacity = '1'

        setTimeout(() => {
            e.classList.remove('animation-appear')
        }, 2000)
    })
}

export function lazyAppear() {
    document
        .querySelectorAll('.lazyappear')
        .forEach(i => addAnimation(i as HTMLElement))
}
