import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valid = control.value.endsWith('wilder.school');

  const errors = {
    password: {
      rules: 'must contain at least one uppercase letter',
    },
  };

  return !valid ? errors : null;
}
