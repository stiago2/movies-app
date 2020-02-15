import { TestBed } from '@angular/core/testing';

import { LoadingEventBusService } from './loading-event-bus.service';

describe('LoadingEventBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingEventBusService = TestBed.get(LoadingEventBusService);
    expect(service).toBeTruthy();
  });
});
