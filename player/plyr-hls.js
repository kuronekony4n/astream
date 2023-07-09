document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video");
    const source = video.getElementsByTagName("source")[0].src;

    // For more options see: https://github.com/sampotts/plyr/#options
    // captions.update is required for captions to work with hls.js
    const defaultOptions = {
        controls: ['play-large', 'rewind', 'play', 'progress', 'current-time', 'duration', 'fast-forward', 'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'],
        settings: ['captions', 'quality', 'speed', 'loop'],
        ratio: "16:9",
        tooltips: {
            controls: true,
            seek: true,
        },
        autoplay: true,
    };

    if (Hls.isSupported()) {
        // For more Hls.js options, see https://github.com/dailymotion/hls.js
        const hls = new Hls();
        hls.loadSource(source);

        // From the m3u8 playlist, hls parses the manifest and returns
        // all available video qualities. This is important, in this approach,
        // we will have one source on the Plyr player.
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {

            // Transform available levels into an array of integers (height values).
            const availableQualities = hls.levels.map((l) => l.height)

            // Add new qualities to option
            defaultOptions.quality = {
                default: availableQualities[0],
                options: availableQualities,
                // this ensures Plyr to use Hls to update quality level
                forced: true,
                onChange: (e) => updateQuality(e),
            }

            // Initialize here
            const player = new Plyr(video, defaultOptions);
        });
        hls.attachMedia(video);
        window.hls = hls;
    } else {
        // default options with no quality update in case Hls is not supported
        const player = new Plyr(video, defaultOptions);
    }

    function updateQuality(newQuality) {
        window.hls.levels.forEach((level, levelIndex) => {
            if (level.height === newQuality) {
                console.log("Found quality match with " + newQuality);
                window.hls.currentLevel = levelIndex;
            }
        });
    }
});