let fs = require("fs");

/**
 *
 * @param {string} filePath
 *
 */
module.exports = (filePath) => {
  let db = require(filePath);
  let func = () => {
    return db;
  };

  func.db = db;
  func.filePath = filePath;
  func.save = () => {
    fs.writeFileSync(func.filePath, JSON.stringify(func.db));
  };

  let checker = setInterval(() => {
    if (func.db === require(func.filePath)) clearInterval(checker);
    func.save();
  }, 0);

  return func;
};
