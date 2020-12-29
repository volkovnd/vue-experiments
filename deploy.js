const dotenv = require("dotenv");
const ghpages = require("gh-pages");

dotenv.config();

ghpages.publish(
  "dist",
  {
    repo: `https://${process.env.GITHUB_TOKEN}@github.com/volkovnd/vue-experiments.git`,
    silent: true,
    dotfiles: true
  },
  function(err) {
    console.log(err);
  }
);
