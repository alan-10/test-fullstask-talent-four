

import { AxiosPoint } from "@/plugins/axios";
import type { SystemPointCreate,SystemPoint, SystemPointWithUser } from '@/interface/SiystemPoint'


export class SytemPointApi {
  static URI = "/sytemPoint";

  async create(registration: string): Promise<SystemPoint> {
    return await AxiosPoint.post(SytemPointApi.URI, { registration }).
      then(response => {
        return response.data;
      });
  }

  async list(): Promise<SystemPointWithUser[]> {
    return await AxiosPoint.get(SytemPointApi.URI+'/list').
      then(response => {
        return response.data;
      });
  }
}