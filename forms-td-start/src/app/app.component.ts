import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: true }) signupForm: NgForm;
  defaultQuestion = "teacher";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;

  suggestUsername() {
    const suggestedUsername = "Superuser";
    this.signupForm.setValue({
      userData: {
        username: suggestedUsername,
        email: "",
      },
      secret: "pet",
      questionAnswer: "",
      gender: "male",
    });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedUsername,
      },
    });
  }

  onSubmit() {
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }

  // Template Driven Forms - Assignment

  @ViewChild("f", { static: true }) foorm: NgForm;

  subscriptions = ["basic", "advanced", "pro"];
  selectedSubscription = "advanced";
  mail = "";
  password = "";
  subscription = "";

  submit() {
    console.log(this.foorm.value);
  }
}
