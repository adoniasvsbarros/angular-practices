import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeM38iDXwe2IDyowE5-CCVk3BUu4Idbtk";

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.url, {
      email,
      password,
      returnSecureToken: true,
    });
  }

  signin() {}
}
