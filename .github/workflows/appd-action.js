const { writeFileSync } = require('fs');
const path = require('path');
const appd = require("./public/appd.json")

/**
 * This function replaces the local host for the manifest file to the production one
 */
async function run() {
  try {
    /**
     * Example URLS
     *
     * s3 bucket URL:
     * https://finsemble-sd-v6.s3.amazonaws.com/production/ChartIQ/Finsemble-SD-X/appd.json
     *
     * Production URL:
     * https://salesdemo-v6.finsemble.com/production/ChartIQ/Finsemble-SD-News/index.html
     */
    const S3_URL = `https://salesdemo-v6.finsemble.com/production/${process.env.GITHUB_REPOSITORY}/index.html`
    let config = Object.assign({}, appd)

    for (let val in config.appd) {
      let url = config.appd[val]?.manifest?.window?.url
      if (url) {
        config.appd[val].manifest.window.url = S3_URL
      }
    }


    const appdPath = path.resolve(__dirname, './build/appd.json')
    writeFileSync(appdPath, JSON.stringify(config, null, 2), 'utf8');

  }
  catch (error) {
    console.error(error)
    // core.setFailed(error.message);
  }
}

run()
