import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { Router } from '@angular/router';
import { LocalService } from '../services/localJson.service';
import { AppConfig } from '../common/config';
import { ValidationService } from '../services/validation.service';
import { PersonalInfoComponent } from '../../personal-info/personal-info.component';

export class SharedModel {
	public model: any;
	public fields: any;
	form = new FormGroup({});
	public nextUrl = '';
	public prevUrl = '';
	options: FormlyFormOptions = { formState: { submitted: false } };

	constructor(public service: LocalService, public router: Router) {}

	getAppFields(pagename) {
		this.service.get(pagename).subscribe((result) => {
			(this.fields = result.fields), (this.model = result);
			delete this.model.fields;
			this.nextUrl = AppConfig.NextPage(this.model);
			this.prevUrl = AppConfig.PrevPage(this.model);
			ValidationService.orgModel = this.model;
		});
	}

	submit(url) {
		this.options.formState.submitted = true;
		if (this.form.valid) {
			console.log(this.model);
			this.router.navigateByUrl('/' + this.nextUrl);
		}
	}

	CheckDisable() {
		return AppConfig.CheckDisable(this.model);
	}
}