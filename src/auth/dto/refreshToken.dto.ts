import { IsString } from "class-validator";

export class RefreshToken {
    @IsString({ 
        message: "You did not pass refresh token or it is not a string =("
    })
    refreshToken: string
}