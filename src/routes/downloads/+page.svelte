<script>
	import Footer from "../../components/footer.svelte";
    import Header from "../../components/header.svelte";
</script>

<Header current_page="downloads" />

<div class="Documentation">
    <h1 class="DelayedAppear__250ms">Downloads</h1>
    <p class="DelayedAppear__500ms">
        Here you can find the downloads of the demo client.
        Currently we have <span class="highlight">Windows</span>, <span class="highlight">Linux</span> and <span class="highlight">macOS</span> versions available.
    </p>

    <div class="Documentation_list" style="margin-top: 50px;">
        <a href="http://meowingcat.io/projects/poker/downloads/windows/PokerGameWindows.zip"  class="Documentation_list_item DelayedAppear__250ms">
            <div class="Documentation_list_item_title">
                Windows
            </div>
            <div class="Documentation_list_item_description">
                Download the <span class="highlight__light">Windows</span> version of the game client.
            </div>
        </a>
        <a href="http://meowingcat.io/projects/poker/downloads/macos/PokerGameMacUniversal.zip" class="Documentation_list_item DelayedAppear__500ms">
            <div class="Documentation_list_item_title">
                macOS
            </div>
            <div class="Documentation_list_item_description">
                Download the <span class="highlight__light">macOS</span> (<span class="highlight__light">x86</span> and <span class="highlight__light">Apple Silicon</span>) version of the game client.
            </div>
        </a>
        <a href="http://meowingcat.io/projects/poker/downloads/linux/PokerGameLinux.zip" class="Documentation_list_item DelayedAppear__1000ms">
            <div class="Documentation_list_item_title">
                Linux
            </div>
            <div class="Documentation_list_item_description">
                Download the <span class="highlight__light">Linux</span> version of the game client.
            </div>
        </a>
    </div>
</div>

<Footer />

<style>
    .Documentation {
        padding: 25px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 20;
        box-sizing: border-box;
    }

    .Documentation h1 {
        max-width: 750px;
    }

    .Documentation p {
        max-width: 750px;
    }

    .Documentation_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        box-sizing: border-box;
    }

    .Documentation_list_item {
        width: 300px;
        padding: 25px;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5), 0 0 58px 5px rgba(166, 35, 143, 0.49);
        color: black;
        transition: all 0.5s;
        cursor: pointer;
    }

    .Documentation_list_item,
    a.Documentation_list_item,
    a.Documentation_list_item:visited {
        text-decoration: none;
    }
    
    .Documentation_list_item:hover {
        transform: scale(1.05);
    }
    
    .Documentation_list_item_title {
        font-size: 20px;
        font-weight: 600;
        box-sizing: border-box;
        margin-bottom: 25px;
        background-image: linear-gradient(to left, #553c9a, #b393d3);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 32px;
    }

    .Documentation_list_item_description {
        font-size: 16px;
        line-height: 25px;
    }
</style>