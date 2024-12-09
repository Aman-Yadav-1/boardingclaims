
/**
 * Utility function to conditionally join class names.
 * @param {...(string | false | null | undefined)[]} classes - Class names to be conditionally joined.
 * @returns {string} - A single string of class names.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  