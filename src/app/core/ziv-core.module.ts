import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageService, ApplicationInitService, FirebaseService } from './services';

@NgModule({
  id: 'ZIV_CORE_MODULE',
  imports: [
    CommonModule
  ]
})
export class ZivCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZivCoreModule,
      providers: [
        ApplicationInitService,
        FirebaseService,
        StorageService
      ]
    }
  }

  constructor(@Optional() @SkipSelf() parentModule: ZivCoreModule) {
    // Prevent import of core module in any module other then AppModule
    if (parentModule) {
      console.error('ZivCoreModule is already loaded.');
    }
  }
}
