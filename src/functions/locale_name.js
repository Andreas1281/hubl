function register(env) {
  env.addGlobal("locale_name", handler);
}
    
function handler(language_code, target_language_code) {


}
  
    
module.exports = {
  handler,
  register
};
  