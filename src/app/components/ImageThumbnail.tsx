import * as React from 'react';

export interface IImageThumbnail {
    src: string;
    title: string;
    width?: string;
    className?: string;
}

const ImageThumbnail: React.SFC<IImageThumbnail> = (props: IImageThumbnail) => (
    <img title={props.title || ''} width='38px' src={props.src} className='rounded-circle' alt={props.title.substr(0, 1)} {...props} />
);

export default ImageThumbnail;
