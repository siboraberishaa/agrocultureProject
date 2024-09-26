export const timeSinceFormatterTr = (value) => {
    if (value) {
        const seconds = Math.floor(
            (new Date().getTime() - new Date(value).getTime()) / 1000
        );

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " yıl önce";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " ay önce";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " gün önce";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " saat önce";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " dakika önce";
        }
        return Math.floor(seconds) + " saniye önce";
    } else {
        return "";
    }
};

export const timeSinceFormatter = (value) => {
    if (value) {
        const seconds = Math.floor(
            (new Date().getTime() - new Date(value).getTime()) / 1000
        );

        let interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    } else {
        return "";
    }
};
