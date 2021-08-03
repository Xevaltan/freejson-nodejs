let { writeFileSync, readFileSync } = require("fs");

/**
 *
 * @param {string} filePath
 *
 */
let ezyjsonDatabase = (filePath) => {
  let db = require(filePath);

  /**
   *
   * @param {boolean} txt
   *
   */
  let func = (txt) => {
    if (txt) return readFileSync(filePath, { encoding: "utf-8" });
    if (!txt) return db;
  };

  func.db = db;
  func.filePath = filePath;

  func.save = () => {
    writeFileSync(func.filePath, JSON.stringify(func.db));
  };

  let howManyXPForLVL = 10000;

  func.xpSystem = {
    /**@param {number} number */ setMaxXPForNewLVL: (number) => {
      howManyXPForLVL = number;
    },
    /**@param {number} count @param {string} user */ addXP: (user, count) => {
      return new Promise((resolve, reject) => {
        if (!func()[user]) {
          func()[user] = {
            xp: count,
          };
          ezyjson.save();
        } else {
          if (func()[user].xp) {
            func()[user].xp += count;
            func.save();

            if (howManyXPForLVL >= func()[user].xp) {
              resolve("next");
            }
          } else {
            func()[user].xp = count;
            func.save();
          }
          resolve("xp-added");
        }
      });
    },

    /**
     *
     * @param {string} user
     */
    addLVL: (user) => {
      return new Promise((resolve, reject) => {
        if (func()[user]) {
          func()[user] += 1;
          func.save();

          resolve("lvl-added");
        } else {
          resolve("no-user");
        }
      });
    },
  };

  func.coinSystem = {
    /**
     *
     * @param {string} user
     * @param {number} count
     */
    addCoins: (user, count) => {
      let ret = "";
      if (func()[user]) {
        if (func()[user].coins) {
          func()[user].coins += count;

          func.save();
        } else {
          func()[user].coins = count;

          func.save();
        }

        ret = "coins-added";
      } else {
        func()[user] = {
          coins: count,
        };

        func.save();
        ret = "coins-added";
      }

      return ret;
    },

    /**
     *
     * @param {string} user
     * @param {number} count
     */
    removeCoins: (user, count) => {
      let ret = "";

      if (func()[user]) {
        if (func()[user].coins) {
          func()[user].coins -= count;

          func.save();
        } else {
          func()[user].coins = count;

          func.save();
        }

        ret = "coins-removed";
      } else {
        func()[user] = {
          coins: count,
        };

        func.save();

        ret = "coins-removed";
      }

      return ret;
    },

    /**
     *
     * @param {string} user
     * @param {number} count
     */
    setCoins: (user, count) => {
      let ret = "";

      if (func()[user]) {
        if (func()[user].coins) {
          func()[user].coins = count;

          func.save();
        }

        ret = "coins-set";
      } else {
        func()[user] = {
          coins: count,
        };

        func.save();

        ret = "coins-set";
      }

      return ret;
    },
  };

  /**
   *
   * @param {string} text
   */
  func.setText = (text) => {
    writeFileSync(func.filePath, text);
  };

  return func;
};

module.exports = ezyjsonDatabase;
