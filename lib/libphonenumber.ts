import { formatIncompletePhoneNumber } from "libphonenumber-js";

/**
 * Formats an incomplete or partially entered Indian phone number into a readable format.
 *
 * This function automatically applies Indian phone number grouping rules
 * while the user is typing. It does not validate the number but makes
 * it easier to read and understand as input is entered.
 *
 * @param phone - The phone number string to format (may be incomplete).
 * @returns The formatted phone number string according to Indian phone numbering rules.
 *
 * @example
 * formatIncompletePhoneNumberIN("9876543210"); // "98765 43210"
 * formatIncompletePhoneNumberIN("09876");      // "09876"
 *
 * @remarks
 * Uses the full `libphonenumber-js` library with "IN" country code.
 */
export function formatIncompletePhoneNumberIN(phone: string) {
  return formatIncompletePhoneNumber(phone, "IN");
}
