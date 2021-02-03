import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PortalServicesModule } from '../services/services.module';
import { Observable } from 'rxjs';
import { IProductResponse } from '../../interfaces/product.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: PortalServicesModule
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProductResponse[]> {
    return this.http.get<IProductResponse[]>(`${environment.api}/product`);
  }
}
