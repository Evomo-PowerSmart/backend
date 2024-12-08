/**
 * Date Formatter
 * @module utils
 * @description Date Formatter
 */

const formatDate = (date) => {
    return date ? date.toISOString().slice(0, 19).replace('T', ' ') : null;
  };
  
  module.exports = {
    formatDate
  };