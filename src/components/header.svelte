<script lang="ts">
    import { base } from "$app/paths";
	import { GithubIcon, HeartIcon, MenuIcon } from "svelte-feather-icons";

    export let current_page = "";

    var menu = {
        is_opened: false,
        open: () => {
            menu.is_opened = true;
        },
        close: () => {
            menu.is_opened = false;
        },
        toggle: () => {
            menu.is_opened = !menu.is_opened;
        }
    };
</script>

<div class="Header {menu.is_opened ? 'Header__menuOpened': ''}">
    <a class="Header_logo" href="{base}/">
        <div class="Header_logo_icon">
            <img class="Header_logo_icon_img" src="{base}/images/pokerunicorn-mascot.png" alt="PokerUnicorn" />
        </div>
        <div class="Header_logo_label">
            PokerUnicorn
        </div>
    </a>
    <div class="Header_menu">
        <a class="Header_menu_item {current_page == 'home' ? 'Header_menu_item__current': ''}" href="{base}/">
            Home
        </a>
        <a class="Header_menu_item" href="https://meowingcat.io/projects/poker/play/" target="_blank">
            Play Demo
        </a>
        <a class="Header_menu_item {current_page == 'downloads' ? 'Header_menu_item__current': ''}" href="{base}/downloads">
            Downloads
        </a>
        <a class="Header_menu_item {current_page == 'documentation' ? 'Header_menu_item__current': ''}" href="{base}/documentation">
            Documentation
        </a>
    </div>
    <div class="Headers_rightMenu">
        <div class="Headers_rightMenu">
            <a class="Header_menu_item {current_page == 'donate' ? 'Header_menu_item__current': ''}" href="{base}/donate">
                <div class="Header_menu_item_icon">
                    <HeartIcon size=15 />
                </div>
                <div class="Header_menu_item_label">
                    Donate
                </div>
            </a>
            <a class="Header_menu_item" href="https://github.com/PokerUnicorn">
                <div class="Header_menu_item_icon">
                    <GithubIcon size=15 />
                </div>
                <div class="Header_menu_item_label">
                    GitHub
                </div>
            </a>
        </div>
    </div>
    <div class="Header_menuBtn">
        <button class="Header_menuBtn" on:click={menu.toggle}>
            <MenuIcon size=30 />
        </button>
    </div>
</div>

<style>
    .Header {
        display: flex;
        height: 70px;
        padding: 25px;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    }

    .Header_logo {
        font-size: 30px;
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        z-index: 2010;
    }

    .Header_logo_icon {
        margin-right: 10px;
    }

    .Header_logo_icon_img {
        height: 60px;
        margin-top: 7px;
    }

    .Header_logo_label {
    }

    .Header_menu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        padding-right: 30px;
        transition: all 250ms;
    }

    .Header_menu_item,
    a.Header_menu_item,
    a.Header_menu_item:visited {
        padding: 0px 10px;
        margin: 0px 10px;
        text-decoration: none;
        color: white;
        transition: all 250ms;
        padding-bottom: 4px;
        border-bottom: 2px solid transparent;
        display: inline-flex;
        align-items: center;
    }

    .Header_menu_item_icon {
    }

    .Header_menu_item_label {
        margin: 0px 5px;
    }

    .Header_menu_item:hover {
        border-image: linear-gradient(to right, #ffffff00, #ffffff, #ffffff00) 1;
    }
    
    .Header_menu_item.Header_menu_item__current,
    a.Header_menu_item.Header_menu_item__current,
    a.Header_menu_item.Header_menu_item__current:visited {
        color: rgb(255, 173, 224);
        border-image: linear-gradient(to right, rgba(255, 173, 224, 0), rgb(255, 173, 224), rgba(255, 173, 224, 0)) 1;
    }
    .Header_menu_item.Header_menu_item__current:hover {
        border-image: linear-gradient(to right, rgba(255, 173, 224, 0), rgb(255, 173, 224), rgba(255, 173, 224, 0)) 1;
    }

    .Headers_rightMenu {
        display: flex;
        align-items: center;
    }

    .Header_menuBtn {
        display: none;
        transition: all 750ms;
        position: fixed;
        right: 20px;
        border-radius: 5px;
    }

    .Header_menuBtn:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    .Header.Header__menuOpened .Header_menuBtn {
        z-index: 2010;
        position: fixed;
        right: 0px;
        margin-right: 20px;
    }

    @keyframes Header_menu_appear {
        0% {
            opacity: 0;
        }
        99% {
            opacity: 1;
        }
        100% {
            opacity: 1;
            pointer-events: all;
        }
    }

    @keyframes Header_menu_disappear {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            pointer-events: none;
        }
    }
    @media (max-width: 1000px) {
        .Header_logo_label {
            font-size: 20px;
        }
    }

    @media (max-width: 1060px) {
        .Header_logo_label {
            display: none;
        }
    }

    @media (max-width: 800px) {
        .Header_logo_label {
            display: none;
        }
        
        .Headers_rightMenu {
            display: none;
        }

        .Header_menuBtn {
            display: flex;
            background: transparent;
            border: 0px;
            color: white;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    
        .Header_menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0px;
            right: 0px;
            height: 100%;
            width: 100%;
            background: rgba(54, 86, 176, 0.9);
            z-index: 2000;
            animation: Header_menu_disappear 750ms forwards;
            margin: auto;
            padding: 0px;
        }

        .Header_menu_item {
            margin-bottom: 20px !important;
        }

        .Header.Header__menuOpened .Header_menu {
            animation: Header_menu_appear 750ms forwards;
        }
    }
</style>