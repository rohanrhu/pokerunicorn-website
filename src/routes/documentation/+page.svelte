<script>
	import Footer from "../../components/footer.svelte";
    import Header from "../../components/header.svelte";
</script>

<Header current_page="documentation" />

<div class="Documentation">
    <h1 class="DelayedAppear__250ms">Documentation</h1>
    <p class="DelayedAppear__500ms">
        Here you can find the documentation of the PokerUnicorn infrastructure project.
    </p>

    <div class="Documentation_list" style="margin-top: 50px;">
        <a href="https://github.com/rohanrhu/pokerunicorn-server"  class="Documentation_list_item DelayedAppear__250ms">
            <div class="Documentation_list_item_title">
                Game Server GitHub Repo
            </div>
            <div class="Documentation_list_item_description">
                The server repository. Contains the server code and the API documentation.
            </div>
        </a>
        <a href="https://rohanrhu.github.io/pokerunicorn-server" class="Documentation_list_item DelayedAppear__500ms">
            <div class="Documentation_list_item_title">
                Game Server Documentation
            </div>
            <div class="Documentation_list_item_description">
                The server documentation. Contains the API documentation and the server setup guide.
            </div>
        </a>
        <a href="https://github.com/rohanrhu/pokerunicorn-client"  class="Documentation_list_item DelayedAppear__1000ms">
            <div class="Documentation_list_item_title">
                Game Client GitHub Repo
            </div>
            <div class="Documentation_list_item_description">
                The client repository. Contains the client code and the client documentation.
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
        color: black;
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