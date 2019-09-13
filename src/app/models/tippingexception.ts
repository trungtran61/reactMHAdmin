export interface ITippingException
{
jobNumber: string;
serviceProvider: string;
jobRate: number;                
tipAmount: number;
completionDate: Date;
}

export interface ITippingExceptionDates
{
    fromDate: string;
    toDate: string;
}