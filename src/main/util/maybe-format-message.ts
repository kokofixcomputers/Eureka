import formatMessage, { Locales, MessageObject } from 'format-message';
import { MenuItemFunction } from '../middleware/extension-metadata';
/**
 * Check if `maybeMessage` looks like a message object, and if so pass it to `formatMessage`.
 * Otherwise, return `maybeMessage` as-is.
 * @param {*} maybeMessage - something that might be a message descriptor object.
 * @param {object} [args] - the arguments to pass to `formatMessage` if it gets called.
 * @param {string} [locale] - the locale to pass to `formatMessage` if it gets called.
 * @return {string|*} - the formatted message OR the original `maybeMessage` input.
 */
export const maybeFormatMessage = function <T extends Record<string, unknown> | string | MenuItemFunction> (maybeMessage?: T, args?: object, locale?: Locales) {
    if (maybeMessage && typeof maybeMessage === 'object' && maybeMessage.id && maybeMessage.default) {
        return formatMessage(maybeMessage as unknown as MessageObject, args, locale);
    }
    return maybeMessage;
};
