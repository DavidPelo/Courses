import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  statuses: string[] = ["stable", "critical", "finished"];
  form: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.projectNameValidationAsync),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("stable"),
    });

    this.form.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  onSubmit() {
    console.log(this.form.value);
  }

  // projectNameValidation(control: FormControl) {
  //   if (control.value === 'test') {
  //     return { invalidName: true };
  //   }

  //   return null;
  // }

  projectNameValidationAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ 'invalidName': true });
        } else {
          resolve(null);
        }
      }, 1500)
    })

    return promise;
  }
}
