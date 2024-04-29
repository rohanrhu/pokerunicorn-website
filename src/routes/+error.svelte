<script lang="ts">
    import { base } from "$app/paths";
	import { page } from '$app/stores';
</script>

{#if $page.error}
    <div class="Error">
        <a class="Error_logo" href="{base}/">
            <div class="Error_logo_icon">
                <img class="Error_logo_icon_img" src="{base}/images/pokerunicorn-mascot.png" alt="PokerUnicorn" />
            </div>
            <div class="Error_logo_label">
                PokerUnicorn
            </div>
        </a>
        
        <h1>Error</h1>
        <p>{$page.error.message}</p>
    </div>
{/if}

<style>
    .Error {
        padding: 25px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .Error p {
        line-height: 20px;
        margin: 0px;
        padding: 0px;
    }

    .Error_logo {
        font-size: 25px;
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
    }

    .Error_logo_icon {
        margin-right: 10px;
    }

    .Error_logo_icon_img {
        height: 60px;
        margin: auto;
        margin-top: 7px;
    }
</style>