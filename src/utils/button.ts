import { ButtonVariant } from '@components/elements/Button';

/**
 * Gets CSS classes for a button based on its variant.
 *
 * @param {ButtonVariant} variant - The variant of the button.
 * @returns {string} CSS classes for the button.
 */
export const getButtonClassesForVariant = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-green-800 hover:bg-green-700';
    case 'default':
      return 'bg-zinc-800 hover:bg-zinc-700 text-gray-200';
    default:
      return '';
  }
};
