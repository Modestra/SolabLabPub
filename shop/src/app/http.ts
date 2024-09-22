import { isDevMode } from "@angular/core";

export const urls = {
    apiUrl: isDevMode() ? "http://127.0.0.1:8000" : "http://185.135.82.172:8000",
    courseUrl: "http://dzitskiy.ru:5000"
}