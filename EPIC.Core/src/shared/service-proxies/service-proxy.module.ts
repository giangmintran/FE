import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
//import { AbpHttpInterceptor } from "abp-ng2-module";

import * as ApiServiceProxies from "./service-proxies";
import * as ProvinceServiceProxies from "./province-service";
import * as FileServiceProxies from "./file-service";
import { BroadcastService } from "./broadcast-service";
import { ProvinceServiceProxy } from "./province-service";

@NgModule({
    providers: [
        //core
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        //File
        FileServiceProxies.FileServiceProxy,
        //InvestorService
        //{ provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
        ProvinceServiceProxy,
        // BusinessCustomerService
        BroadcastService,
    ]
})
export class ServiceProxyModule { }
