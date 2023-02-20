interface SakuraOptions {
    parentElementClass: string;
    blowAnimations: string[];
    className: string;
    fallSpeed: number;
    maxSize: number;
    minSize: number;
    newOn: number;
    swayAnimations: string[];
}
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const prefixedEvent = (element: Element, type: string, callback: EventListenerOrEventListenerObject) => {
    const prefixes = ['moz', 'ms', 'o', 'webkit', ''];
    const prefCount = prefixes.length;

    for (let i = 0; i < prefCount; i++) {
        if (!prefixes[i]) {
            type = type.toLowerCase();
        }

        element.addEventListener(prefixes[i] + type, callback, false);
    }
}
const defaultOptions: SakuraOptions = {
    parentElementClass: '',
    blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'],
    className: 'sakura',
    fallSpeed: 3,
    maxSize: 14,
    minSize: 9,
    newOn: 300,
    swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
};



export const createSakura = (options?: Partial<SakuraOptions>) => {
    const mergedOptions = { ...defaultOptions, ...options };
    let documentHeight = document.documentElement.scrollHeight;
    let documentWidth = document.documentElement.scrollWidth;
    const sakura = document.createElement('div');
    sakura.className = mergedOptions.className;

    // Set the overflow-x CSS property on the body to prevent horizontal scrollbars.
    document.body.style.overflowX = 'hidden';

    // Function that inserts new petals into the document.
    const petalCreator = () => {
        setTimeout(() => {
            requestAnimationFrame(petalCreator);
        }, mergedOptions.newOn);

        // Get one random animation of each type and randomize fall time of the petals.
        const blowAnimation = mergedOptions.blowAnimations[getRandomInt(0, mergedOptions.blowAnimations.length - 1)];
        const swayAnimation = mergedOptions.swayAnimations[getRandomInt(0, mergedOptions.blowAnimations.length - 1)];
        const fallTime = (Math.round(documentHeight * 0.007) + Math.random() * 5) * mergedOptions.fallSpeed;

        const animations = 'fall ' + fallTime + 's linear 0s 1' + ', ' +
            blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)) + 's linear 0s infinite' + ', ' +
            swayAnimation + ' ' + getRandomInt(2, 4) + 's linear 0s infinite';
        const petal = sakura.cloneNode() as HTMLDivElement;
        const size = getRandomInt(mergedOptions.minSize, mergedOptions.maxSize);
        const startPosLeft = Math.random() * documentWidth - 100;
        const startPosTop = -((Math.random() * 20) + 15);

        // Apply Event Listener to remove petals that reach the bottom of the page.
        petal.addEventListener('animationend', () => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        });

        // Apply Event Listener to remove petals that finish their horizontal float animation.
        petal.addEventListener('animationiteration', (ev: AnimationEvent) => {
            if (mergedOptions.blowAnimations.includes(ev.animationName)) {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }
        });

        petal.style.cssText = `
        -webkit-animation: ${animations};
        -o-animation: ${animations};
        -ms-animation: ${animations};
        -moz-animation: ${animations};
        animation: ${animations};
        height: ${size}px;
        left: ${startPosLeft}px;
        margin-top: ${startPosTop}px;
        width: ${size}px;
      `;
        document.body.appendChild(petal);
    };

    // Recalculate documentHeight and documentWidth on browser resize.
    window.addEventListener('resize', () => {
        documentHeight = document.documentElement.scrollHeight;
        documentWidth = document.documentElement.scrollWidth;
    });

    // Finally: Start adding petals.
    requestAnimationFrame(petalCreator);
};