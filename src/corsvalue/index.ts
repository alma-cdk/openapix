import { Construct } from 'constructs';
import { addError } from '../errors/add';

abstract class CorsSettingValue {
  public static readonly ANY: string = '*';


  public static from(scope: Construct, ...values: string[]): string {
    if (values.length < 1) {
      addError(scope, CorsSettingValue.errorMessage);
      return '';
    }
    return values.join(',');
  }

  protected static errorMessage: string;
}

export class CorsOrigins extends CorsSettingValue {
  protected static errorMessage: string = 'CorsOrigins.fromList() call values must contain at least 1 origin';
}

export class CorsMethods extends CorsSettingValue {
  protected static errorMessage: string = 'CorsMethods.fromList() call values must contain at least 1 method';
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
export class CorsHeaders extends CorsSettingValue {
  protected static errorMessage: string = 'CorsHeaders.fromList() call values must contain at least 1 header';
}
