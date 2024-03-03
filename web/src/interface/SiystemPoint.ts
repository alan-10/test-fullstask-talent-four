export interface SystemPointCreate {
  registration?: string;
}


export interface SystemPoint {
  id: string
  userId: string
  date: string,
  dateEntry: string,
  dateExit?: string
}

export interface SystemPointWithUser {
  userName: string
  userEmail: string;
  pointId: string
  pointDate: string
  pointEntry: string
  pointExit?: string,
}