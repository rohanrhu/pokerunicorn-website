<script>
    import { browser } from "$app/environment";
	import Footer from "../components/footer.svelte";
    import Header from "../components/header.svelte";

    let page_scroll_y = 0;

    let screenshots = {
        length: 3,
        rect: browser ? new DOMRectReadOnly(): null,
        width: 0,
        height: 0,
        pointer: {
            x: 0,
            y: 0
        },
        ratio: 0,
        disappearing_ratio: 0,
        tx_delay: 0.5,
        tx_delay_clear_timeout: 0,
        items: [
            {
                image: "/images/screenshots/mac/client-one.png",
                name: "PokerUnicorn Player One",
                rotation: -10,
                scale: 0.75,
                x: 0,
                y: 0
            },
            {
                image: "/images/screenshots/mac/lobby.png",
                name: "PokerUnicorn Lounge",
                rotation: 0,
                scale: 1,
                x: 0,
                y: 0
            },
            {
                image: "/images/screenshots/mac/client-two.png",
                name: "PokerUnicorn Player Two",
                rotation: 10,
                scale: 0.75,
                x: 0,
                y: 0
            }
        ]
    };

    $: screenshots.ratio = screenshots.pointer.x / screenshots.width;
</script>

<svelte:window
    on:scroll={(e) => {
        screenshots.disappearing_ratio = e.currentTarget.scrollY / (screenshots.rect ? screenshots.rect.top: 1);
        
    }}
    bind:scrollY={page_scroll_y}
/>

<div
    class="Landing"
    bind:clientWidth={screenshots.width}
    bind:clientHeight={screenshots.height}
    on:mousemove={(e) => {
        if (browser) {
            screenshots.tx_delay = 0.033;
    
            clearTimeout(screenshots.tx_delay_clear_timeout);
            screenshots.tx_delay_clear_timeout = window.setTimeout(() => {
                screenshots.tx_delay = 0.5;
            }, 100);
        }
        
        screenshots.pointer.x = e.clientX;
        screenshots.pointer.y = e.clientY;

        for (let i = 0; i < screenshots.items.length; i++) {
            let item = screenshots.items[i];
            item.rotation = (i - 1) * 10 + (screenshots.pointer.x - screenshots.width / 2) / 100;
            item.y = 100 * screenshots.disappearing_ratio;
        }
    }}
    role="presentation"
>
    <div class="Landing_top DelayedAppear__250ms">
        <Header current_page="home" />
        <div
            class="Landing_top_screenshots"
            bind:contentRect={screenshots.rect}
        >
            <div class="Landing_top_screenshots_items">
                {#each screenshots.items as item, i}
                    <div class="Landing_top_screenshots_items_item">
                        <div
                            class="Landing_top_screenshots_items_item_image"
                            style="
                                transition: all {screenshots.tx_delay}s;
                                transform: rotate3d(0, 1, 0, {item.rotation}deg) scale({item.scale}) translateX({item.x}px) translateY({6 * (screenshots.disappearing_ratio * ((i % 2 != 0) ? 5: 1))}px);
                                opacity: {1 - screenshots.disappearing_ratio / 7};
                            "
                        >
                            <img
                                class="Landing_top_screenshots_items_item_image_img"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div class="Landing_features DelayedAppear__500ms">
        <div class="Landing_features_topWaves">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="Landing_features_bottomWaves">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="Landing_features_items">
            <div class="Landing_features_items_item">
                <div class="Landing_features_items_item_image">
                    <img class="Landing_features_items_item_image_img" src="./images/osi.png" alt="" />
                </div>
                <div class="Landing_features_items_item_title">
                    Open Source Infrastructure
                </div>
                <div class="Landing_features_items_item_desc">
                    PokerUnicorn is a whole open source infrastructure for serving poker games.
                </div>
            </div>
            <div class="Landing_features_items_item">
                <div class="Landing_features_items_item_image">
                    <img class="Landing_features_items_item_image_img" src="./images/gazelle.svg" alt="" />
                </div>
                <div class="Landing_features_items_item_title">
                    Fast, Secure and Easy
                </div>
                <div class="Landing_features_items_item_desc">
                    It is focused on being fast and secure. It is easy to use and easy to deploy and maintain. Everything is Dockerized.
                </div>
            </div>
            <div class="Landing_features_items_item">
                <div class="Landing_features_items_item_image">
                    <img class="Landing_features_items_item_image_img" src="./images/community.svg" alt="" />
                </div>
                <div class="Landing_features_items_item_title">
                    Community Driven
                </div>
                <div class="Landing_features_items_item_desc">
                    It is a community driven project. We are always looking for contributors and donations. Donations will be used to fund the development of PokerUnicorn.
                </div>
            </div>
            <div class="Landing_features_items_item">
                <div class="Landing_features_items_item_image">
                    <img class="Landing_features_items_item_image_img" src="./images/monero.png" alt="" />
                </div>
                <div class="Landing_features_items_item_title">
                    Play with Monero
                </div>
                <div class="Landing_features_items_item_desc">
                    Play poker with Monero, the leading privacy coin.
                </div>
            </div>
        </div>
    </div>
    <div class="Landing_sections DelayedAppear__500ms">
        <div class="Landing_sections_section Landing_sections_section__tripleImages Landing_sections_section__multipleGames DelayedAppear__750ms">
            <div class="Landing_sections_section_topWaves">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="Landing_sections_section_bottomWaves">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="Landing_sections_section_content">
                <div class="Landing_sections_section_left">
                    <div class="Landing_sections_section__tripleImages_images">
                        <div class="Landing_sections_section__tripleImages_images_image" style="right: 110px; width: 300px; top: 100px;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/mac/lobby-simultaneous.png" alt="" />
                        </div>
                        <div class="Landing_sections_section__tripleImages_images_image" style="width: 300px; left: -90px; right: auto; top: 0px; bottom: auto;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/mac/game-one.png" alt="" />
                        </div>
                        <div class="Landing_sections_section__tripleImages_images_image" style="width: 300px; right: -40px; bottom: -500px; top: auto;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/mac/game-two.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="Landing_sections_section_right" style="">
                    <div class="Landing_sections_section_explanation">
                        <div class="Landing_sections_section_explanation_title">
                            Play Multiple Games Simultaneously
                        </div>
                        <div class="Landing_sections_section_explanation_desc">
                            Play multiple games simultaneously. You can play as many games as you want at the same time. You can also spectate other games.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Landing_sections_section Landing_sections_section__tripleImages Landing_sections_section_multiplePlatforms Landing_sections_section__tripleImages__reversed DelayedAppear__1000ms">
            <div class="Landing_sections_section_topWaves">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="Landing_sections_section_bottomWaves">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="Landing_sections_section_content">
                <div class="Landing_sections_section_right" style="">
                    <div class="Landing_sections_section_explanation">
                        <div class="Landing_sections_section_explanation_title">
                            Multiple Platforms
                        </div>
                        <div class="Landing_sections_section_explanation_desc">
                            PokerUnicorn client can be built to many platforms. Currently it supports <span class="highlight__light">Windows</span>, <span class="highlight__light">macOS</span>, <span class="highlight__light">Linux</span> and Web.
                        </div>
                    </div>
                </div>
                <div class="Landing_sections_section_left">
                    <div class="Landing_sections_section__tripleImages_images">
                        <div class="Landing_sections_section__tripleImages_images_image" style="left: 110px; width: 300px; top: 100px;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/mac/lobby.png" alt="" />
                        </div>
                        <div class="Landing_sections_section__tripleImages_images_image" style="width: 300px; right: -90px; left: auto; top: 0px; bottom: auto;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/web/signup-safari.png" alt="" />
                        </div>
                        <div class="Landing_sections_section__tripleImages_images_image" style="width: 300px; left: -40px; bottom: -500px; top: auto;">
                            <img class="Landing_sections_section__tripleImages_images_image_img" src="./images/screenshots/web/login-chrome.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer />

<style>
    .Landing {
        min-height: calc(100vh - 300px);
        margin-bottom: 100px;
    }

    .Landing_top {
        position: relative;
        color: white;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        z-index: 2000;
    }

    .Landing_top_screenshots {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0px;
    }

    .Landing_top_screenshots_items {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Landing_top_screenshots_items_item {
        display: flex;
        align-items: center;
        justify-content: center;
        perspective: 300px;
        opacity: 0;
    }
    
    .Landing_top_screenshots_items_item_image {
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 30px 0px rgba(26, 2, 81, 0.5);
        border-radius: 5px;
    }

    .Landing_top_screenshots_items_item_image_img {
        width: 400px;
        display: block;
        margin: auto;
    }

    .Landing_top_screenshots_items .Landing_top_screenshots_items_item:nth-of-type(1) {
        animation: AnimDelayedAppear 500ms forwards;
    }

    .Landing_top_screenshots_items .Landing_top_screenshots_items_item:nth-of-type(2) {
        animation: AnimDelayedAppear 750ms forwards;
    }

    .Landing_top_screenshots_items .Landing_top_screenshots_items_item:nth-of-type(3) {
        animation: AnimDelayedAppear 1000ms forwards;
    }

    .Landing_features {
        background-color: white;
        min-height: 400px;
        position: relative;
        color: black;
    }

    .Landing_features_topWaves {
        position: absolute;
        top: -110px;
        left: 0px;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .Landing_features_bottomWaves {
        position: absolute;
        bottom: -110px;
        left: 0px;
        width: 100%;
        height: 200px;
        overflow: hidden;
        transform: rotate(180deg);
    }

    .Landing_features_items {
        display: flex;
        align-items: start;
        justify-content: space-evenly;
        padding: 50px 0px;
        position: relative;
    }

    .Landing_features_items_item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px;
        border-radius: 5px;
        box-sizing: border-box;
        flex-direction: column;
        justify-items: center;
        text-align: center;
        width: 290px;
        line-height: 24px;
    }
    
    .Landing_features_items_item_image {
        margin-bottom: 20px;
    }

    .Landing_features_items_item_image_img {
        height: 100px;
    }

    .Landing_features_items_item_title {
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 20px;
        background-image: linear-gradient(to left, #553c9a, #b393d3);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
    
    .Landing_features_items_item_desc {

    }
    
    .wave {
        background: white;
        border-radius: 10000% 10000% 0 0;
        position: absolute;
        width: 200%;
        height: 12em;
        animation: wave 10s -3s linear infinite;
        transform: translate3d(0, 0, 0);
        bottom: 0px;
        left: 0px;
        z-index: -1;
    }

    .wave:nth-of-type(0) {
        opacity: 1;
    }
    .wave:nth-of-type(1) {
        opacity: 0.75;
    }
    .wave:nth-of-type(2) {
        opacity: 0.5;
    }

    .wave:nth-of-type(2) {
        bottom: -1.25em;
        animation: wave 18s linear reverse infinite;
        opacity: 0.8;
    }

    .wave:nth-of-type(3) {
        bottom: -2.5em;
        animation: wave 20s -1s reverse infinite;
        opacity: 0.9;
    }

    .Landing_sections {
        margin-top: 200px;
        box-sizing: border-box;
    }
    
    .Landing_sections_section {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 400px;
        box-sizing: border-box;
        margin-top: 150px;
        color: black;
    }

    .Landing_sections_section_content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
    
    .Landing_sections_section_left {
        width: 500px;
        height: 500px;
    }

    .Landing_sections_section_right {
        position: relative;
        margin-left: 100px;
    }

    .Landing_sections_section_explanation {
        max-width: 400px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
    }

    .Landing_sections_section_explanation_title {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
        background-image: linear-gradient(to left, #553c9a, #b393d3);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 38px;
    }

    .Landing_sections_section_explanation_desc {
        line-height: 24px;
    }

    .Landing_sections_section_topWaves {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .Landing_sections_section_bottomWaves {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 200px;
        overflow: hidden;
        transform: rotate(180deg);
    }

    .Landing_sections_section__tripleImages_images {
        position: relative;
        z-index: 1000;
    }

    .Landing_sections_section__tripleImages_images_image {
        position: absolute;
        display: block;
        transition: all 0.5s;
        width: 200px;
        perspective: 300px;
    }

    .Landing_sections_section__tripleImages_images_image_img {
        width: 100%;
        height: 100%;
        transform: rotate3d(0, 1, 0, 13.86deg) scale(0.75) translateX(0px) translateY(0px);
    }

    .Landing_sections_section__tripleImages__reversed {

    }

    .Landing_sections_section__tripleImages__reversed .Landing_sections_section_right {
        margin-left: 0px;
        margin-right: 100px;
    }

    .Landing_sections_section__tripleImages__reversed .Landing_sections_section__tripleImages_images_image_img {
        transform: rotate3d(0, 1, 0, -13.86deg) scale(0.75) translateX(0px) translateY(0px);
    }

    @keyframes wave {
        2% {
            transform: translateX(1);
        }

        25% {
            transform: translateX(-25%);
        }

        50% {
            transform: translateX(-50%);
        }

        75% {
            transform: translateX(-25%);
        }

        100% {
            transform: translateX(1);
        }
    }
</style>