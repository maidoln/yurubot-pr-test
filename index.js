var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.token
}).startRTM(function(err,bot,payload) {
  // 初期処理
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});
controller.hears(["ごはん","ご飯","ランチ","飲み会"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  // キーワードに反応した処理
  bot.reply(message, '「ごはんゆるぼ」がおすすめ！');
});
controller.hears(["仕事","しごと","働く"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  // キーワードに反応した処理
  bot.reply(message, '「おしごとゆるぼ」がおすすめ！');
});
