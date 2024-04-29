<script lang="ts">
    import '@fontsource-variable/public-sans';
</script>

<head>
    <meta name="theme-color" content="#4162DE" media="(prefers-color-scheme: light)">
    <title>PokerUnicorn Infrastructure Project</title>
</head>

<div class="MainBg">
</div>

<div class="Page">
    <slot></slot>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        font-family: 'Public Sans Variable', sans-serif;
    }
    
    .MainBg {
        overflow: hidden;
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: -1;
        background-color: rgb(65, 98, 222);
        background-image: radial-gradient(circle at 50% 0%, rgba(255, 75, 156, 0.27), rgba(255, 255, 255, 0) 50.42%);
        background-repeat: no-repeat;
        background-size: 100% 50%;
        background-position: top;
    }

    .Page {
        color: white;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    :global(.Page h1) {
        margin: 0px;
        padding: 5px;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 5px;
        line-height: 34px;
    }
    
    :global(.Page p) {
        line-height: 28px;
        margin: 0px;
        padding: 15px;
    }

    @keyframes -global-AnimDelayedAppear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    :global(.DelayedAppear__250ms) {
        animation: AnimDelayedAppear 1250ms forwards;
    }

    :global(.DelayedAppear__500ms) {
        animation: AnimDelayedAppear 1500ms forwards;
    }

    :global(.DelayedAppear__750ms) {
        animation: AnimDelayedAppear 1750ms forwards;
    }

    :global(.DelayedAppear__1000ms) {
        animation: AnimDelayedAppear 3000ms forwards;
    }

    :global(a),
    :global(a:visited) {
        color: rgb(0, 198, 255);
        text-decoration: none;
        transition: all 0.5s;
    }

    :global(a:hover) {
        text-decoration: underline;
    }

    :global(.highlight) {
        color: rgb(216, 185, 255);
    }
    :global(.highlight__light) {
        color: rgb(139, 44, 255);
    }
</style>