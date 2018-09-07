import { Component, OnInit } from '@angular/core';
import { LocalService } from '../shared/services/localJson.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedModel } from '../shared/components/sharedmodel.component';

@Component({
	selector: 'app-dynamic',
	templateUrl: './dynamic.component.html'
})
export class DynamicComponent extends SharedModel implements OnInit {
	constructor(public service: LocalService, public router: Router, private route: ActivatedRoute) {
		super(service, router);
		this.router.routeReuseStrategy.shouldReuseRoute = function() {
			return false;
		};
	}

	ngOnInit() {
		const page = this.route.snapshot.params['id'];
		debugger;
		this.getAppFields(page);
	}
}
