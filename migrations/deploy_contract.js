const Cryptomedia = artifacts.require("Cryptomedia");

module.exports = function(deployer){
  deployer.deploy(Cryptomedia);
}
