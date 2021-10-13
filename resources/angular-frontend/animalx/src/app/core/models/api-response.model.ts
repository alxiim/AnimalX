export interface ApiResponse<T> {
    status: 'succes' | 'fail' | 'error';
    message: string;
    data: T;
}
