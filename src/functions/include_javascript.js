function register(env) {
  env.addGlobal("include_javascript", handler);
}
    
function handler(path) {


}
  
    
module.exports = {
  handler,
  register
};
  