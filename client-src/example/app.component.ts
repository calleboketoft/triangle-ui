import {Component} from '@angular/core'
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormControl} from '@angular/forms'
import {typeOfTriangle, validation, errors} from 'triangle'

@Component({
  selector: 'app',
  directives: [REACTIVE_FORM_DIRECTIVES],
  template: `
    <div class="container">
      <h2>Triangle UI</h2>
      <form [formGroup]="triForm">
        <div class="row">
          <div class="col-xs-4">
            <label>Side A</label>
            <input class="form-control" formControlName="sideA">
            <div class="alert alert-danger"
              *ngIf="!triForm.controls.sideA.pristine && triForm.controls.sideA.errors">
              {{getErrorMessage(triForm.controls.sideA)}}
            </div>
          </div>
          <div class="col-xs-4">
            <label>Side B</label>
            <input class="form-control" #sideB formControlName="sideB">
            <div class="alert alert-danger"
              *ngIf="!triForm.controls.sideB.pristine && triForm.controls.sideB.errors">
              {{getErrorMessage(triForm.controls.sideB)}}
            </div>
          </div>
          <div class="col-xs-4">
            <label>Side C</label>
            <input class="form-control" #sideC formControlName="sideC">
            <div class="alert alert-danger"
              *ngIf="!triForm.controls.sideC.pristine && triForm.controls.sideC.errors">
              {{getErrorMessage(triForm.controls.sideC)}}
            </div>
          </div>
          <div class="col-xs-12">Result: {{triangleResult | json}}</div>
        </div>
      </form>
    </div>
  `
})
export class AppComponent {
  public triForm
  public triangleResult
  constructor (private formBuilder: FormBuilder) {

    // Custom validator based on validator function in triangle lib
    function validateTriangleSide (c: FormControl) {
      if (!c.value) return
      return !validation.validTriangleSide(+c.value) ? null : {
        validateTriangleSide: errors.numsFitForTriangle
      }
    }

    this.triForm = this.formBuilder.group({
      sideA: ['', [Validators.required, validateTriangleSide]],
      sideB: ['', [Validators.required, validateTriangleSide]],
      sideC: ['', [Validators.required, validateTriangleSide]]
    })

    this.triForm.valueChanges.subscribe((res) => {
      console.log(res)
      console.log(this.triForm)
      if (this.triForm.valid) {
        try {
          this.triangleResult = typeOfTriangle(
            +this.triForm.controls.sideA.value,
            +this.triForm.controls.sideB.value,
            +this.triForm.controls.sideC.value
          )
        } catch (err) {
          this.triangleResult = err.message
        }
      } else {
        this.triangleResult = ''
      }
    })
  }

  public getErrorMessage (side) {
    let errorType = Object.keys(side.errors)[0]
    if (errorType === 'required') {
      return 'Required field'
    } else {
      return side.errors[errorType]
    }
  }

  logit (item) {
    console.log(item)
  }
}