<script src="https://cdn.jsdelivr.net/npm/lax.js" ></script>
    <script>
        window.onload = function() {
            lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
        }
    </script>