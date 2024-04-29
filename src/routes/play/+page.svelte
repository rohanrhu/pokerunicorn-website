<script>
    import { browser } from "$app/environment";
	import Footer from "../../components/footer.svelte";
    import Header from "../../components/header.svelte";

    let frame = {
        rect: browser ? new DOMRectReadOnly(): null
    };
</script>

<Header current_page="play" />

<div class="Play">
    <h1 class="DelayedAppear__500ms">Play the Demo</h1>
    <p class="DelayedAppear__1000ms">
        This is a demo of the PokerUnicorn infrastructure project. It uses Monero Stagenet (which is a test purposed blockchain, no real value) as the currency. No real money is involved in this project.
    </p>

    <div class="Play_frame DelayedAppear__1000ms" bind:contentRect={frame.rect}>
        <iframe
            src="https://meowingcat.io/projects/poker/play/"
            frameborder="0"
            class="Play_frame_iframe"
            title=""
            width="{frame.rect ? frame.rect.width: 700}"
            height="{frame.rect ? frame.rect.height: 700}"
            sandbox="allow-scripts allow-same-origin"
        ></iframe>
    </div>
</div>

<Footer />

<style>
    .Play {
        padding: 25px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 20;
    }

    .Play_frame {
        margin-top: 25px;
        width: 90%;
        max-width: 800px;
        max-height: 800px;
        flex-grow: 1;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5), 0 0 58px 5px rgba(166, 35, 143, 0.49);
    }

    .Play_frame_iframe {
    }

    .Play h1 {
        max-width: 750px;
    }

    .Play p {
        max-width: 750px;
    }
</style>