function register(env) {
  env.addExtension("text", new handler(env));
}
const Nunjucks = require('nunjucks');
function handler(env) {
  this.tags = ['text'];

  this.parse = function (parser, nodes, lexer) {
      var tok = parser.nextToken();

      var args = parser.parseSignature(null, true);
      parser.advanceAfterBlockEnd(tok.value);
      //var body = parser.parseUntilBlocks('end_text');
      let body = null;
      //parser.advanceAfterBlockEnd();
      return new nodes.CallExtension(this, 'run', args, [body]);

  };

  this.run = function(environment) {
    // console.log(environment);
    return 'hey'
      let str = JSON.stringify(environment.ctx);
      return new Nunjucks.runtime.SafeString(str);
  }
}

module.exports = {
  handler,
  register
}
  

