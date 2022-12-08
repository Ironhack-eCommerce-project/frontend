/* Find better name / place for this file */

export const slugify = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};
