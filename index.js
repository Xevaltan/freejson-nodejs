let fs = require("fs");

/**
 *
 * @param {string} filePath
 *
 */
module.exports = (filePath) => {
  let db = require(filePath);

  /**
   *
   * @param {boolean} txt
   * @returns {typeof Object | string}
   *
   */
  let func = (txt) => {
    if (txt) return fs.readFileSync(filePath, { encoding: "utf-8" });
    if (!txt) return db;
  };

  func.save = () => {
    fs.writeFileSync(func.filePath, JSON.stringify(func.db));
  };

  /**
   * @private
   */
  func.db = db;
  /**
   * @private
   */
  func.filePath = filePath;

  /**
   *
   * @param {string} text
   */
  func.text = (text) => {
    writeFileSync(func.filePath, text);
  };

  return func;
};
