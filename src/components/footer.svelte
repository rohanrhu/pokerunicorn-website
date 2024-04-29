<script>
	import { GithubIcon } from "svelte-feather-icons";
</script>

<div style="flex-grow: 1;"></div>

<div class="Footer">
    <div class="Footer_social">
        <a class="Footer_social_a" href="https://github.com/PokerUnicorn">
            <div class="Footer_social_a_icon">
                <GithubIcon size=20 />
            </div>
            <div class="Footer_social_a_label">
                Github
            </div>
        </a>
        <a class="Footer_social_a" href="https://discord.gg/RyVY9MtB4S">
            <div class="Footer_social_a_icon">
                <img src="./images/discord.svg" alt="Discord" style="height: 20px; filter: brightness(0) invert(1);" />
            </div>
            <div class="Footer_social_a_label">
                Discord
            </div>
        </a>
    </div>
    <div class="Footer_legal">
        <p>
            This is a whole poker game software infrastructure project. It uses Monero Stagenet (which is a test purposed blockchain, no real value) as the currency as an open source software.
        </p>
        <p>
            No real money is involved in this project.
        </p>
    </div>
    <div class="Footer_license">
        <p>
            This project and all its components are licensed under the GNU/GPLv3 (General Public License version 3) license.
        </p>
        <p>
            Read more about it <a href="https://www.gnu.org/licenses/gpl-3.0.html">here</a>.
        </p>
    </div>
</div>

<style>
    .Footer {
        padding: 25px;
        color: white;
        text-align: center;
    }
    
    .Footer p {
        line-height: 24px;
        margin: 0px;
        padding: 0px;
    }
    
    .Footer a,
    .Footer a:visited {
        color: rgb(255, 227, 227);
        transition: all 0.5s;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        align-content: center;
    }

    .Footer a:hover {
        color: white;
    }

    .Footer_legal {
        padding: 10px 0px;
        color: rgb(255, 173, 224);
    }
    
    .Footer_social {
        padding: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .Footer_social_a,
    a.Footer_social_a,
    a.Footer_social_a:visited {
        padding: 0px 10px;
        text-decoration: none;
        color: white;
    }

    .Footer_social_a_icon {
        margin-right: 5px;
    }
</style>