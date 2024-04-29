<script>
	import Footer from "../../components/footer.svelte";
    import Header from "../../components/header.svelte";
</script>

<Header current_page="donate" />

<div class="Donate">
    <h1 class="DelayedAppear__250ms">Donate</h1>
    <p class="DelayedAppear__500ms">
        Here you can find donation methods for the PokerUnicorn project. We accept <span class="highlight">Bitcoin</span>, <span class="highlight">Monero</span>, and <span class="highlight">Ethereum/USDT/USDC</span> also you can donate on
        <a href="https://patreon.com/EvrenselKisilik">Patreon</a> too. You can contact us for other ways to donate.
        Thank you for your support! 🦄 ♥️ 🚀
    </p>

    <div class="Donate_methods" style="margin-top: 50px;">
        <div class="Donate_methods_items">
            <div class="Donate_methods_items_item DelayedAppear__250ms">
                <div class="Donate_methods_items_item_title">
                    Bitcoin
                </div>
                <div class="Donate_methods_items_item_description">
                    <div class="Donate_methods_items_item_address">
                        <input type="text" class="Donate_methods_items_item_address_input" value="bc1qhvlc762kwuzeawedl9a8z0duhs8449nwwc35e2" />
                    </div>
                </div>
            </div>
            <div class="Donate_methods_items_item DelayedAppear__500ms">
                <div class="Donate_methods_items_item_title">
                    Monero
                </div>
                <div class="Donate_methods_items_item_description">
                    <div class="Donate_methods_items_item_address">
                        <input type="text" class="Donate_methods_items_item_address_input" value="8A8HWvGp8d3Qf8Qn1ei97RXPJiQYodvBxLSaPbnLEKAZ2pjnAbmNLn59HNPKirrAmKTfNEfjbobdi33zV1CwDQ7qRLxiZvR" />
                    </div>
                </div>
            </div>
            <div class="Donate_methods_items_item DelayedAppear__1000ms">
                <div class="Donate_methods_items_item_title">
                    ETH, USDT/USDC
                </div>
                <div class="Donate_methods_items_item_description">
                    <div class="Donate_methods_items_item_address">
                        <input type="text" class="Donate_methods_items_item_address_input" value="0x1D99B2a2D85C34d478dD8519792e82B18f861974" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Footer />

<style>
    .Donate {
        padding: 25px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 20;
        box-sizing: border-box;
    }

    .Donate h1 {
        max-width: 750px;
    }

    .Donate p {
        max-width: 750px;
    }

    .Donate_methods {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        box-sizing: border-box;
    }

    .Donate_methods_items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        box-sizing: border-box;
    }

    .Donate_methods_items_item {
        width: 300px;
        padding: 25px;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5), 0 0 58px 5px rgba(166, 35, 143, 0.49);
        color: black;
        transition: all 0.5s;
        flex-grow: 0;
        transition: 500ms all;
    }

    .Donate_methods_items_item:hover {
        flex-grow: 1;
    }

    .Donate_methods_items_item {
        box-sizing: border-box;
    }

    .Donate_methods_items_item_title {
        font-size: 20px;
        font-weight: 600;
        box-sizing: border-box;
        background-image: linear-gradient(to left, #553c9a, #b393d3);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 32px;
        margin-bottom: 25px;
    }

    .Donate_methods_items_item_description {
        box-sizing: border-box;
    }

    .Donate_methods_items_item_address {
        box-sizing: border-box;
    }

    .Donate_methods_items_item_address_input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-sizing: border-box;
        outline: none;
        font-size: 16px;
    }

    .Donate_methods_items_item_address_input:focus {
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
</style>