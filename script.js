const css = document.createElement('style');
css.type = 'text/css';
const styles = '.link.hd { display: none; } @media only screen and (min-width:1008px) { #player-outer-outer { width: auto; max-width:976px; height: auto; max-height: 549px; padding-left:16px; padding-right:16px; }}';
if (css.styleSheet) {
    css.styleSheet.cssText = styles;
} else {
    css.appendChild(document.createTextNode(styles));
}
document.getElementsByTagName("head")[0].appendChild(css);

(function defer() {
    if (window.embeddedMedia && window.embeddedMedia.players && window.embeddedMedia.players[0]) {
        const SMPlayer = window.embeddedMedia.players[0];
        const mp = SMPlayer._container;

        mp.bind('playlistLoaded', () => {
            SMPlayer.updateQuality({
                quality: 'hd',
                lowBandwidth: false
            });
        });
    } else {
        setTimeout(() => {
            defer()
        }, 100);
    }
})();
