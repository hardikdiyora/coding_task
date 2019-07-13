const randomNumber = () => {
    return Math.floor(Math.random()*10000).toString();
};

const takeScreenShots = (test) => {
    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
        return;
    }
    // get current test title and clean it, to use it as file name
    let filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
    // build file path
    let filePath = path.join(testLogDir, 'screenshots/') + filename + '.png';
    // save screenshot
    browser.saveScreenshot(filePath);
    console.log('\n\tScreenshot location:', filePath, '\n');
};

module.exports = {
    randomText: randomNumber,
    takeScreenShots,
};