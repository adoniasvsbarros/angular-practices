import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";
import { Observable } from "rxjs";
import { CustomValidators } from "./custom-validators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  /*   genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Adonias", "Bob"];

  ngOnInit() {
    // form definition
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
    // value changes observable
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    // status changes observable
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    // set value
    this.signupForm.setValue({
      userData: {
        username: "max",
        email: "max@test.com",
      },
      gender: "male",
      hobbies: [],
    });
    // patch value
    this.signupForm.patchValue({
      userData: {
        username: "anna",
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  get hobbyControls(): AbstractControl[] {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }

  // synchronous validator
  forbiddenNames(control: FormControl): { [key: string]: any } {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  // asynchronous validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  } */

  // EXERCISE

  exerciseForm: FormGroup;
  statuses = ["in progress", "finished"];

  ngOnInit() {
    this.exerciseForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.forbiddenProjectName],
        CustomValidators.forbiddenProjectNameAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null),
      projectLevel: new FormControl(null, Validators.required),
    });
  }

  submit() {
    console.log(this.exerciseForm.value);
  }

  get projectStatuses() {
    return this.statuses;
  }
}
