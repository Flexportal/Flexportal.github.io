(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{2223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<fp-new-features\r\n    [featureFlags]="featuresFlags"\r\n    [tenantFlagSettings]="tenantFlagSettings$ | async"\r\n></fp-new-features>\r\n'},2224:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<fp-general-settings\r\n    [generalSetting]="generalSetting$ | async"\r\n></fp-general-settings>'},2225:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default='<h5>{{ \'shared.progress\' | translate }}</h5>\r\n<table class="table" *ngIf="featureFlags && featureFlags.length > 0">\r\n  <thead>\r\n    <th>{{ \'shared.name\' | translate }}</th>\r\n    <th>{{ \'shared.count\' | translate }}</th>\r\n    <th>{{ \'shared.progress\' | translate }}</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor="let ff of featureFlags">\r\n      <td><a [href]="ff.url">{{ ff.name }}</a></td>\r\n      <td>{{ ff.count }}</td>\r\n      <td>\r\n        <div class="progress">\r\n          <div class="progress-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" [ngStyle]="{width: ff.count/ff.allCount*100 + \'%\'}">\r\n            {{getRatio(ff.count, ff.allCount)}}%\r\n          </div>\r\n       </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div *ngIf="tenantFlagSettings">\r\n  <h5>{{ \'settings.new-features-this-tenant\' | translate }}</h5>\r\n  <table class="table">\r\n    <thead>\r\n      <th>{{ \'shared.name\' | translate }}</th>\r\n      <th>{{ \'shared.state\' | translate }}</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor="let ff of tenantFlagSettings | keyvalue">\r\n        <td>{{ ff.key }}</td>\r\n        <td *ngIf="ff.value">{{ \'shared.yes\' | translate }}</td>\r\n        <td *ngIf="!ff.value">{{ \'shared.no\' | translate }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>'},2376:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SettingsModule",(function(){return SettingsModule}));var _a,_b,_c,featureFlagsApi_service=__webpack_require__(530),core=__webpack_require__(0),nav_service=__webpack_require__(206),ngrx_store=__webpack_require__(9),state=__webpack_require__(326),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let new_features_shell_component_NewFeaturesShellComponent=class NewFeaturesShellComponent{constructor(featureFlagsApiService,navService,store){this.featureFlagsApiService=featureFlagsApiService,this.navService=navService,this.store=store,this.loading=!0,this.navService.setLocation("frame.menu.new-features")}ngOnInit(){this.load(),this.tenantFlagSettings$=this.store.select(state.f)}load(){this.loading=!0,this.featureFlagsApiService.apiFeatureFlagsGetFeatureFlagsGet().subscribe(data=>{this.featuresFlags=data.featureFlags,this.loading=!1},()=>this.loading=!1)}};new_features_shell_component_NewFeaturesShellComponent=__decorate([Object(core.Component)({template:(__webpack_require__(2223).default||__webpack_require__(2223)).length?__webpack_require__(2223).default||__webpack_require__(2223):""}),__metadata("design:paramtypes",["function"==typeof(_a=void 0!==featureFlagsApi_service.a&&featureFlagsApi_service.a)?_a:Object,"function"==typeof(_b=void 0!==nav_service.a&&nav_service.a)?_b:Object,"function"==typeof(_c=void 0!==ngrx_store.h&&ngrx_store.h)?_c:Object])],new_features_shell_component_NewFeaturesShellComponent);var general_settings_shell_component_a,general_settings_shell_component_b,router=__webpack_require__(45),general_settings_shell_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},general_settings_shell_component_metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let general_settings_shell_component_GeneralSettingsShellComponent=class GeneralSettingsShellComponent{constructor(navService,store){this.navService=navService,this.store=store,this.navService.setLocation("frame.menu.settings")}ngOnInit(){this.store.dispatch(new state.b("GeneralSettings Component")),this.generalSetting$=this.store.pipe(Object(ngrx_store.q)(state.g))}};general_settings_shell_component_GeneralSettingsShellComponent=general_settings_shell_component_decorate([Object(core.Component)({template:(__webpack_require__(2224).default||__webpack_require__(2224)).length?__webpack_require__(2224).default||__webpack_require__(2224):"",changeDetection:core.ChangeDetectionStrategy.OnPush}),general_settings_shell_component_metadata("design:paramtypes",["function"==typeof(general_settings_shell_component_a=void 0!==nav_service.a&&nav_service.a)?general_settings_shell_component_a:Object,"function"==typeof(general_settings_shell_component_b=void 0!==ngrx_store.h&&ngrx_store.h)?general_settings_shell_component_b:Object])],general_settings_shell_component_GeneralSettingsShellComponent);var new_features_component_a,new_features_component_b,general_settings_component=__webpack_require__(1352),shared_module=__webpack_require__(292),feature_flag_service=__webpack_require__(813),new_features_component_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},new_features_component_metadata=function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};let NewFeaturesComponent=class NewFeaturesComponent{set featureFlags(value){this._featureFlags=value}get featureFlags(){return this._featureFlags}set tenantFlagSettings(value){this._tenantFlagSettings=value}get tenantFlagSettings(){return this._tenantFlagSettings}getRatio(count,allCount){return Math.floor(count/allCount*100)}};new_features_component_decorate([Object(core.Input)(),new_features_component_metadata("design:type",Array),new_features_component_metadata("design:paramtypes",[Array])],NewFeaturesComponent.prototype,"featureFlags",null),new_features_component_decorate([Object(core.Input)(),new_features_component_metadata("design:type","function"==typeof(new_features_component_a=void 0!==feature_flag_service.IFeatureFlags&&feature_flag_service.IFeatureFlags)?new_features_component_a:Object),new_features_component_metadata("design:paramtypes",["function"==typeof(new_features_component_b=void 0!==feature_flag_service.IFeatureFlags&&feature_flag_service.IFeatureFlags)?new_features_component_b:Object])],NewFeaturesComponent.prototype,"tenantFlagSettings",null),NewFeaturesComponent=new_features_component_decorate([Object(core.Component)({selector:"fp-new-features",template:(__webpack_require__(2225).default||__webpack_require__(2225)).length?__webpack_require__(2225).default||__webpack_require__(2225):""})],NewFeaturesComponent);var settings_module_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let SettingsModule=class SettingsModule{};SettingsModule=settings_module_decorate([Object(core.NgModule)({declarations:[general_settings_component.a,general_settings_shell_component_GeneralSettingsShellComponent,NewFeaturesComponent,new_features_shell_component_NewFeaturesShellComponent],imports:[shared_module.a,router.e.forChild([{path:"general",component:general_settings_shell_component_GeneralSettingsShellComponent},{path:"new-features",component:new_features_shell_component_NewFeaturesShellComponent}])]})],SettingsModule)}}]);
//# sourceMappingURL=149.662822987faa05fa847b.bundle.js.map