/* eslint-disable */
import React, {useState, useEffect} from 'react';
import placeholderImage from 'assets/placeholderImage.png';

import {Image} from './styled';

interface ILazyImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

function LazyImage({src, alt, ...props}: ILazyImage) {
    const [imageSrc, setImageSrc] = useState<any>(placeholderImage);
    const [imageRef, setImageRef] = useState<any>(null);

    useEffect(() => {
        let observer = {
            observe(imageRef: any) {},
            unobserve(imageRef: any) {}
        };
        let didCancel = false;

        if (imageRef && imageSrc === placeholderImage) {
            if (window.IntersectionObserver) {
                observer = new window.IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                setImageSrc(src);
                            }
                        });
                    },
                    {threshold: 0.01, rootMargin: '75%'}
                );
                observer.observe(imageRef);
            } else {
                setImageSrc(src);
            }
        }
        return () => {
            didCancel = true;
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef);
            }
        };
    }, [imageRef, imageSrc, src]);

    return <Image ref={setImageRef} src={imageSrc} alt={alt} {...props} data-testid="lazy-image"/>;
}

export default LazyImage;
