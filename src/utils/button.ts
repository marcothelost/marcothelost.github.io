import { ButtonVariant, ButtonSize } from '@components/elements/Button';

/**
 * Gets CSS classes for a button based on its variant and size.
 *
 * @param {ButtonVariant} variant - The variant of the button.
 * @param {ButtonSize} size - The size of the button.
 * @returns {string} CSS classes for the button.
 */
export const getButtonClasses = (
  variant: ButtonVariant,
  size: ButtonSize
): string => {
  let colorString = '';
  let sizeString = '';

  switch (variant) {
    case 'primary':
      colorString = 'bg-green-800 hover:bg-green-700 ';
      break;
    case 'default':
      colorString = 'bg-zinc-800 hover:bg-zinc-700 text-gray-200 ';
      break;
    default:
      colorString = '';
      break;
  }

  switch (size) {
    case 'small':
      sizeString = 'text-xs';
      break;
    default:
      sizeString = 'text-sm';
      break;
  }

  return `${colorString}${sizeString}`;
};
