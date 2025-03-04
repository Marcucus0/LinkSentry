const config = window.RedirectorConfig || {};
document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        const link = event.target.closest("a");
        if (!link || !link.href) return;

        const destination = new URL(link.href, window.location.origin);
        const currentDomain = window.location.hostname || "localhost";
        const whitelist = config.whitelist || [""];
        

        if (destination.hostname !== currentDomain &&
            destination.protocol.startsWith("http") &&
            !whitelist.includes(destination.hostname)) {
            event.preventDefault();
            const countdown = config.countdown ?? 0;
            window.location.href = `redirect.html?url=${encodeURIComponent(link.href)}&countdown=${countdown}`;
        }
    });
});

