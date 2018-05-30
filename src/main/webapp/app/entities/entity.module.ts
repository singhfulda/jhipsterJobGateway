import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterJobGatewayRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterJobGatewayCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterJobGatewayLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterJobGatewayDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterJobGatewayTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterJobGatewayEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterJobGatewayJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterJobGatewayJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterJobGatewayRegionMySuffixModule,
        JhipsterJobGatewayCountryMySuffixModule,
        JhipsterJobGatewayLocationMySuffixModule,
        JhipsterJobGatewayDepartmentMySuffixModule,
        JhipsterJobGatewayTaskMySuffixModule,
        JhipsterJobGatewayEmployeeMySuffixModule,
        JhipsterJobGatewayJobMySuffixModule,
        JhipsterJobGatewayJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterJobGatewayEntityModule {}
