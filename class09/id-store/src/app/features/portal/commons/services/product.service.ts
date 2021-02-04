import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PortalServicesModule } from '../services/services.module';
import { forkJoin, Observable } from 'rxjs';
import { IProductResponse } from '../../interfaces/product.interface';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: PortalServicesModule
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<IProductResponse[]>(`${environment.api}/product`)
    .pipe(
      map( (originResponse: IProductResponse[]) => {
        return originResponse.map((item: IProductResponse) => new Product(item));
      } )
    );
  }
}
