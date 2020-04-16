import { ApiService } from './ApiService';

const endpoint = 'courses';

export const CourseService = {
    list(){
        return ApiService.get(endpoint);
    },
    create(newCouse){
        return ApiService.Service.post(endpoint, newCouse);
    },
    remove(couseId){
        return ApiService.Service.delete(endpoint, couseId);

    }
}