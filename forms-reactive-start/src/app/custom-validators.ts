import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static forbiddenProjectName(form: FormControl): { [s: string]: boolean } {
    if (form.value === "Test") {
      return { projectNameIsForbidden: true };
    }
    return null;
  }

  static forbiddenProjectNameAsync(
    form: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (form.value === "Test") {
          resolve({ projectNameIsForbidden: true });
        }
        resolve(null);
      }, 1500);
    });

    return promise;
  }
}
