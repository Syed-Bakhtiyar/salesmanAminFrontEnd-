import { TestBed } from '@angular/core/testing';

import { SweetAlertModalService } from './sweet-alert-modal.service';

describe('SweetAlertModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetAlertModalService = TestBed.get(SweetAlertModalService);
    expect(service).toBeTruthy();
  });
});
