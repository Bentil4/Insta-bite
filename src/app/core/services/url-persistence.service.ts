import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlPersistenceService {
  private readonly router = inject(Router);

  updateQueryParams(queryParameters: Record<string, string | number | null>): void {
    const queryParams: Record<string, string | null> = {};

    for (const [parameterKey, parameterValue] of Object.entries(queryParameters)) {
      queryParams[parameterKey] = parameterValue !== null && parameterValue !== '' ? String(parameterValue) : null;
    }

    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  getQueryParameterAsString(key: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  getQueryParameterAsNumber(key: string): number | null {
    const value = this.getQueryParameterAsString(key);
    if (value === null) return null;
    const parsedNumber = Number(value);
    return isNaN(parsedNumber) ? null : parsedNumber;
  }
}
