import { TestBed, inject } from '@angular/core/testing';

import { PizzaListService } from './pizza-list.service';

describe('PizzaListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaListService]
    });
  });

  it('should be created', inject([PizzaListService], (service: PizzaListService) => {
    expect(service).toBeTruthy();
  }));
});
