import React from "react";
import "./IconLink.css";

const IconGithub = (props) => {
    return (
        <a className="link__icon" href={props.URL} target="opener">
            <svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <title>Github</title>
                <path d="M15 0C6.7125 0 0 6.65722 0 14.8682C0 21.4386 4.2975 27.0105 10.2562 28.9743C11.0062 29.1143 11.2812 28.6546 11.2812 28.2594C11.2812 27.9063 11.2688 26.9708 11.2625 25.7318C7.09 26.6289 6.21 23.737 6.21 23.737C5.5275 22.021 4.54125 21.5625 4.54125 21.5625C3.1825 20.6407 4.64625 20.6593 4.64625 20.6593C6.1525 20.7634 6.94375 22.1907 6.94375 22.1907C8.28125 24.4643 10.455 23.8076 11.3125 23.4273C11.4475 22.4658 11.8338 21.8103 12.2625 21.4386C8.93125 21.0669 5.43 19.7883 5.43 14.0913C5.43 12.4682 6.01125 11.1424 6.97375 10.1017C6.805 9.72625 6.29875 8.21465 7.105 6.16657C7.105 6.16657 8.36125 5.7676 11.23 7.69055C12.43 7.35974 13.705 7.19619 14.98 7.18875C16.255 7.19619 17.53 7.35974 18.73 7.69055C21.58 5.7676 22.8362 6.16657 22.8362 6.16657C23.6425 8.21465 23.1362 9.72625 22.9862 10.1017C23.9425 11.1424 24.5237 12.4682 24.5237 14.0913C24.5237 19.8031 21.0175 21.0607 17.68 21.4262C18.205 21.8723 18.6925 22.7842 18.6925 24.1769C18.6925 26.1667 18.6738 27.765 18.6738 28.2483C18.6738 28.6385 18.9362 29.1032 19.705 28.9545C25.7063 27.0043 30 21.4287 30 14.8682C30 6.65722 23.2837 0 15 0" fill="currentColor" />
            </svg>
        </a>
    )
}

export default IconGithub;