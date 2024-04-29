<script>
	import { GithubIcon, HeartIcon } from "svelte-feather-icons";

    export let current_page = "";
</script>

<div class="Header">
    <a class="Header_logo" href="/">
        <div class="Header_logo_icon">
            <img class="Header_logo_icon_img" src="./images/pokerunicorn-mascot.png" alt="PokerUnicorn" />
        </div>
        <div class="Header_logo_label">
            PokerUnicorn
        </div>
    </a>
    <div class="Header_menu">
        <a class="Header_menu_item {current_page == 'home' ? 'Header_menu_item__current': ''}" href="/">
            Home
        </a>
        <a class="Header_menu_item {current_page == 'play' ? 'Header_menu_item__current': ''}" href="/play">
            Play the Demo
        </a>
        <a class="Header_menu_item {current_page == 'documentation' ? 'Header_menu_item__current': ''}" href="/documentation">

            Documentation
        </a>
        <a class="Header_menu_item {current_page == 'donate' ? 'Header_menu_item__current': ''}" href="/donate">
            <div class="Header_menu_item_icon">
                <HeartIcon size=15 />
            </div>
            <div class="Header_menu_item_label">
                Donate
            </div>
            <div class="Header_menu_item_icon">
                <HeartIcon size=15 />
            </div>
        </a>
    </div>
    <div class="Headers_rightMenu">
        <div class="Headers_rightMenu">
            <a class="Headers_rightMenu_item" href="https://github.com/PokerUnicorn">
                <GithubIcon size=15 />
                GitHub
            </a>
        </div>
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
        padding-right: 90px;
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
        color: rgb(255, 173, 224);
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

    .Headers_rightMenu_item,
    a.Headers_rightMenu_item,
    a.Headers_rightMenu_item:visited {
        padding: 0px 10px;
        margin: 0px 10px;
        text-decoration: none;
        color: white;
    }
</style>