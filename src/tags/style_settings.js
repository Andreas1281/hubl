function register(env) {
  env.addExtension("style_settings", new handler(env));
}
const Nunjucks = require('nunjucks');
function handler(env) {
  this.tags = ['style_settings'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      //var body = parser.parseUntilBlocks('end_style_settings');
      let body = null;
      //parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(environment) {
    console.log(environment);
      let str = JSON.stringify(environment.ctx);
      return new Nunjucks.runtime.SafeString(str);
  }
}

module.exports = {
  handler,
  register
}
  

