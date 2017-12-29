import { Component, ViewContainerRef, ViewChild,OnInit } from '@angular/core';
import { FieldType,FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
  <div class="input-wrapper">
  <span class="{{field.templateOptions.className || ''}} help-section-label">
  <span [innerHTML]="field.templateOptions.template"></span>
  </span>
  <div>
      <template #fieldComponent></template>
  </div>
</div>
  `,
})
export class FormlyPanelWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
