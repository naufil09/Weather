export class weatherModel {
  location!: locationModel;
  current!: currentModel;
}
export class locationModel {
  id: number | undefined;
  name!: string;
  region!: string;
  country!: string;
  lat!: number;
  lon!: number;
  tz_id!: string;
  localtime!: string;
}

export class currentModel {
  id!: number;
  last_updated!: string;
  temp_c!: number;
  temp_f!: number;
  is_day!: boolean;
}
