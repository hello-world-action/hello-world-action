const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config()

  const client = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

const twitterClient = client.readWrite;

const tweet = async () => {
    try{
        const mediaId = await twitterClient.v1.uploadMedia("./output.jpg");
        await twitterClient.v2.tweet({
            text: "Hello",
            media: {
                media_ids: [mediaId]
            }
        });
    }catch(e){
        console.log(e)
    }
}
tweet()