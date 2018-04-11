function Page () {
}
Page.prototype.open = function (path) {
    browser.url(path);
    browser.windowHandleFullscreen();
};
Page.prototype.getUrl = function () {
    return browser.getUrl();
};
module.exports = new Page();